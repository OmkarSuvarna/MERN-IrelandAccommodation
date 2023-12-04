const accommodationController = require('../controllers/accommodationController');

const sampleAccommodations = [
  {
    eircode: 'D01AB12',
    streetName: 'Sample Street',
    county: 'Sample County',
    accommodationType: 'Apartment',
    durationType: 'Short-term',
    fromDate: new Date('2024-01-01'),
    toDate: new Date('2024-02-01'),
    furnished: true,
    lookingFor: 'Male',
    bedroom: 2,
    bath: 1,
    kitchen: true,
    livingRoom: true,
    nearby: ['Aldi', 'Lidl'],
    rent: 1200,
    deposit: 500,
    billsIncluded: false,
    roomSharing: false,
    bills: ['Electricity', 'Water'],
    roomSharingNumber: 0,
    contactNumber: '123-456-7890',
    email: 'sample@example.com'
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
