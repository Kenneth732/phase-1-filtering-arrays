const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
    },
  ];

  function filter(collection, cb) {
    for (const user of collection) {
      if (cb(user)) {
        console.log(user.firstName);
      }
    }
  }
  
  filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });
  // LOG: Josh
  // LOG: Avidor
  
  filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });
  // LOG: Tracy
  // LOG: Drew