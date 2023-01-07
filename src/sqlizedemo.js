const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./quiz.db",
});

async function test() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
async function closeDb() {
    try {
      await sequelize.close();
      console.error("database closed.");
    } catch (error) {
      console.error("unable to close the Database");
    }
  };

test();
setTimeout(closeDb,2000)



