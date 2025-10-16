export const userData = {
  firstName: "John",
  lastName: "Doe",
  password: "Password123!",
  email: "houkoibagrexou-4547@yopmail.com"
};

export function uniquePassword() {
  return `johnDoe@!${Math.random()}`;
}

export function uniqueEmail() {
  return `john.${Date.now()}@example.com`;
}

export const productName = {
  macBook: "Apple Macbook Pro",
  HP_1: "HP Spectre XT Pro UltraBook",
  HP_2: "HP Envy 15.6-Inch Sleekbook",
};

export const categoryName = {
  COM: "Computers",
  ELEC: "Electronics",
  APL: "Apparel",
};

export const subCategoryName = {
  DT: "Desktops",
  NB: "Notebooks",
  SW: "Software",
};

export const filterOptions = {
  PST: "0",
  A2Z: "5",
  Z2A: "6",
  L2H: "10",
  H2L: "11",
  CRTO: "15",  
}

export const manufacturer = {
  Apple: 'Apple',
  HP: 'HP'
}

export const gender = {
  gents: 'male',
  lady: 'female',
}

export const alert = {
  emailAlert: 'Email not found',
}

