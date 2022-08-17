const fs = require("fs");
const uniqueId = () => Math.random().toString(16).slice(2);

// users in JSON file for simplicity, store in a db for production applications
let db = require("../../data/db.json");
let { users } = db;

export const usersRepo = {
  getAll: () => users,
  getById: (id) => users.find((x) => x.id.toString() === id.toString()),
  find: (x) => users.find(x),
  create,
  update,
  delete: _delete,
};

function create(user) {
  // generate new user id
  user.id = uniqueId();
  // user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;

  user.cart = [];
  user.addresses = [];
  user.orders = [];
  user.favourites = [];

  // set date created and updated
  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString();

  // add and save user
  users.push(user);
  saveData();
}

function update(id, params) {
  const user = users.find((x) => x.id.toString() === id.toString());

  // set date updated
  user.dateUpdated = new Date().toISOString();

  // update and save
  Object.assign(user, params);
  saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
  // filter out deleted user and save
  users = users.filter((x) => x.id.toString() !== id.toString());
  saveData();
}

// private helper functions

function saveData() {
  fs.writeFileSync("data/db.json", JSON.stringify({ users, ...db }, null, 2));
}
