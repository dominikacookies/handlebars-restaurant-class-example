const capitaliseTitle = (dishName) => {
  return `<h1> ${dishName.toUpperCase()} </h1>`;
};

const titleLowerCase = (dishName) => {
  return dishName.toLowerCase();
};

module.exports = { capitaliseTitle, titleLowerCase };
