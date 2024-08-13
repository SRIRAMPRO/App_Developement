// import all images from assets/images directory
import img01 from "../all-images/cars-img/oil.jpg";
import img02 from "../all-images/cars-img/break.jpg";
import img03 from "../all-images/cars-img/engine.jpg";
import img04 from "../all-images/cars-img/tyre.jpg";
import img05 from "../all-images/cars-img/battery (2).jpg";
import img06 from "../all-images/cars-img/Transmission.jpg";
import img07 from "../all-images/cars-img/suspension.jpg";
import img08 from "../all-images/cars-img/ac.jpg";
import img09 from "../all-images/cars-img/exhaust.jpg";
import img10 from "../all-images/cars-img/vi.jpg";
import img11 from "../all-images/cars-img/wheel.jpg";

const carData = [
  {
    id: 1,
    brand: "Oil Change",
    rating: 112,
    carName: "Oil Change Service",
    imgUrl: img01,
    model: "Full Synthetic",
    price: 50,
    speed: "30 minutes",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Keep your engine running smoothly with our regular oil change services. We use high-quality oil and filters for optimal performance.",
  },

  {
    id: 2,
    brand: "Brake Repair",
    rating: 102,
    carName: "Brake Repair Service",
    imgUrl: img02,
    model: "Disc and Drum",
    price: 150,
    speed: "2 hours",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Ensure your safety with our professional brake repair services. We handle everything from brake pad replacements to complete brake system overhauls.",
  },

  {
    id: 3,
    brand: "Engine Repair",
    rating: 132,
    carName: "Engine Repair Service",
    imgUrl: img03,
    model: "All Types",
    price: 1200,
    speed: "Varies",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Expert engine repair services for all types of vehicles. Whether it’s a minor fix or a major overhaul, we ensure your engine performs optimally.",
  },

  {
    id: 4,
    brand: "Tire Rotation",
    rating: 102,
    carName: "Tire Rotation Service",
    imgUrl: img04,
    model: "All Types",
    price: 40,
    speed: "30 minutes",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Extend the life of your tires and improve your vehicle's handling with our tire rotation and alignment services.",
  },

  {
    id: 5,
    brand: "Battery Replacement",
    rating: 94,
    carName: "Battery Replacement Service",
    imgUrl: img05,
    model: "All Types",
    price: 100,
    speed: "1 hour",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Quick and efficient battery testing and replacement. Ensure your vehicle starts every time with our reliable battery services.",
  },

  {
    id: 6,
    brand: "Transmission Repair",
    rating: 119,
    carName: "Transmission Repair Service",
    imgUrl: img06,
    model: "Automatic and Manual",
    price: 2000,
    speed: "Varies",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Comprehensive transmission repair services to keep your vehicle running smoothly. We handle everything from fluid changes to major repairs.",
  },

  {
    id: 7,
    brand: "Suspension Repair",
    rating: 82,
    carName: "Suspension Repair Service",
    imgUrl: img07,
    model: "All Types",
    price: 600,
    speed: "4 hours",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Expert suspension repair services to improve your vehicle’s handling and comfort. We fix issues and enhance your driving experience.",
  },

  {
    id: 8,
    brand: "Air Conditioning Repair",
    rating: 52,
    carName: "A/C Repair Service",
    imgUrl: img08,
    model: "All Types",
    price: 150,
    speed: "2 hours",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Stay cool with our comprehensive A/C repair and maintenance services. We ensure your vehicle's air conditioning system works flawlessly.",
  },
  {
    id: 9,
    brand: "Exhaust System Repair",
    rating: 52,
    carName: "Exhaust Repair Service",
    imgUrl: img09,
    model: "All Types",
    price: 300,
    speed: "3 hours",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Keep your vehicle running quietly and efficiently with our exhaust system repair services. We fix leaks, replace parts, and ensure optimal performance.",
  },
  {
    id: 10,
    brand: "Vehicle Inspection",
    rating: 52,
    carName: "Vehicle Inspection Service",
    imgUrl: img10,
    model: "All Types",
    price: 80,
    speed: "1 hour",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Thorough vehicle inspections to catch potential issues early. Our comprehensive check-ups guarantee your vehicle’s safety and reliability.",
  },
  {
    id: 11,
    brand: "Wheel Alignment",
    rating: 52,
    carName: "Wheel Alignment Service",
    imgUrl: img11,
    model: "All Types",
    price: 100,
    speed: "1 hour",
    gps: "N/A",
    seatType: "N/A",
    automatic: "N/A",
    description:
      "Ensure your vehicle's wheels are perfectly aligned with our professional alignment services, improving handling and tire life.",
  },
];

export default carData;
