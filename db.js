const Sequelize = require('sequelize'); //uppercase due to being a class constructor
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/nouns_db', {logging: false});
// const Op = Sequelize.Op;
const chalk = require('chalk');

const Persons = db.define('person', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    notEmpty: true,
  },
});
const Places = db.define('place', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    notEmpty: true,
  },
});
const Things = db.define('things', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    notEmpty: true,
  },
});

Persons.belongsTo(Places);
Places.hasMany(Persons);// instead of 1 to many if we need 1:1 relation it has to be .hasOne();

Persons.belongsTo(Things);
Things.hasMany(Persons);

const syncAndSeed = async () => {
  try {
    await db.sync({
      force: true,
    });
    const [home, office] = await Promise.all([
      Places.create({ name: 'Home' }),
      Places.create({ name: 'Office' }),
    ]);
    const [desk, paper] = await Promise.all([
      Things.create({ name: 'desk' }),
      Things.create({ name: 'paper' }),
    ]);
    const [amol, surabhi, agastya] = await Promise.all([
      Persons.create({
        name: 'amol',
        placeId: office.id,
        thingId: paper.id,
      }),
      Persons.create({
        name: 'surabhi',
        placeId: office.id,
        thingId: desk.id,
      }),
      Persons.create({
        name: 'agastya',
        placeId: home.id,
        thingId: desk.id,
      }),
    ]);
  } catch (err) {
    console.log(chalk.red(err, err.message));
  }
};
module.exports = {
  syncAndSeed,
  models: {
    Persons,
    Places,
    Things,
  },
};
