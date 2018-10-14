const mongoose = require("mongoose");
const db = require("../models");


module.exports = function () {
  const petSitterSeed = [
    {
     name: "Lawrence A Porter",
     profilePhoto: "/images/PetSitter1.jpg",
     age: 18,
     rating: 3,
     city: "Miami",
     price: 210,
     summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
     phone: "786-248-8464",
     email: "LawrencePorter@gmail.com",
     yearsOfExperience: "5",
     typesOfAnimals: "Dogs, Cats, Leopards, Iguanas",
     availability: "Weekends Only"
    },
    {
      name: "John J Valentine",
      profilePhoto: "/images/PetSitter2.jpg",
      age: 25,
      rating: 2,
      city: "Miami",
      price: 410,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "305-866-4391",
      email: "JohnJValentine@gmail.com",
      yearsOfExperience: "7",
      typesOfAnimals: "Dogs, Iguanas",
      availability: "Weekdays Only"
     },
     {
      name: "Charles D Schmidt",
      profilePhoto: "/images/PetSitter3.jpg",
      age: 36,
      rating: 1,
      city: "Miami",
      price: 580,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "772-673-4850",
      email: "CharlesDSchmidt@gmail.com",
      yearsOfExperience: "8",
      typesOfAnimals: "Cats, Leopards, Iguanas",
      availability: "Mondays, Tuesdays"
     },
     {
      name: "Mollie J Osborn",
      profilePhoto: "/images/PetSitter4.jpg",
      age: 26,
      rating: 4,
      city: "Santa Clara",
      price: 350,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "408-566-8057",
      email: "MollieJOsborn@gmail.com",
      yearsOfExperience: "5",
      typesOfAnimals: "Dogs, Cats, Iguanas",
      availability: "Friday"
     },
     {
      name: "Annette D Hollister",
      profilePhoto: "/images/PetSitter5.jpg",
      age: 36,
      rating: 4,
      city: "Santa Clara",
      price: 210,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "917-909-1460",
      email: "AnnetteDHollister@gmail.com",
      yearsOfExperience: "5",
      typesOfAnimals: "Leopards, Iguanas",
      availability: "Weekends Only"
     },
     {
      name: "Elizabeth R Fleetwood",
      profilePhoto: "/images/PetSitter6.jpg",
      age: 46,
      rating: 5,
      city: "South Dekota",
      price: 350,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "605-636-5336",
      email: "ElizabethRFleetwood@gmail.com",
      yearsOfExperience: "5",
      typesOfAnimals: "Dogs, Cats, Leopards, Iguanas",
      availability: "Weekends Only"
     },
     {
      name: "Robin J Denny",
      profilePhoto: "/images/PetSitter7.jpg",
      age: 45,
      rating: 3,
      city: "Wallingford",
      price: 210,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "682-478-5413",
      email: "RobinJDenny@gmail.com",
      yearsOfExperience: "15",
      typesOfAnimals: "Dogs, Cats, Leopards, Iguanas, Zebras",
      availability: "Weeknights Only"
     },
     {
      name: "Patricia S Boyd",
      profilePhoto: "/images/PetSitter8.jpg",
      age: 29,
      rating: 5,
      city: "Wallingford",
      price: 210,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "860-881-7814",
      email: "PatriciaSBoyd@gmail.com",
      yearsOfExperience: "5",
      typesOfAnimals: "Dogs, Cats, Leopards, Iguanas",
      availability: "Weekends Only"
     },
     {
      name: "Martin R Price",
      profilePhoto: "/images/PetSitter9.jpg",
      age: 28,
      rating: 5,
      city: "Miami",
      price: 546,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "218-854-8860",
      email: "MartinRPrice@gmail.com",
      yearsOfExperience: "5",
      typesOfAnimals: "Dogs, Cats, Leopards, Iguanas",
      availability: "Weeknights Only"
     },
     {
      name: "Scott I Holley",
      profilePhoto: "/images/PetSitter10.jpg",
      age: 35,
      rating: 5,
      city: "Miami",
      price: 510,
      summary: "I love pets. Taking care of dogs are my passion. I would love to show the same care for yours.",
      phone: "917-389-8602",
      email: "ScottIHolley@gmail.com",
      yearsOfExperience: "5",
      typesOfAnimals: "Iguanas",
      availability: "Monday, Wednesday, Thursday"
     }
  ];
  
  db.PetSitter.deleteMany({})
    .then(() => db.PetSitter.collection.insertMany(petSitterSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
};

