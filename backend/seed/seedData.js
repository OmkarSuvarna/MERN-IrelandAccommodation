const accommodationController = require('../controllers/accommodationController');

const sampleAccommodations = [
  {
    streetName: 'Abbey Street',
    county: 'Dublin',
    eircode: 'D01AB12',
    rent: 800,
    deposit: 800,
    fromDate: new Date('2024-01-01'),
    toDate: new Date('2024-02-01'),
    accommodationType: 'Apartment',
    lookingFor: 'Females Only',
    livingRoomShared: true,
    kitchenShared: true,
    bedroom: 2,
    bath: 1,
    sutiableFor: 'Students',
    durationType: 'Permanent',
    furnished: true,
    billsIncluded: false,
    bills: ['Electricity', 'Wifi'],
    roomSharing: true,
    roomSharingNumber: 0,
    colleges: ['Dublin Business School', 'Technological University Dublin'],
    store: ['Aldi', 'LIDL', 'Tesco', 'Spar'],
    fastFood: ['Supermac', 'Five Guys', 'Subway', 'Apache Pizza'],
    contactNumber: '123-456-7890',
    email: 'sample@example.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s',
    image: ['1.jpg', '2.jpg', '3.jpg'],
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    userID: '65722ef668cf455dc626deed'
  },
  {
    streetName: 'Dorset Street',
    county: 'Dublin',
    eircode: 'D06CD34',
    rent: 700,
    deposit: 700,
    fromDate: new Date('2024-01-15'),
    toDate: new Date('2024-05-15'),
    accommodationType: 'Apartment',
    lookingFor: 'Males Only',
    livingRoomShared: true,
    kitchenShared: true,
    bedroom: 3,
    bath: 1,
    sutiableFor: 'Students',
    durationType: 'Permanent',
    furnished: true,
    billsIncluded: false,
    bills: ['Electricity', 'Wifi'],
    roomSharing: true,
    roomSharingNumber: 0,
    colleges: ['Dublin Business School', 'Technological University Dublin'],
    store: ['Aldi', 'LIDL', 'Tesco', 'Spar'],
    fastFood: ['Supermac', 'Five Guys', 'Subway', 'Apache Pizza'],
    contactNumber: '123-456-7890',
    email: 'sample@example.com',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s',
    image: ['1.jpg', '2.jpg', '3.jpg'],
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    userID: '65722ef668cf455dc626deed'
  }
];

const seedData = async () => {
  try {
    const seedResult = await Promise.all(
      sampleAccommodations.map((accommodationData) =>
        accommodationController.createAccommodation(accommodationData)
      )
    );
    console.log('Sample data seeded successfully:', seedResult);
  } catch (error) {
    console.error('Error seeding data:', error.message);
  }
};

module.exports = seedData;
