'use strict';
const requests = new Map();
module.exports = {
 async create(ctx) {
  const ip = ctx.request.ip || 'unknown', now = Date.now();
  for (const [key, val] of requests) if (now - val.start > 60000) requests.delete(key);
  const slot = requests.get(ip) || { start: now, count: 0 };
  if (++slot.count > 5) return ctx.tooManyRequests('Please try again in a minute');
  requests.set(ip, slot);
  const input = ctx.request.body?.data || ctx.request.body || {};
  if (input.website || input.honeypot) { ctx.status = 202; ctx.body = { received: true }; return; }
  const name = String(input.name || '').trim(), mobileNumber = String(input.mobileNumber || input.mobile || '').trim(), email = String(input.email || '').trim(), subject = String(input.subject || '').trim(), message = String(input.message || '').trim();
  if (name.length < 2 || name.length > 120 || !/^\\+?[0-9\\s()-]{10,20}$/.test(mobileNumber) || !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email) || !subject || subject.length > 120 || message.length < 10 || message.length > 5000) return ctx.badRequest('Please provide valid contact details and a message (10-5000 characters)');
  await strapi.documents('api::contact-submission.contact-submission').create({ data: { name, mobileNumber, email, subject, message, status:'new', submittedAt: new Date().toISOString() } });
  ctx.status = 201; ctx.body = { received: true };
 }
};
