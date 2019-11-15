const db =require('../database/dbConfig')

module.exports ={
    getUserById,
    getUsersBY,
    addUser
}



function getUserById(id){
    return db('users').where({id}).first()
}

function getUsersBY (filter){
    return db('users').where(filter)
}

function addUser (user) {
    return db("users").insert(user, "id")
        .then(ids => {
            const [id] = ids;
            return getUserById(id);
        })
}
