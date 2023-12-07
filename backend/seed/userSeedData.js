const userController = require('../controllers/userController');

const sampleUsers = [
  {
    fname: 'John',
    lname: 'Doe',
    password: 'samplepassword',
    email: 'john.doe@example.com',
    contact: '123-456-7890',
    profile: 'Student',
    college: 'DBS',
    posts: ['656e0cb2474c1410438cf68f'],
    shortlisted: ['656e0cb2474c1410438cf692']
  }
];

const seedData = async () => {
  try {
    const seedResult = await Promise.all(
      sampleUsers.map((userData) => userController.createUser(userData))
    );
    console.log('Sample data seeded successfully:', seedResult);
  } catch (error) {
    console.error('Error seeding data:', error.message);
  }
};

module.exports = seedData;