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

  //Array with just the names of all the developers:
  function getDeveloperNames() {
    return developers.map(dev => dev.name);
}
console.log("Names of all developers:", getDeveloperNames());

//Total number of phones all the developers have:
function getTotalPhones() {
  return developers.reduce((total, dev) => total + dev.phones.length, 0);
}
console.log("Total number of phones:", getTotalPhones());

//Number of incomplete setups (0 mice, keyboards, speakers, or monitors):
function getIncompleteSetupsCount() {
  return developers.reduce((count, dev) => {
      return count + dev.computerSetups.filter(setup => 
          setup.mice === 0 || setup.keyboards === 0 || setup.speakers === 0 || setup.monitors === 0
      ).length;
  }, 0);
}
console.log("Number of incomplete setups:", getIncompleteSetupsCount());

//Most trusted phone brand:
function getMostTrustedPhoneBrand() {
  let phoneBrands = {};
  developers.forEach(dev => {
      dev.phones.forEach(brand => {
          phoneBrands[brand] = (phoneBrands[brand] || 0) + 1;
      });
  });
  let mostTrustedBrand = Object.keys(phoneBrands).reduce((a, b) => phoneBrands[a] > phoneBrands[b] ? a : b);
  return mostTrustedBrand;
}
console.log("Most trusted phone brand:", getMostTrustedPhoneBrand());

//Least trusted phone brand
function getLeastTrustedPhoneBrand() {
  let phoneBrands = {};
  developers.forEach(dev => {
      dev.phones.forEach(brand => {
          phoneBrands[brand] = (phoneBrands[brand] || 0) + 1;
      });
  });
  let leastTrustedBrand = Object.keys(phoneBrands).reduce((a, b) => phoneBrands[a] < phoneBrands[b] ? a : b);
  return leastTrustedBrand;
}
console.log("Least trusted phone brand:", getLeastTrustedPhoneBrand());

//Number of people who do not have a phone
function getPeopleWithoutPhoneCount() {
  return developers.filter(dev => dev.phones.length === 0).length;
}
console.log("Number of people without a phone:", getPeopleWithoutPhoneCount());

//Number of people who do not have a laptop
function getPeopleWithoutLaptopCount() {
  return developers.filter(dev => dev.laptops.length === 0).length;
}
console.log("Number of people without a laptop:", getPeopleWithoutLaptopCount());

//Number of people who do not have a computer setup (desktop)
function getPeopleWithoutComputerSetupCount() {
  return developers.filter(dev => dev.computerSetups.length === 0).length;
}
console.log("Number of people without a computer setup:", getPeopleWithoutComputerSetupCount());

//Developer with the most total gadgets
function getDeveloperWithMostGadgets() {
  let maxGadgets = 0;
  let developer = null;

  developers.forEach(dev => {
      let totalGadgets = dev.laptops.length + dev.phones.length + dev.computerSetups.length;
      if (totalGadgets > maxGadgets) {
          maxGadgets = totalGadgets;
          developer = dev;
      }
  });

  return { name: developer.name, gadgets: [...developer.laptops, ...developer.phones, ...developer.computerSetups] };
}
console.log("Developer with the most total gadgets:", getDeveloperWithMostGadgets());

//Developer with the most phones
function getDeveloperWithMostPhones() {
  let maxPhones = 0;
  let developer = null;

  developers.forEach(dev => {
      if (dev.phones.length > maxPhones) {
          maxPhones = dev.phones.length;
          developer = dev;
      }
  });

  return { name: developer.name, phones: developer.phones };
}
console.log("Developer with the most phones:", getDeveloperWithMostPhones());

//Developer with the most computer setups

function getDeveloperWithMostComputerSetups() {
  let maxSetups = 0;
  let developer = null;

  developers.forEach(dev => {
      if (dev.computerSetups.length > maxSetups) {
          maxSetups = dev.computerSetups.length;
          developer = dev;
      }
  });

  return { name: developer.name, computerSetups: developer.computerSetups };
}
console.log("Developer with the most computer setups:", getDeveloperWithMostComputerSetups());

//Developer with the most monitors (combining all their computer setups)
function getDeveloperWithMostMonitors() {
  let maxMonitors = 0;
  let developer = null;

  developers.forEach(dev => {
      let totalMonitors = dev.computerSetups.reduce((acc, setup) => acc + setup.monitors, 0);
      if (totalMonitors > maxMonitors) {
          maxMonitors = totalMonitors;
          developer = dev;
      }
  });

  return { name: developer.name, monitorCount: maxMonitors };
}
console.log("Developer with the most monitors:", getDeveloperWithMostMonitors());















 