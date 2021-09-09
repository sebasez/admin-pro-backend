const mongoose = require("mongoose");

const dbConecction = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      //useInifiedTopology: true,
      //useCreateIndex: true,
    });
    console.log("Db OnLine");
  } catch (error) {
    console.log(error);
    throw new Error("Error a la hora de iniciar la bd, ver logs");
  }
};

module.exports = {
  dbConecction,
};
