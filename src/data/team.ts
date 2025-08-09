export type Detail = {
  type: 'education' | 'specialization' | 'publication' | 'award';
  content: string;
};

export type SocialLinks = {
  linkedin?: string;
  website?: string;
  email?: string;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  details: Detail[];
  bio: string;
  skills: string[];
  social: SocialLinks;
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Bintang Rizal Aulan Ubaidi',
    role: 'Lead Researcher',
    avatar: '/images/noprofile.jpg',
    details: [
      {
        type: 'education',
        content: 'Student, SMA Khalifa Insan Madani Sejahtera'
      },
      {
        type: 'specialization',
        content: 'Research Focus: Gen Z, Political Buzzers, and Social Media'
      },
      {
        type: 'publication',
        content: 'Research Project: "Gen Z dalam Pusaran Buzzer"'
      },
      {
        type: 'award',
        content: 'Competition Category: IPS (Sosiologi)'
      }
    ],
    bio: 'Bintang is a passionate student researcher at SMA Khalifa Insan Madani Sejahtera, leading the project "Gen Z dalam Pusaran Buzzer." Their work focuses on understanding how Gen Z interacts with political buzzers on social media in Indonesia, aiming to raise awareness through the "BuzzerLurker.Com" educational website.',
    skills: [
      'Social Media Analysis',
      'Qualitative Research',
      'Youth Studies',
      'Web Development (BuzzerLurker.Com)'
    ],
    social: {
      linkedin: '',
      website: '',
      email: ''
    }
  },
  {
    id: '2',
    name: 'Lovely Aisya Arisetya',
    role: 'Research Assistant',
    avatar: '/images/noprofile.jpg',
    details: [
      {
        type: 'education',
        content: 'Student, SMA Khalifa Insan Madani Sejahtera'
      },
      {
        type: 'specialization',
        content: 'Area of Interest: Social Behavior and Digital Literacy'
      },
      {
        type: 'publication',
        content: 'Contributor to "Gen Z dalam Pusaran Buzzer" Research'
      },
      {
        type: 'award',
        content: 'Institution: Kota Tangerang Selatan, Banten, Year: 2025'
      }
    ],
    bio: 'Lovely is a dedicated research assistant involved in the "Gen Z dalam Pusaran Buzzer" project. She contributes to analyzing social media trends and youth awareness regarding political buzzers, supporting the development of educational materials for the "BuzzerLurker.Com" platform.',
    skills: [
      'Data Collection',
      'Content Analysis',
      'Digital Literacy',
      'Team Collaboration'
    ],
    social: {
      linkedin: '',
      website: '',
      email: ''
    }
  }
];