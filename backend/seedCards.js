const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Card = require('./models/Card');

// Load environment variables
dotenv.config();

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Data to seed
const cards = [
  { title: 'Branches', description: 'Abstract Branches lets you manage, version, and document your designs in one place.' },
  { title: 'Manage your account', description: 'Configure your account settings, such as your email, profile details, and password.' },
  { title: 'Manage organizations, teams, and projects', description: 'Use Abstract organizations, teams, and projects to organize your people and your work.' },
  { title: 'Manage billing', description: 'Change subscriptions and payment details.' },
  { title: 'Authenticate to Abstract', description: 'Set up and configure SSO, SCIM, and Just-in-Time provisioning.' },
  { title: 'Abstract support', description: 'Get in touch with a human.' },
];

// Seed function
const seedDB = async () => {
  try {
    await Card.deleteMany({});
    await Card.insertMany(cards);
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seed function
seedDB();
