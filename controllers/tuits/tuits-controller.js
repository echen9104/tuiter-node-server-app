import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
    try {
        const newTuit = req.body
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
        const insertedTuit = await tuitsDao.createTuit(newTuit);
        res.json(insertedTuit)
    } catch (err) {
        res.sendStatus(503)
    }
}

const findTuits  = async (req, res) => {
    try {
        const tuits = await tuitsDao.findTuits()
        res.json(tuits)
    } catch (err) {
        res.sendStatus(503)
    }
}

const updateTuit = async (req, res) => {
    try {
        const tuitdIdToUpdate = req.params.tid;
        const updates = req.body;
        const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
        res.json(status);
    } catch (err) {
        res.sendStatus(503)
    }
}

const deleteTuit = async (req, res) => {
    try {
        const tuitdIdToDelete = req.params.tid
        const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
        res.json(status)
    } catch (err) {
        res.sendStatus(503)
    }
}


export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
