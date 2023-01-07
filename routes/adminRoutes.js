const express = require('express')

const router = express.Router()

router.post('/create-user', (req, res) => {
    const header = req.headers.accountId
    console.log(header);
    const user = req.body;
    console.log(user)
    res.status(200).send({
        message: "created",
        data: user
    });
});

router.post('/update-user', (req, res) => {
    const user = req.body;
    console.log(user)
    res.status(200).send({
        message: "Updated",
        data: user
    });
});

router.delete('/:email', (req, res) => {
    const email = req.params.email;
    res.status(200).send({
        message: `Deleted ${email}`
    });
});

router.patch('/:email', (req, res) => {
    const email = req.params.email;
    res.status(200).send({
        message: `Updated Password ${email}`
    });
});

module.exports = router