export const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Clients', href: '/clients' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
];

export const services = [
  {
    id: 'resource-handling-staffing',
    name: 'Resource Handling & Staffing',
    description:
      'End-to-end temporary and permanent staffing support for fast-moving teams and long-term workforce planning.',
    deliverables: ['Temporary staffing', 'Permanent hiring', 'Workforce deployment'],
  },
  {
    id: 'recruitment-talent-acquisition',
    name: 'Recruitment & Talent Acquisition',
    description:
      'Executive search, bulk hiring, and talent pipeline support tailored to business goals and team culture.',
    deliverables: ['Executive search', 'Bulk hiring', 'Talent screening'],
  },
  {
    id: 'hr-operations-compliance',
    name: 'HR Operations & Compliance',
    description:
      'Reliable HR processes and compliance guidance covering employee lifecycle operations and statutory needs.',
    deliverables: ['Employee lifecycle', 'Policy support', 'Statutory compliance'],
  },
  {
    id: 'payroll-management',
    name: 'Payroll Management',
    description:
      'Accurate payroll execution, filings, and salary administration with dependable monthly reporting.',
    deliverables: ['Payroll processing', 'Tax computation', 'Statutory filing'],
  },
  {
    id: 'training-development',
    name: 'Training & Development',
    description:
      'Practical onboarding, capability-building, and leadership training programs for growing organizations.',
    deliverables: ['Onboarding programs', 'Skills development', 'Leadership coaching'],
  },
  {
    id: 'operational-consulting',
    name: 'Operational Consulting',
    description:
      'Process improvement and organization design support that helps teams scale with confidence.',
    deliverables: ['Workforce planning', 'Process optimization', 'Performance frameworks'],
  },
] as const;

export const stats = [
  { value: '50+', label: 'Consultants deployed' },
  { value: '7+', label: 'Trusted client brands' },
  { value: '10+', label: 'Years of combined expertise' },
];

export const clients = [
  { name: 'Aditya Birla Insurance', image: '/aditya_birla_issurance.jpeg' },
  { name: 'Aditya Capital', image: '/aditya_capital.jpeg' },
  { name: 'Axis Max Life', image: '/axis_max_life.jpeg' },
  { name: 'Bharti', image: '/bharti.jpeg' },
  { name: 'Cars24', image: '/cars24.jpeg' },
  { name: 'Kotak Life', image: '/kotak_life.jpeg' },
  { name: 'Niva', image: '/niva.jpeg' },
];

export const openPositions = [
  { title: 'Recruitment Specialist', location: 'Gurugram', type: 'Full-time' },
  { title: 'HR Operations Associate', location: 'Noida', type: 'Full-time' },
  { title: 'Client Success Coordinator', location: 'Delhi NCR', type: 'Contract' },
];
