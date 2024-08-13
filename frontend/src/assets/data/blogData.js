// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/1.jpg";
import img10 from "../all-images/blog-img/10.jpeg";
import img03 from "../all-images/blog-img/111.jpg";
import img05 from "../all-images/blog-img/222.jpg";
import img02 from "../all-images/blog-img/333.jpg";
import img07 from "../all-images/blog-img/7.jpeg";
import img08 from "../all-images/blog-img/8.jpeg";
import img09 from "../all-images/blog-img/9.jpeg";
import img04 from "../all-images/blog-img/a4.jpg";
import img06 from "../all-images/blog-img/b6.jpeg";

const blogData = [
  // Repair Guides
  {
    id: 1,
    category: "Repair Guides",
    title: "Step-by-Step Guide to Engine Repairs",
    author: "AutoGarage Team",
    date: "12 Dec, 2023",
    time: "9am",
    imgUrl: img01,
    description:
      "This guide provides detailed steps to diagnose and repair common engine problems, ensuring your vehicle's engine runs smoothly.",
    details: 
      "1. Regular Oil Changes: Change your oil every 3,000 to 5,000 miles to keep your engine lubricated and clean.\n" +
      "2. Checking Coolant Levels: Regularly check and top up your coolant to prevent overheating.\n" +
      "3. Clean Filters: Replace air, oil, and fuel filters as recommended to keep contaminants out.\n" +
      "4. Regular Check-Ups: Schedule regular check-ups to catch issues early.\n" +
      "5. Listen to Your Car: Pay attention to unusual noises or performance changes.\n" +
      "6. Use Quality Fuel: High-quality fuel can improve performance and longevity.\n" +
      "7. Avoid Short Trips: Combine errands to ensure the engine reaches optimal temperature.",
    quote: 
      "A well-maintained engine is the heart of a reliable vehicle. Regular check-ups can save you time and money in the long run.",
  },
  {
    id: 2,
    category: "Repair Guides",
    title: "Brake Repair Guide: Diagnosing and Fixing Issues",
    author: "AutoGarage Experts",
    date: "18 Jan, 2024",
    time: "10am",
    imgUrl: img02,
    description:
      "Learn how to diagnose and fix common brake problems with this step-by-step guide, including brake pad replacement and fluid checks.",
    details: 
      "1. Brake Pad Replacement: Learn how to safely replace worn brake pads.\n" +
      "2. Brake Fluid Check: How to check and top up brake fluid levels.\n" +
      "3. Brake Rotor Inspection: Steps to inspect and replace brake rotors.\n" +
      "4. Brake Line Inspection: Check for leaks or damage in brake lines.\n" +
      "5. Test Drive: Ensure brakes are working properly after repairs.",
    quote: 
      "Proper brake maintenance is crucial for vehicle safety. Regular inspections and timely repairs can prevent accidents.",
  },
  {
    id: 3,
    category: "Repair Guides",
    title: "Electrical System Troubleshooting Guide",
    author: "AutoGarage Mechanics",
    date: "25 Feb, 2024",
    time: "2pm",
    imgUrl: img03,
    description:
      "This guide covers common electrical problems in vehicles and provides step-by-step instructions for diagnosing and repairing these issues.",
    details:
      "1. Battery Check: How to test and replace a faulty battery.\n" +
      "2. Alternator Testing: Steps to check if your alternator is functioning correctly.\n" +
      "3. Fuse Replacement: Identify and replace blown fuses.\n" +
      "4. Wiring Inspection: Check for damaged or frayed wiring.\n" +
      "5. Electrical Component Testing: Diagnose issues with lights, indicators, and other electrical components.",
    quote: 
      "A well-functioning electrical system is essential for the overall performance of your vehicle. Regular checks can prevent major issues.",
  },
  {
    id: 4,
    category: "Repair Guides",
    title: "Suspension System Maintenance Guide",
    author: "AutoGarage Team",
    date: "10 Mar, 2024",
    time: "11am",
    imgUrl: img04,
    description:
      "This guide provides steps to maintain and repair your vehicle's suspension system, ensuring a smooth and safe ride.",
    details:
      "1. Shock Absorber Check: Inspect and replace worn shock absorbers.\n" +
      "2. Strut Inspection: Check for damaged or leaking struts.\n" +
      "3. Spring Inspection: Examine suspension springs for wear or damage.\n" +
      "4. Wheel Alignment: Ensure your wheels are properly aligned.\n" +
      "5. Bushing Check: Inspect and replace worn suspension bushings.",
    quote: 
      "Maintaining your suspension system is key to a comfortable and safe driving experience. Regular checks can prevent major issues.",
  },
  {
    id: 5,
    category: "Repair Guides",
    title: "Cooling System Maintenance and Repair Guide",
    author: "AutoGarage Mechanics",
    date: "5 Apr, 2024",
    time: "3pm",
    imgUrl: img05,
    description:
      "Learn how to maintain and repair your vehicle's cooling system with this comprehensive guide.",
    details:
      "1. Coolant Flush: How to flush and replace your vehicle's coolant.\n" +
      "2. Radiator Inspection: Check for leaks or damage in the radiator.\n" +
      "3. Thermostat Testing: Ensure the thermostat is functioning correctly.\n" +
      "4. Hose Inspection: Inspect and replace damaged or leaking hoses.\n" +
      "5. Water Pump Check: How to test and replace a faulty water pump.",
    quote:
      "A properly functioning cooling system is essential to prevent engine overheating. Regular maintenance can keep your vehicle running smoothly.",
  },
  {
    id: 6,
    category: "Repair Guides",
    title: "Transmission Maintenance and Repair Tips",
    author: "AutoGarage Experts",
    date: "20 Apr, 2024",
    time: "11am",
    imgUrl: img06,
    description:
      "This guide provides tips for maintaining and repairing your vehicle's transmission, ensuring smooth gear shifts and extended lifespan.",
    details:
      "1. Transmission Fluid Check: Regularly check and top up transmission fluid levels.\n" +
      "2. Fluid Change: Change the transmission fluid as recommended by the manufacturer.\n" +
      "3. Leak Inspection: Check for and repair any transmission fluid leaks.\n" +
      "4. Regular Servicing: Schedule regular servicing to detect issues early.\n" +
      "5. Proper Driving Habits: Avoid harsh acceleration and braking to prolong transmission life.",
    quote: 
      "Regular transmission maintenance is crucial for smooth driving and can prevent costly repairs in the future.",
  },
  {
    id: 7,
    category: "Repair Guides",
    title: "Tire Maintenance and Safety Tips",
    author: "AutoGarage Team",
    date: "10 May, 2024",
    time: "2pm",
    imgUrl: img07,
    description:
      "Learn how to maintain and ensure the safety of your vehicle's tires with these essential tips.",
    details:
      "1. Regular Tire Inspection: Check for wear, damage, and proper inflation.\n" +
      "2. Tire Rotation: Rotate your tires every 5,000 to 7,000 miles to ensure even wear.\n" +
      "3. Wheel Alignment: Ensure your wheels are properly aligned to prevent uneven wear.\n" +
      "4. Balancing Tires: Regularly balance your tires for a smooth ride.\n" +
      "5. Seasonal Tire Changes: Use appropriate tires for different seasons (e.g., winter tires for snow).",
    quote: 
      "Proper tire maintenance is key to vehicle safety and performance. Regular checks can extend the lifespan of your tires.",
  },
  {
    id: 8,
    category: "Repair Guides",
    title: "Exhaust System Maintenance Guide",
    author: "AutoGarage Mechanics",
    date: "15 Jun, 2024",
    time: "3pm",
    imgUrl: img08,
    description:
      "This guide covers the basics of maintaining and repairing your vehicle's exhaust system.",
    details:
      "1. Inspecting for Leaks: Check for any leaks or holes in the exhaust system.\n" +
      "2. Muffler Maintenance: Ensure the muffler is in good condition to reduce noise.\n" +
      "3. Catalytic Converter Check: Inspect the catalytic converter for blockages or damage.\n" +
      "4. Regular Cleaning: Clean the exhaust system to prevent rust and corrosion.\n" +
      "5. Professional Servicing: Have your exhaust system professionally serviced regularly.",
    quote:
      "A well-maintained exhaust system ensures your vehicle runs efficiently and meets emission standards.",
  },
  {
    id: 9,
    category: "Repair Guides",
    title: "Battery Maintenance and Replacement Guide",
    author: "AutoGarage Team",
    date: "25 Jul, 2024",
    time: "11am",
    imgUrl: img09,
    description:
      "Learn how to maintain and replace your vehicle's battery with this comprehensive guide.",
    details:
      "1. Regular Battery Testing: Test your battery regularly to ensure it's holding a charge.\n" +
      "2. Cleaning Terminals: Keep battery terminals clean to ensure a good connection.\n" +
      "3. Checking Fluid Levels: Ensure the battery fluid is at the correct level (for non-sealed batteries).\n" +
      "4. Secure Mounting: Ensure the battery is securely mounted to prevent movement.\n" +
      "5. Replacing the Battery: Steps to safely replace a dead or faulty battery.",
    quote:
      "Regular battery maintenance can prevent unexpected breakdowns and ensure your vehicle starts reliably.",
  },
  {
    id: 10,
    category: "Repair Guides",
    title: "Interior and Exterior Detailing Tips",
    author: "AutoGarage Experts",
    date: "30 Aug, 2024",
    time: "1pm",
    imgUrl: img10,
    description:
      "This guide provides tips for detailing both the interior and exterior of your vehicle to keep it looking like new.",
    details:
      "1. Cleaning and Conditioning Leather: Proper care for leather seats and trim.\n" +
      "2. Vacuuming and Shampooing: Keeping the interior carpets and upholstery clean.\n" +
      "3. Washing and Waxing: Steps to wash and wax your car for a shiny finish.\n" +
      "4. Detailing the Engine Bay: How to clean and detail the engine bay safely.\n" +
      "5. Protecting Exterior Surfaces: Tips for protecting paint, glass, and trim.",
    quote:
      "Regular detailing not only makes your car look great but also protects it from wear and tear.",
  }
  
];

export default blogData;
