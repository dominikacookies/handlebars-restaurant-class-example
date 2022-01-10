const renderHomePage = (req, res) => {
  const loggedIn = true;

  const dishes = [
    {
      name: "Neapolitan Pizza",
      price: 5.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      imageUrl:
        "https://images.unsplash.com/photo-1627626775846-122b778965ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Grand vegan burger",
      price: 8.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      imageUrl:
        "https://images.unsplash.com/photo-1585991519035-72443f3920ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Pad Thai",
      price: 7.99,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      imageUrl:
        "https://images.unsplash.com/photo-1626804475315-9644b37a2fe4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  res.render("homepage", { dishes, loggedIn });
};

module.exports = { renderHomePage };
