
import {excuteQuery} from '/lib/db'

const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users = require('data/users.json');

export const usersRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find: x => users.find(x),
    //usersRepo.find(x => x.username === user.username)
    create,
    update,
    delete: _delete
};
async function getSuppliers(){
    try {
        // console.log("req nom", req.body)
      const result = await excuteQuery({
          query:'SELECT * FROM supplier',
        //   values: [req.body.content],
      });
           res.send(result)
  } catch ( error ) {
      res.send(error)
      console.log( error );
  }
  
}
async function create(user) {
    // generate new user id
    // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;


   

 

    // set date created and updated
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();

    // add and save user
    users.push(user);
    saveData();
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}