import { products } from "./contants/data.js";
import Product from "./schema/ProductSchema.js";

const Dataproduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Data import sucessfully");
  } catch (error) {
    console.log("error while featching data", error.message);
  }
};

export default Dataproduct;
