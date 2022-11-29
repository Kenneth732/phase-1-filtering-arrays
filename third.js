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
    const newCollection = [];
  
    for (const user of collection) {
      if (cb(user)) {
        newCollection.push(user);
      }
    }
  
    return newCollection;
  }
  
  const bluePenguinUsers = filter(users, function (user) {
    return user.favoriteColor === "Blue" && user.favoriteAnimal === "Penguin";
  });
  
  bluePenguinUsers;
  // => [{ firstName: "Josh", lastName: "Rowley", favoriteColor: "Blue", favoriteAnimal: "Penguin" }, { firstName: "Avidor", lastName: "Turkewitz", favoriteColor: "Blue", favoriteAnimal: "Penguin" }]
  
  const yellowUsers = filter(users, function (user) {
    return user.favoriteColor === "Yellow";
  });
  
  yellowUsers;
  // => [{ firstName: "Tracy", lastName: "Lum", favoriteColor: "Yellow", favoriteAnimal: "Penguin" }, { firstName: "Drew", lastName: "Price", favoriteColor: "Yellow", favoriteAnimal: "Elephant" }]
  
  users.length;
  // => 6