const router = require('express').Router();
const fs = require('fs');

const db = require('../db/puppies.json');

router.get('/', (req, res) =>{
  res.status(200).json({status: 'success', data: db })
  
})

router.post('/', (req, res) =>{
  console.log(req.body);
  const newPuppy = {...req.body, id: "1723563"}
  db.push(newPuppy);
  fs.writeFile('db/puppies.json', JSON.stringify(db), (err) => {
    console.log(err.message)
  });
  res.status(200).json({status: 'success', newData: db });
  
})


module.exports = router;