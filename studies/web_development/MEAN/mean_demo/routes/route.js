const express = require("express");
const router = express.Router();

const Contact = require('../models/contact')

router.get("/contacts", (req, res, next) => {
    console.log('Calling for contacts')
    Contact.find(function(err, contacts){
        res.json(contacts)
    })
});


// Add contact
router.post('/contacts', (req, res)=>{
    console.log('req ' + JSON.stringify(req.body));

    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err){
            console.log('Adding contact:failed' + err);
            res.json({msg: "Feild to add contact"})
        }
        else{
            console.log('Adding contact: succeeded');
            res.json({msg: "contact added successfully"})
        }
    })
});

// Delete contact
router.delete('/contacts/:id', (req, res, nex)=>{
    console.log('Trying to delete: ' + req.params.id)
    Contact.remove({_id: req.params.id}, function (err, result) {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
});


module.exports = router;