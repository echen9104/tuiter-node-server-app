import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body
    newTuit._id = (new Date()).getTime() + ''
    newTuit.likes = 0
    newTuit.dislikes = 0
    newTuit.replies = 0
    newTuit.retuits = 0
    newTuit.liked = false
    newTuit.username = "NASA"
    newTuit.handle = "@nasa"
    newTuit.image = "../images/nasa-logo2.png"
    newTuit.time = "Just now"
    newTuit.topic = "Space"
    tuits.push(newTuit)
    res.json(newTuit)
}

const findTuits  = (req, res) => {
    res.json(tuits)
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
        (t) => t._id.toString() === tuitdIdToUpdate)
    tuits[tuitIndex] =
        {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid
    console.log(tuitdIdToDelete)
    tuits = tuits.filter((t) => t._id.toString() !== tuitdIdToDelete)
    res.sendStatus(200)
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
