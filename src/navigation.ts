import { getPermalink, getBlogPermalink } from './utils/permalinks';
import { SERVICES } from './data/site';

export const headerData = {
  links: [
    { text: 'About Us', href: getPermalink('/about') },
    {
      text: 'Services',
      links: [{ text: 'All services', href: getPermalink('/services') }, ...SERVICES.map((s) => ({ text: s.label, href: getPermalink(`/services/${s.slug}`) }))],
    },
    { text: 'Resources', href: getBlogPermalink() },
    { text: 'How It Works', href: getPermalink('/how-it-works') },
  ],
  actions: [{ text: 'Request Consultation', href: getPermalink('/request-consultation') }],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: SERVICES.slice(0, 6).map((s) => ({ text: s.label, href: getPermalink(`/services/${s.slug}`) })),
    },
    {
      title: 'More services',
      links: SERVICES.slice(6).map((s) => ({ text: s.label, href: getPermalink(`/services/${s.slug}`) })),
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'How It Works', href: getPermalink('/how-it-works') },
        { text: 'Resources', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms-of-service') },
    { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
  ],
  socialLinks: [],
  footNote: `
    Demo copy of <a class="text-blue-600 underline dark:text-muted" href="https://epcmst.com">epcmst.com</a> for a university project · Built with AstroWind
  `,
};
