import excuteQuery from '../../lib/db'

const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users = require('data/users.json');

export const usersRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find,
    //: x => users.find(x),
    create,
    update,
    delete: _delete
};


async function find(email) {

    let foundUser;
    try {
        console.log('find')
        const result = await excuteQuery({
            query: `SELECT * FROM supplier WHERE email= ?`,
            values: [email],
        });
        console.log({result})
   foundUser = await result;
    } catch (error) {
        // res.send(error)
        console.log(error);
    }
   
  await  console.log({foundUser})
    return foundUser[0];
}

async function create(user) {
    // generate new user id
    // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    console.log('create')
    user.dateCreated = new Date().toISOString();
    user.dateUpdated = new Date().toISOString();
let nwUser;

    try {
        // console.log("req nom", req.body)
console.log( [user.name, user.hash, user.email, user.phone, user.firstName, user.lastName])
         nwUser = await excuteQuery({
            query: `INSERT INTO supplier(name, password, email, phone, first_name, last_name) VALUES(?, ?, ?, ?, ?, ?)`,
            values: [user.name, user.hash, user.email, user.phone, user.firstName, user.lastName],
        });

        //console.log({ results: nwUser})
      
        return nwUser
    } catch (error) {
        // res.send(error)
        console.log(error);
    }



    // set date created and updated


    // add and save user

return nwUser;
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