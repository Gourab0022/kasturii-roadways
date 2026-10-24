'use strict';
module.exports = {
 async index(ctx) {
  const docs = async (uid, populate) => strapi.documents(uid).findMany({ status:'published', ...(populate ? { populate } : {}), limit: 200 });
  const single = async uid => strapi.documents(uid).findFirst({ status:'published' });
  const [cities, routes, coaches, amenities, faqs, settings, content, promotions, testimonials, schedules] = await Promise.all([
   docs('api::city.city'), docs('api::route.route', { origin:true,destination:true }), docs('api::coach.coach', { coachType:true, amenities:true, gallery:true }), docs('api::amenity.amenity'), docs('api::faq.faq'), single('api::website-setting.website-setting'), single('api::site-content.site-content'), docs('api::promotion.promotion',{image:true}), docs('api::testimonial.testimonial'), docs('api::scheduled-service.scheduled-service',{route:{populate:['origin','destination']},coach:{populate:['coachType','amenities']}})
  ]);
  const active = items => items.filter(x=>x.isActive !== false);
  const visibleSchedules = active(schedules).filter(s=>s.route?.origin?.name && s.route?.destination?.name);
  ctx.body = { data: {
   cities:active(cities).map(x=>({name:x.name,slug:x.slug})),
   routes:active(routes).filter(x=>x.origin?.name && x.destination?.name).map(x=>({name:x.name,slug:x.slug,from:x.origin.name,to:x.destination.name,description:x.description,isPopular:x.isPopular})),
   coaches:active(coaches).map(x=>({name:x.name,description:x.description,coachType:x.coachType?.name,features:(x.amenities||[]).map(a=>a.name),image:x.gallery?.[0]?.url || null})),
   amenities:active(amenities).map(x=>({label:x.name,icon:x.icon,enabled:true})),
   faqs:active(faqs).map(x=>({q:x.question,a:x.answer})),
   schedules:visibleSchedules.map(x=>({id:x.documentId,from:x.route.origin.name,to:x.route.destination.name,departure:x.departureTime,arrival:x.arrivalTime,coachType:x.coach?.coachType?.name || x.coach?.name || '',fare:x.startingFare,currency:x.currency||'INR',amenities:(x.coach?.amenities||[]).map(a=>a.name),sample:false})),
   settings: settings ? { companyName:settings.companyName,tagline:settings.tagline,supportPhone:settings.supportPhone,whatsappNumber:settings.whatsappNumber,supportEmail:settings.supportEmail,businessEmail:settings.businessEmail,registeredOffice:settings.registeredOffice,operationalOffice:settings.operationalOffice,officeHours:settings.officeHours,redbusBookingUrl:settings.redbusBookingUrl,makemytripBookingUrl:settings.makemytripBookingUrl,googleMapsUrl:settings.googleMapsUrl,facebookUrl:settings.facebookUrl,instagramUrl:settings.instagramUrl,youtubeUrl:settings.youtubeUrl } : null,
   content:content ? {heroTitle:content.heroTitle,heroDescription:content.heroDescription,aboutUs:content.aboutUs} : null,
   promotions:active(promotions).map(x=>({title:x.title,description:x.description,ctaLabel:x.ctaLabel,ctaUrl:x.ctaUrl})),
   testimonials:testimonials.filter(x=>x.isApproved === true).map(x=>({name:x.passengerName,text:x.reviewText,rating:x.rating}))
  }, meta:{ availabilityType:'published_schedules_only', liveSeats:false } };
 }
};
