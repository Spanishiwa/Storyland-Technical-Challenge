type TFooterItem = {
  href: string;
  label: string;
};
type TFooterSection = {
  title: string;
  items: TFooterItem[];
};

const footerConfig: TFooterSection[] = [
  {
    title: 'Platform Features',
    items: [
      { href: 'https://www.storylandstudios.com/#p2', label: 'Strategic Planning' },
      { href: 'https://www.storylandstudios.com/#p4', label: 'Story Development' },
      { href: 'https://www.storylandstudios.com/#p6', label: 'Production Design' },
    ],
  },
  {
    title: 'Enterprise Solutions',
    items: [
      {
        href: 'https://www.storylandstudios.com/#p8',  
        label: 'Guest Experiences',
      },
      {
        href: 'https://www.storylandstudios.com/#p9',
        label: 'Interactive Experiences',
      },
      {
        href: 'https://www.storylandstudios.com/#p10',
        label: 'Project Management',
      },
    ],
  },
  {
    title: 'Resources',
    items: [
      {
        href: 'https://www.storylandstudios.com/news/',
        label: 'News',
      },
      {
        href: 'https://www.storylandstudios.com/careers/',
        label: 'Careers',
      },
      {
        href: 'https://www.storylandstudios.com/legal/',
        label: 'Legal',
      },
    ],
  },
];

export default footerConfig;
