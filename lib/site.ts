export const site = {
  name: 'AKCON Infrastructure',
  tagline: 'Project Consulting Firm',
  email: 'info@akconinfra.com',
  phoneUS: '+1 (857) 701-2615',
  phoneIndia: '+91-9082957539',
  headquarters: 'A/404, Nadgaon, Salasar Brij Bhoomi, Near Maxus Mall, Bhayander (West), Mumbai, Maharashtra, 401101',
  offices: [
    { label: 'India Office', location: 'Mumbai, India' },
  ],
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Who We Work With', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
