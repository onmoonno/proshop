import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/user.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    // clear out the database before any operations
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users); // insert user data into the database

    const adminUser = createdUsers[0]._id; // get the admin User, and map all the products to the admin user
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts); // insert all the products into the database

    console.log("Data Imported".green.inverse); // function in colors package, can directly use, no need of color.green
    process.exit(); // we don't want to kill it, so not using process.exit(1)
  } catch (error) {
    console.error(`${error}`.red.inverse); // when error, show it in red background
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// use process.argv to pass command line argument, when "-d" activate destroyData func
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
