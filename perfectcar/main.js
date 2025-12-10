const cars = [
  {
    name: "BMW 3 Series",
    price: 1,
    reliability: 1,
    experience: 5,
    img: "https://hips.hearstapps.com/hmg-prod/images/2025-bmw-3-series-109-66562dcbe3d2b.jpg?crop=0.792xw:0.668xh;0.0689xw,0.192xh&resize=1200:*",
    desc: "A benchmark sports sedan with sharp handling and luxury."
  },
  {
    name: "Tesla Model 3",
    price: 2, 
    reliability: 4,
    experience: 5,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/1200px-2019_Tesla_Model_3_Performance_AWD_Front.jpg",
    desc: "Tech-focused electric sedan with fast acceleration."
  },
  {
    name: "Audi A4",
    price: 2,
    reliability: 3,
    experience: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyArTb3OtwrK_jqz-AdjurO14PYelGzDPOiA&s",
    desc: "Luxury sedan with a polished interior and smooth ride."
  },
  {
    name: "Jeep Wrangler",
    price: 2,
    reliability: 3,
    experience: 5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNQtRT1lKwY4sHeGma2yDfxKFdP93R1CkPjg&s",
    desc: "Iconic off-road SUV with high capability and personality."
  },
  {
    name: "Volkswagen Golf GTI",
    price: 3,
    reliability: 4,
    experience: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKDAlfpKbVpVIUQ86JViMDXNdqbrMQf67cQ&s",
    desc: "Hot hatch with excellent handling and comfort."
  },
  {
    name: "Mazda 3",
    price: 3,
    reliability: 4,
    experience: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ixJY_IEqzZSvs6jwnTf0yY6j2zPRkML4OA&s",
    desc: "Fun to drive with premium styling and great build quality."
  },
  {
    name: "Ford F-150",
    price: 3,
    reliability: 4,
    experience: 3,
    img: "https://images.jazelc.com/uploads/jimburkeford-m2en/24_C11054522_F150_Raptor_SprCrw_2VhclOffRdDesert.jpg",
    desc: "America's best-selling truck. Tough and versatile."
  },
  {
    name: "Toyota Tundra",
    price: 3,
    reliability: 5,
    experience: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR10mfmiSsuH-UuwC0ijxbJmD101-ZEXuCyXQ&s",
    desc: "Full-size truck with Toyota's reputation for longevity."
  },
  {
    name: "Subaru Outback",
    price: 3,
    reliability: 5,
    experience: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Rb-5AfAwcVtLJY2TKlSQY4h8yQFDS8k3FQ&s",
    desc: "AWD adventure wagon with strong reliability and utility."
  },
  {
    name: "Honda Civic",
    price: 4,
    reliability: 5,
    experience: 3,
    img: "https://media.ed.edmunds-media.com/honda/civic/2026/oem/2026_honda_civic_sedan_si_fq_oem_1_1600.jpg",
    desc: "Sporty, reliable, and well-balanced for most drivers."
  },
  {
    name: "Kia Rio",
    price: 5,
    reliability: 4,
    experience: 2,
    img: "https://hips.hearstapps.com/hmg-prod/images/19313-2023-rio-5-door-1676389973.jpg?crop=0.856xw:0.721xh;0.138xw,0.257xh&resize=1200:*",
    desc: "Affordable compact car with surprising features for the price."
  },
  {
    name: "Nissan Rogue",
    price: 4,
    reliability: 4,
    experience: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_4-NASI6UVDohGSgLf2oBpjmdqstlK40BA&s",
    desc: "Comfortable crossover aimed at family versatility."
  },
  {
    name: "Hyundai Elantra",
    price: 5,
    reliability: 4,
    experience: 2,
    img: "https://di-uploads-pod27.dealerinspire.com/classichyundai/uploads/2024/08/2024-Hyundai-Elantra.jpg",
    desc: "Sharp styling, packed with tech, and excellent value."
  },
  {
    name: "Toyota Corolla",
    price: 5,
    reliability: 5,
    experience: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFiO-DYh22R8YJMYjPNHLYdHugBdZwQB5hQ&s",
    desc: "Ultra-reliable and budget friendly. A safe pick for cost-conscious buyers."
  },
  {
    name: "Toyota RAV4",
    price: 4,
    reliability: 5,
    experience: 3,
    img: "https://www.topgear.com/sites/default/files/2024/09/Toyota-RAV4-Hybrid-036.jpg",
    desc: "Reliable, efficient crossover with great practicality."
  },
];

let selectedCell = null;
const cells = document.querySelectorAll(".cell");

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        cells.forEach(c => c.classList.remove("selected"));
        cell.classList.add("selected");
        selectedCell = index;
    });
});

const modal = document.getElementById("car-modal");
const closeModal = document.getElementById("close-modal");

const carName = document.getElementById("car-name");
const carImage = document.getElementById("car-image");
const carDesc = document.getElementById("car-description");

const tagPrice = document.getElementById("tag-price");
const tagReliability = document.getElementById("tag-reliability");
const tagExperience = document.getElementById("tag-experience");

document.querySelector("button").addEventListener("click", () => {
    if (selectedCell === null) {
        carName.textContent = "Select a box first!";
        carImage.src = "";
        carDesc.textContent = "";
    } else {
        const bestCar = cars[selectedCell % cars.length];
        carName.textContent = bestCar.name;
        carImage.src = bestCar.img;
        carDesc.textContent = bestCar.desc;
    }

    modal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
});


closeModal.onclick = () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
};

