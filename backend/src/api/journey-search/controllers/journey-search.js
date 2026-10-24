'use strict';
const DAYS = ['sun','mon','tue','wed','thu','fri','sat'];
module.exports = {
 async search(ctx) {
  const { from, to, date, passengers = '1' } = ctx.query;
  if (typeof from !== 'string' || typeof to !== 'string' || !/^\\d{4}-\\d{2}-\\d{2}$/.test(String(date)) || !/^\\d+$/.test(String(passengers))) return ctx.badRequest('Valid from, to, date (YYYY-MM-DD) and passengers required');
  const count = Number(passengers), journey = new Date(date + 'T12:00:00Z');
  if (!Number.isInteger(count) || count < 1 || count > 6 || Number.isNaN(journey.getTime()) || journey.toISOString().slice(0,10) !== date) return ctx.badRequest('Invalid search parameters');
  const today = new Date().toISOString().slice(0,10);
  if (date < today || date > new Date(Date.now() + 180*86400000).toISOString().slice(0,10)) return ctx.badRequest('Date must be within the next 180 days');
  const items = await strapi.documents('api::scheduled-service.scheduled-service').findMany({ status: 'published', populate: { route: { populate: ['origin','destination'] }, coach: { populate: ['coachType','amenities'] }, boardingPoints: true, droppingPoints: true }, limit: 500 });
  const norm = v => String(v || '').trim().toLowerCase();
  const data = items.filter(s => s.isActive !== false && s.route?.isActive !== false && norm(s.route?.origin?.name) === norm(from) && norm(s.route?.destination?.name) === norm(to) && (!s.validFrom || s.validFrom <= date) && (!s.validUntil || s.validUntil >= date) && (!Array.isArray(s.operatingDays) || !s.operatingDays.length || s.operatingDays.map(norm).includes(DAYS[journey.getUTCDay()])))
   .map(s => ({ id:s.documentId, serviceCode:s.serviceCode, departureTime:s.departureTime, arrivalTime:s.arrivalTime, arrivalDayOffset:s.arrivalDayOffset, startingFare:s.startingFare, currency:s.currency || 'INR', route:s.route, coach:s.coach, boardingPoints:s.boardingPoints, droppingPoints:s.droppingPoints }));
  ctx.body = { data, meta: { date, passengers: count, availabilityType: 'published_schedules_only', liveSeats: false, total: data.length } };
 }
};
