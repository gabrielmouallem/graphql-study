const fs = require("fs");
const random_name = require("node-random-name");

const NUMBER_OF_OBJECTS = 100;
const data = [];

function generatePassword() {
  var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

for (let i = 1; i <= NUMBER_OF_OBJECTS; i++) {
  const firstName = random_name({ first: true, random: Math.random });
  const lastName = random_name({ last: true, random: Math.random });

  data.push({
    id: i,
    firstName,
    lastName,
    email: `${firstName}${lastName}@email.com`,
    password: generatePassword(),
  });
}

try {
  fs.writeFile("MOCK_DATA.json", JSON.stringify(data), () =>
    console.log("%cMOCK_DATA.json has been generated!", "color: green")
  );
} catch (err) {
  console.log("%cError trying to generate MOCK_DATA.json", "color: red");
  console.log(err);
}
