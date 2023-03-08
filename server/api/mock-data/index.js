const {
  name,
  lastName,
  age,
  favoriteColor,
  country,
  hobbie,
  basicProfilePictures,
} = require("./mockData");
const fs = require("fs");


function getMockData(n) {
  let index = 0;
  let arr = [];
  let obj = {}

  while (index < n) {
    let nameIndex = Math.round(Math.random() * (name.length - 1));
    let lastNameIndex = Math.round(Math.random() * (lastName.length - 1));
    let ageIndex = Math.round(Math.random() * (age.length - 1));
    let favoriteColorIndex = Math.round(
      Math.random() * (favoriteColor.length - 1)
    );
    let countryIndex = Math.round(Math.random() * (country.length - 1));
    let hobbieIndex = Math.round(Math.random() * (hobbie.length - 1));
    basicProfilePictures;
    let basicProfilePicturesIndex = Math.round(
      Math.random() * (basicProfilePictures.length - 1)
    );

    obj = {
      id : index,
      name: name[nameIndex],
      lastName: lastName[lastNameIndex],
      age: age[ageIndex],
      favoriteColor: favoriteColor[favoriteColorIndex],
      country: country[countryIndex],
      hobbie: hobbie[hobbieIndex],
      image: basicProfilePictures[basicProfilePicturesIndex],
    };
    arr.push(obj)

    fs.writeFileSync(__dirname + "/madeUpData.json", JSON.stringify(arr));
    index++;
  }
}
function AskForHowMany() {
  let num;
  process.stdout.write(`how many fake people do you need? `);
  process.stdin.on("data", (data) => {
    
    
    if (typeof(parseInt(data)) === 'number' && !isNaN(parseInt(data))){

    num = parseInt(data);

    getMockData(num);
    process.stdout.write(
      `A JSON with ${num} fake people has been done! \n`
    );
    process.exit();
    } else {
      process.stdout.write('The input is not a number \n')
      process.exit()
    }
    
  });
}

AskForHowMany();
