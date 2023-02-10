import {
  challenge1,
  challenge2,
  challenge3,
  challenge4,
  challenge5,
  challenge6,
  challenge7,
  challenge8,
  challenge9,
  welcome,
} from './markdown';

const instructions = [
  {
    title: 'Getting started',
    label: welcome,
  },
  {
    title: '1. Update NavBar link behavior',
    label: challenge1,
  },
  {
    title: '2. Add a unit test',
    label: challenge2,
  },
  {
    title: '3. Add another unit test',
    label: challenge3,
  },
  {
    title: '4. Update the footer position',
    label: challenge4,
  },
  {
    title: '5. Integrate with the backend API',
    label: challenge5,
  },
  {
    title: '6. Render the results of the first GET request',
    label: challenge6,
  },
  {
    title: '7. Add a feature to create a policyholder',
    label: challenge7,
  },
  {
    title: '8. Render the results of the second API request',
    label: challenge8,
  },
  {
    title: "9. List remaining to-do's before release",
    label: challenge9,
  },
];

const MOCK_POLICYHOLDERS = [
  {
    name: 'Stu Ungar',
    age: 42,
    address: {
      line1: '3730 Las Vegas Blvd S',
      line2: 'Suite 333',
      city: 'Las Vegas',
      state: 'Nevada',
      postalCode: '88901',
    },
    phoneNumber: '+1-833-412-8888',
  },
  {
    name: 'Richard Feynman',
    age: 68,
    address: {
      line1: '609 Princeton University',
      line2: 'PO Box 430',
      city: 'Princeton',
      state: 'New Jersey',
      postalCode: '08544-0430',
    },
    phoneNumber: '+1-609-258-3000',
  },
  {
    name: 'Emmanuel Dapidran Pacquiao',
    age: 44,
    address: {
      line1: '833 Downey Lane',
      line2: 'Apartment #3',
      city: 'Chicago',
      state: 'Illinois',
      postalCode: '60018',
    },
    phoneNumber: '+63-45-458-0021',
  },
  {
    name: 'Alexandre Dumas',
    age: 51,
    address: {
      line1: '141 Beacher Street',
      line2: undefined,
      city: 'Milford',
      state: 'Connecticut',
      postalCode: '06460',
    },
    phoneNumber: '+1-445-163-7792',
  },
];

const POLICYHOLDERS_URL =
  'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app/api/policyholders';

const newPolicyholder = () => {
  return MOCK_POLICYHOLDERS[
    Math.floor(Math.random() * MOCK_POLICYHOLDERS.length)
  ];
};

export default instructions;
export { newPolicyholder, POLICYHOLDERS_URL };
