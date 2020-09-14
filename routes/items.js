const router = require('express').Router();
const Ticket = require('../models/Ticket');


router.get('/get-all', async (req, res) => {

    let items = []
    let status = 200;
    console.log('here');
    try {

        items = await Ticket.find().sort({
            createdAt: 'desc'
        }).exec();


    } catch {
        items = [];
        status = 404;
    }
    res.status(status).json(items);
});

router.post('/create-ticket', async (req, res) => {

    let {
        desc,
        devAssigned,
        priority
    } = req.body;

    try {

        let newTicket = new Ticket({
            desc: desc,
            devAssigned,
            priority
        });

        await newTicket.save();

        console.log(newTicket);

    } catch (e) {
        console.log(e);
    }

    res.status(202).json({
        msg: "success"
    });
});

router.delete('/delete-ticket/:id', async (req, res) => {

    let {
        id
    } = req.params;

    console.log(req.params);
    try {

        await Ticket.deleteOne({
            _id: id
        });

        console.log('gere');
        res.status(200).json({
            didWork: true
        });

    } catch (e) {

        res.status(500).send('failed');
        console.log(e);

    }


});

module.exports = router;