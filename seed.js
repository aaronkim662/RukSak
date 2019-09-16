const { Gear, Location, Trip } = require('./model')

const seed = async() => {
  try {
    const location1 = await Location.create({ location: 'Bear Mountain' });
    const location2 = await Location.create({ location: 'Mountain Creek' });
    const location3 = await Location.create({ location: 'Catskills' });

    const hike = await Trip.create({ trip: 'Hiking' });
    const camp = await Trip.create({ trip: 'Camping' });
    const bike = await Trip.create({ trip: 'Biking' });

    const gear1 = await Gear.create({ name: 'Tent' });
    const gear2 = await Gear.create({ name: 'Sleeping Bag' });
    const gear3 = await Gear.create({ name: 'Water' });
    const gear4 = await Gear.create({ name: 'Backpack' });
    const gear5 = await Gear.create({ name: 'Flashlight' });
    const gear6 = await Gear.create({ name: 'Bike' });

    await hike.setLocation([gear3, gear4, gear5]);
    await camp.setLocation([gear1, gear2, gear3, gear4, gear5]);
    await bike.setLocation([gear3, gear4, gear5, gear6]);

  } catch(e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
}


seed();
