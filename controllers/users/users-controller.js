import people from './users.js';
let users = people

const UserController = (app) => {
    app.get('/api/users', findUsers)
    app.get('/api/users/:uid', findUserByID)
    app.post('/api/users', createUser)
    app.delete('/api/users/:uid', deleteUser)
    app.put('/api/users/:uid', updateUser)
}

const updateUser = (req, res) => {
    const userID = req.params.uid
    const updates = req.body
    users = users.map( u => u._id === userID ? {...u, ...updates} : u)
    res.sendStatus(200)
}

const deleteUser = (req, res) => {
    const userID = req.params.uid
    users = users.filter(u => u._id !== userID)
    res.sendStatus(200)
}

const createUser = (req, res) => {
    const newUser = req.body
    newUser._id = (new Date()).getTime() + ''
    users.push(newUser)
    res.json(newUser)
}

const findUserByID = (req, res) => {
    const userID = req.params.uid
    const user = users.find( u => u._id === userID)
    res.json(user)
}

const findUsers = (req, res) => {
    const type =  req.query.type
    if (type) {
        const usersOfType = users.filter( u => u.type === type)
        res.json(usersOfType)
        return
    }
    res.json(users)
}

export default UserController;