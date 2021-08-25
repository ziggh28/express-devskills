export { 
 find,
  findById,
  create,
  findByIdAndDelete,
}

const devskills = [
  {text: 'killall node', mastered: true, _id: 15235},
  {text: 'nodemon', mastered: true, _id: 22535},
  {text: 'mongodb', mastered: false, _id: 32452},
 
]

function create(devskill, callback) {
  devskill._id = Date.now() % 1000000
  devskill.mastered = false
  devskills.push(devskill)
  return callback(null, devskills)
}

const findById = (id, callback) =>{
  try {
    const devskill = devskills.find(devskill => devskill._id === parseInt(id))
    if (!devskill) throw new Error ('No devskill was found')
    return callback(null, devskill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, devskills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

function findByIdAndDelete(id, callback) {
  try { 
    const idx = devskills.findIndex(devskill => devskill._id == parseInt(id))
    const deletedDevskill = devskills.splice(idx, 1)
    if (!deletedDevskill.length) throw new Error ('No dev skill was deleted')
    return callback(null, deletedDevskill[0])
  } catch(error) {
    return callback(error, null)
  }
}
