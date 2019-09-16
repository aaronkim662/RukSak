const { db } = require('./model');

const resetDb = async () => {
  try {
    await db.sync({ force: true });
  } catch (e) {
    console.log(e.message);
  } finally {
    process.exit();
  }
}

resetDb();
