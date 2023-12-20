import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Naman Pal",
    email: "naman@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },

  {
    name: "Parshant",
    email: "bhardwaj@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
