import axios from "axios";

// export const catalog = [
//   {
//     title: "Fender Stratocaster",
//     image: "/images/Fender_Stratocaster.jpg",
//     price: 999.99,
//     category: "Electric",
//     _id: "GTR001",
//   },
//   {
//     title: "Gibson Les Paul",
//     image: "/images/Gibson_Les_Paul.jpg",
//     price: 2499.99,
//     category: "Electric",
//     _id: "GTR002",
//   },
//   {
//     title: "Ibanez RG550",
//     image: "/images/Ibanez_RG550.jpg",
//     price: 1299.99,
//     category: "Electric",
//     _id: "GTR003",
//   },
//   {
//     title: "Yamaha Pacifica",
//     image: "/images/Yamaha_Pacifica.jpg",
//     price: 499.99,
//     category: "Electric",
//     _id: "GTR004",
//   },
//   {
//     title: "PRS Custom 24",
//     image: "/images/PRS_Custom_24.jpg",
//     price: 3499.99,
//     category: "Electric",
//     _id: "GTR005",
//   },
//   {
//     title: "Fender Telecaster",
//     image: "/images/Fender_Telecaster.jpg",
//     price: 899.99,
//     category: "Electric",
//     _id: "GTR006",
//   },
//   {
//     title: "Epiphone SG",
//     image: "/images/Epiphone_SG.jpg",
//     price: 599.99,
//     category: "Electric",
//     _id: "GTR007",
//   },
//   {
//     title: "Gibson Flying V",
//     image: "/images/Gibson_Flying_V.jpg",
//     price: 1999.99,
//     category: "Electric",
//     _id: "GTR008",
//   },
//   {
//     title: "Jackson Dinky",
//     image: "/images/Jackson_Dinky.jpg",
//     price: 899.99,
//     category: "Electric",
//     _id: "GTR009",
//   },
//   {
//     title: "Taylor 314ce",
//     image: "/images/Taylor_314ce.jpg",
//     price: 2499.99,
//     category: "Acoustic",
//     _id: "GTR010",
//   },
//   {
//     title: "Martin D-28",
//     image: "/images/Martin_D28.jpg",
//     price: 3199.99,
//     category: "Acoustic",
//     _id: "GTR011",
//   },
//   {
//     title: "Boss DS-1 Distortion Pedal",
//     image: "/images/Boss_DS1.jpg",
//     price: 59.99,
//     category: "Pedal",
//     _id: "PDL001",
//   },
//   {
//     title: "Electro-Harmonix Big Muff Pi",
//     image: "/images/EHX_Big_Muff.jpg",
//     price: 89.99,
//     category: "Pedal",
//     _id: "PDL002",
//   },
//   {
//     title: "MXR Carbon Copy Analog Delay",
//     image: "/images/MXR_Carbon_Copy.jpg",
//     price: 149.99,
//     category: "Pedal",
//     _id: "PDL003",
//   },
//   {
//     title: "Marshall DSL40CR 40W Combo Amp",
//     image: "/images/Marshall_DSL40CR.jpg",
//     price: 749.99,
//     category: "Amplifier",
//     _id: "AMP001",
//   },
//   {
//     title: "Fender Blues Junior IV",
//     image: "/images/Fender_Blues_Junior_IV.jpg",
//     price: 649.99,
//     category: "Amplifier",
//     _id: "AMP002",
//   },
//   {
//     title: "Orange Rocker 15",
//     image: "/images/Orange_Rocker_15.jpg",
//     price: 799.99,
//     category: "Amplifier",
//     _id: "AMP003",
//   },
// ];

export const categories = ["Acoustic", "Electric", "Pedal", "Amplifier"];

class DataService {
  async getProducts() {
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/products",
      product
    );
    return response.data;
  }
}

export default new DataService();
