// api.js

const express  = require('express');
const api      = require('../controllers/apiController');
const router   = express.Router();


// Set up preflight middleware.
router.use((req, res, next) => {
  res.set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
  });

  // Check for preflight.
  if(req.method === 'OPTIONS'){
    return res.status(200).end();
  }
  next();
});

// Set up api routes.
router.get('/', api.list);                       // read list of the comments
router.post('/create', api.create);              // create comment
router.get('/:commentid', api.read);             // read comment
router.put('/update/:commentid', api.update);    // update comment
router.delete('/delete/:commentid', api.delete); // delete comment

module.exports = router;
