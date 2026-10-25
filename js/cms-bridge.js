/* Loads published CMS data before the existing presentation script. No private token in the browser. */
(async () => {
 const base = String(window.KASTURII_API_URL || '').replace(/\\/$/,'');
 if (base) {
  try {
   const res = await fetch(base + '/api/site-bootstrap', { headers:{Accept:'application/json'}, signal:AbortSignal.timeout(9000) });
   if (!res.ok) throw new Error('CMS returned ' + res.status);
   const { data } = await res.json();
   if (!data || typeof data !== 'object') throw new Error('Invalid CMS payload');
   CONFIG.CITIES = (data.cities || []).map(c=>c.name);
   CONFIG.ROUTES = (data.schedules || []).map(s=>({from:s.from,to:s.to,departure:s.departure,arrival:s.arrival,duration:'See operator',coachType:s.coachType,fare:s.fare == null ? 'Contact for fare' : '₹' + s.fare,amenities:s.amenities||[],sample:false}));
   CONFIG.COACHES = (data.coaches || []).map(c=>({name:c.name,description:c.description,image:c.image||'images/sleeper-interior.png',features:c.features||[],available:true}));
   CONFIG.AMENITIES = (data.amenities || []).map(a=>({label:a.label,icon:a.icon,enabled:true}));
   CONFIG.FAQS = data.faqs || [];
   const s = data.settings || {};
   const mapping = {supportPhone:'SUPPORT_PHONE',whatsappNumber:'WHATSAPP_NUMBER',supportEmail:'SUPPORT_EMAIL',businessEmail:'BUSINESS_EMAIL',registeredOffice:'REGISTERED_OFFICE',operationalOffice:'OPERATIONAL_OFFICE',officeHours:'OFFICE_HOURS',redbusBookingUrl:'REDBUS_BOOKING_URL',makemytripBookingUrl:'MAKEMYTRIP_BOOKING_URL',googleMapsUrl:'GOOGLE_MAP_EMBED_URL'};
   for(const [from,to] of Object.entries(mapping)) if(s[from]) CONFIG[to]=s[from];
   CONFIG.SOCIAL={facebook:s.facebookUrl||'#',instagram:s.instagramUrl||'#',youtube:s.youtubeUrl||'#'};
   window.KASTURII_CMS_CONNECTED=true;
  } catch(err) { console.error('CMS unavailable; published routes will not be shown',err); CONFIG.ROUTES=[]; CONFIG.CITIES=[]; CONFIG.FAQS=[]; CONFIG.COACHES=[]; CONFIG.AMENITIES=[]; }
 }
 const script=document.createElement('script'); script.src='js/main.js'; document.body.appendChild(script);
})();
