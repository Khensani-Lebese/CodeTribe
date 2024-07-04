const developers = [
  {
    name: "Vee",
    laptops: [
      "Dell"
    ],
    phones: [
      "Samsung",
      "Xiaomi"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Katlego",
    laptops: [
      "HP",
      "Samsung"
    ],
    phones: [
      "Apple",
      "Samsung",
      "Tecno",
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Lenovo",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  },
  {
    name: "Rethabile",
    laptops: [
      "Samsung"
    ],
    phones: [
      "Samsung",
      "Huawei",
      "Poco"
    ],
    computerSetups: [
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Acer",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Gift",
    laptops: [],
    phones: [
      "Samsung"
    ],
    computerSetups: [
      {
        brand: "Acer",
        monitors: 3,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "HP",
        monitors: 2,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }
    ]
  },
  {
    name: "Thokozile",
    laptops: [
      "Lenovo"
    ],
    phones: [
      "Apple"
    ],
    computerSetups: [
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 2
      }, 
      {
        brand: "Asus",
        monitors: 1,
        keyboards: 0,
        mice: 1,
        speakers: 1
      }, 
      {
        brand: "Dell",
        monitors: 1,
        keyboards: 1,
        mice: 1,
        speakers: 1
      }
    ]
  }
]

//Create an array with just the names of all the developers

const developerNames = developers.map(developer => developer.name);

console.log(developerNames);
//=======================================================================================================================================

// Count how many total phones all the developers have
const totalPhones = developers.reduce((total, developer) => {
  return total + developer.phones.length;
}, 0);

console.log("Total phones across all developers:", totalPhones);
//========================================================================================================================================
//Count the number of incomplete setups i.e. setups that have 0 mice, keyboards, speakers, or monitors.

const incompleteSetupsCount = developers.reduce((totalIncompleteSetups, developer) => {
  // Filter setups within each developer that have any component missing
  const developerIncompleteSetups = developer.computerSetups.filter(setup => {
    return setup.monitors === 0 || setup.keyboards === 0 || setup.mice === 0 || setup.speakers === 0;
  });

  // Add the count of incomplete setups for the current developer to the total count
  return totalIncompleteSetups + developerIncompleteSetups.length;
}, 0);

console.log("Number of incomplete setups:", incompleteSetupsCount);
//===============================================================================================================================
//Check what is the most trusted phone brand

// Initialize an object to store counts of each phone brand
const phoneBrandsCount = {};

// Iterate through each developer
developers.forEach(developer => {
  // Iterate through each phone owned by the developer
  developer.phones.forEach(phone => {
    // Increment the count for the phone brand in the phoneBrandsCount object
    if (phoneBrandsCount[phone]) {
      phoneBrandsCount[phone]++;
    } else {
      phoneBrandsCount[phone] = 1;
    }
  });
});

// Determine the most trusted phone brand (brand with the highest count)
let mostTrustedPhoneBrand = "";
let maxCount = 0;

// Iterate through the phoneBrandsCount object to find the brand with the highest count
Object.keys(phoneBrandsCount).forEach(brand => {
  if (phoneBrandsCount[brand] > maxCount) {
    maxCount = phoneBrandsCount[brand];
    mostTrustedPhoneBrand = brand;
  }
});

console.log("Most trusted phone brand:", mostTrustedPhoneBrand, "with", maxCount, "owners");
//==========================================================================================================================
//Check what phone brand is least trusted

// Initialize an object to store counts of each phone brand
const phoneBrandCount = {};

// Iterate through each developer
developers.forEach(developer => {
  // Iterate through each phone owned by the developer
  developer.phones.forEach(phone => {
    // Increment the count for the phone brand in the phoneBrandsCount object
    if (phoneBrandCount[phone]) {
      phoneBrandCount[phone]++;
    } else {
      phoneBrandCount[phone] = 1;
    }
  });
});

// Determine the least trusted phone brand (brand with the lowest count)
let leastTrustedPhoneBrand = "";
let minCount = Infinity;

// Iterate through the phoneBrandsCount object to find the brand with the lowest count
Object.keys(phoneBrandCount).forEach(brand => {
  if (phoneBrandCount[brand] < minCount) {
    minCount = phoneBrandCount[brand];
    leastTrustedPhoneBrand = brand;
  }
});

console.log("Least trusted phone brand:", leastTrustedPhoneBrand, "with", minCount, "owners");
//=====================================================================================================================================
//Check how many people do not have a phone

// Filter developers who do not have any phones
const developersWithoutPhones = developers.filter(developer => developer.phones.length === 0);

// Count the number of developers without phones
const numberOfDevelopersWithoutPhones = developersWithoutPhones.length;

console.log("Number of people without a phone:", numberOfDevelopersWithoutPhones);
//=======================================================================================================================================
//Check how many people do not have a laptop

// Filter developers who do not have any laptops
const developersWithoutLaptops = developers.filter(developer => developer.laptops.length === 0);

// Count the number of developers without laptops
const numberOfDevelopersWithoutLaptops = developersWithoutLaptops.length;

console.log("Number of people without a laptop:", numberOfDevelopersWithoutLaptops);

//========================================================================================================================================
//Check how many people do not have a computer setup (desktop)


// Filter developers who do not have any computer setups
const developersWithoutComputerSetups = developers.filter(developer => developer.computerSetups.length === 0);

// Count the number of developers without computer setups
const numberOfDevelopersWithoutComputerSetups = developersWithoutComputerSetups.length;

console.log("Number of people without a computer setup (desktop):", numberOfDevelopersWithoutComputerSetups);

//=======================================================================================================================================
//Check which developer has the most total gadgets. In your answer provide the name as well as all the gadgets they have.

// Initialize variables to track the developer with the most gadgets and their count
let developerWithMostGadgets = null;
let maxGadgetsCount = 0;

// Iterate through each developer
developers.forEach(developer => {
  // Calculate the total number of gadgets (laptops + phones + total monitors in computer setups)
  const laptopsCount = developer.laptops.length;
  const phonesCount = developer.phones.length;
  const computerSetupsCount = developer.computerSetups.reduce((totalMonitors, setup) => totalMonitors + setup.monitors, 0);
  
  const totalGadgets = laptopsCount + phonesCount + computerSetupsCount;

  // Update the developer with the most gadgets if current developer has more gadgets
  if (totalGadgets > maxGadgetsCount) {
    maxGadgetsCount = totalGadgets;
    developerWithMostGadgets = {
      name: developer.name,
      gadgets: {
        laptops: developer.laptops,
        phones: developer.phones,
        computerSetups: developer.computerSetups
      }
    };
  }
});

// Output the developer with the most gadgets and their gadgets
console.log("Developer with the most gadgets:", developerWithMostGadgets.name);
console.log("Gadgets they have:");
console.log("- Laptops:", developerWithMostGadgets.gadgets.laptops);
console.log("- Phones:", developerWithMostGadgets.gadgets.phones);
console.log("- Computer Setups:", developerWithMostGadgets.gadgets.computerSetups);
//================================================================================================================================
//Check which developer has the most phones. In your answer provide the name and the phones they have

// Initialize variables to track the developer with the most phones and their count
let developerWithMostPhones = null;
let maxPhonesCount = 0;

// Iterate through each developer
developers.forEach(developer => {
  // Count the number of phones for the current developer
  const phonesCount = developer.phones.length;

  // Update the developer with the most phones if current developer has more phones
  if (phonesCount > maxPhonesCount) {
    maxPhonesCount = phonesCount;
    developerWithMostPhones = {
      name: developer.name,
      phones: developer.phones
    };
  }
});

// Output the developer with the most phones and their phones
console.log("Developer with the most phones:", developerWithMostPhones.name);
console.log("Phones they have:", developerWithMostPhones.phones);
//======================================================================================================================================
//Check which developer has the most computer setups. In your answer provide the name as well as their computer setups.

// Initialize variables to track the developer with the most computer setups and their count
let developerWithMostSetups = null;
let maxSetupsCount = 0;

// Iterate through each developer
developers.forEach(developer => {
  // Count the number of computer setups for the current developer
  const setupsCount = developer.computerSetups.length;

  // Update the developer with the most setups if current developer has more setups
  if (setupsCount > maxSetupsCount) {
    maxSetupsCount = setupsCount;
    developerWithMostSetups = {
      name: developer.name,
      computerSetups: developer.computerSetups
    };
  }
});

// Output the developer with the most setups and their setups
console.log("Developer with the most computer setups:", developerWithMostSetups.name);
console.log("Computer setups they have:");
developerWithMostSetups.computerSetups.forEach((setup, index) => {
  console.log(`Setup ${index + 1}:`);
  console.log("- Brand:", setup.brand);
  console.log("- Monitors:", setup.monitors);
  console.log("- Keyboards:", setup.keyboards);
  console.log("- Mice:", setup.mice);
  console.log("- Speakers:", setup.speakers);
});

//Check which developer has the most monitors (combining all their computer setups). In your answer provide their name and the monitor count.

// Initialize variables to track the developer with the most monitors and their count
let developerWithMostMonitors = null;
let maxMonitorCount = 0;

// Iterate through each developer
developers.forEach(developer => {
  // Calculate total monitors for the current developer
  const totalMonitors = developer.computerSetups.reduce((sum, setup) => sum + setup.monitors, 0);

  // Update the developer with the most monitors if current developer has more monitors
  if (totalMonitors > maxMonitorCount) {
    maxMonitorCount = totalMonitors;
    developerWithMostMonitors = {
      name: developer.name,
      monitorCount: totalMonitors
    };
  }
});

// Output the developer with the most monitors and their monitor count
console.log("Developer with the most monitors:", developerWithMostMonitors.name);
console.log("Monitor count:", developerWithMostMonitors.monitorCount);

//functions to calculate






