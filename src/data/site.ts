// The pages of the real epcmst.com that articles may link to. The demo site
// has one page for each, so links in published articles always lead
// somewhere. (The same list is kept in the hub's site_pages table.)

export const REAL_SITE = 'https://epcmst.com';

export const SERVICES = [
  { slug: 'c2b-c2c-contracts', label: 'C2B and C2C Contracts', icon: 'tabler:file-certificate', blurb: 'Direct business-to-business and contractor-to-contractor engagements, on fixed-rate terms.' },
  { slug: 'civil-engineering', label: 'Civil Engineering', icon: 'tabler:road', blurb: 'Site, grading and infrastructure engineering support for industrial projects.' },
  { slug: 'construction', label: 'Construction', icon: 'tabler:building-factory-2', blurb: 'Construction support and oversight for capital projects in the field.' },
  { slug: 'engineering', label: 'Engineering', icon: 'tabler:ruler-measure', blurb: 'Multi-discipline engineering specialists for specific project phases.' },
  { slug: 'facilities-engineering', label: 'Facilities Engineering', icon: 'tabler:building-warehouse', blurb: 'Engineering for industrial facilities, upgrades and brownfield work.' },
  { slug: 'pipeline-engineering', label: 'Pipeline Engineering', icon: 'tabler:route', blurb: 'Pipeline engineering specialists for design, integrity and tie-in work.' },
  { slug: 'procurement', label: 'Procurement', icon: 'tabler:shopping-cart', blurb: 'Procurement and commercial specialists to structure contracts and manage suppliers.' },
  { slug: 'project-management', label: 'Project Management', icon: 'tabler:chart-dots-3', blurb: 'Project managers and project controls support for schedule and budget.' },
  { slug: 'specialists', label: 'Specialists', icon: 'tabler:users-group', blurb: 'Pre-vetted EPCM specialists deployed for short, high-risk tasks.' },
  { slug: 'structural-engineering', label: 'Structural Engineering', icon: 'tabler:building-bridge-2', blurb: 'Structural engineering for industrial structures and supports.' },
  { slug: 'water-management', label: 'Water Management', icon: 'tabler:droplet', blurb: 'Industrial water engineering and management on project sites.' },
  { slug: 'worksite-management', label: 'Worksite Management', icon: 'tabler:helmet', blurb: 'Worksite and onsite contractor management for field execution.' },
] as const;

/** Other pages of the real site, shown here as short placeholders. */
export const INFO_PAGES: Record<string, { title: string; text: string }> = {
  about: { title: 'About', text: 'EPCMst Technical Services is a Calgary firm that connects owners of industrial and infrastructure projects with pre-vetted EPCM specialists.' },
  'how-it-works': { title: 'How It Works', text: 'Project owners describe a short-term need; EPCMst matches it with a pre-vetted specialist on a fixed-rate C2B or C2C contract.' },
  pricing: { title: 'Pricing', text: 'Pricing is shown on the real site only.' },
  careers: { title: 'Careers', text: 'Opportunities for independent EPCM consultants are listed on the real site.' },
  'client-protection': { title: 'Client Protection', text: 'Details of the refund guarantee are on the real site.' },
  contact: { title: 'Contact', text: 'Reach the EPCMst team at support@epcmst.com.' },
  'request-consultation': { title: 'Request Consultation', text: 'Consultation requests are handled on the real site. This demo does not collect any information.' },
  'privacy-policy': { title: 'Privacy Policy', text: 'This demo site collects no personal information, sets no tracking cookies and has no forms.' },
  'terms-of-service': { title: 'Terms of Service', text: 'This is a demo copy for a university project. The real terms are on epcmst.com.' },
};
