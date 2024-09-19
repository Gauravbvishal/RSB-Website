export const navs = [
  {
    id: '1',
    name: 'Home',
    link: '/',
    active: true,
  },
  {
    id: '2',
    name: 'About Us',
    link: '/About-us',
    active: false,
    
  },
  {
    id: '3',
    name: 'Services',
    link: '/Services',
    active: false,
    dropdown: [
      { id: '3-1', name: 'Service 1', link: '/service1' },
      { id: '3-2', name: 'Service 2', link: '/service2' },
      { id: '3-3', name: 'Service 3', link: '/service3' },
    ],
  },
  {
    id: '4',
    name: 'Careers',
    link: '/Hiring',
    active: false,
  },
  {
    id: '5',
    name: 'Resources',
    link: '/Resources',
    active: false,
  },
  
];