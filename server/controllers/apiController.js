// apiController.js

const log            = require('log-util');
var commentService   = require('../services/commentService');
var ApiController = {};


//
// List all comments.
//
ApiController.list = (req, res) => {
    log.info("API: listing comments");
    commentService.list({})
    .then((comments) => {
        res.status(200);
        if (comments) {
            res.json(comments);
        } else {
            res.end('No comments found.');
        }
    })
    .catch((err) => {
        log.error(`Listing error: ${err}`);
        res.status(500);
        res.end('Listing error.');
    });
};

//
// Create a single comment and try to save it to the DB.
//
ApiController.create = (req, res) => {
    log.info("API: creating comment");
    commentService.create({
        username: req.body.username,
        usercomment: req.body.usercomment
    })
    .then((comment) => {
        log.info(`API: saving comment - ${comment}`);
        res.status(201);
        res.json(comment);
    })
    .catch((err) => {
        log.error(`Creating comment error: ${err}`);
        res.status(500);
        res.end('Creating comment error.');
    });
};


//
// Read a single comment.
//
ApiController.read = (req, res) => {
    log.info(`API: reading comment - ${req.params.commentid}`);
    commentService.read({_id: req.params.commentid})
    .then((comment) => {
        log.info(`API: found - ${comment}`);
        res.status(200);
        res.json(comment);
    })
    .catch((err) => {
        log.error(`Reading Comment error: ${err}`);
        res.status(500);
        res.end('Reading Comment error.');
    });
};


//
// Update a single comment and save it to the DB.
//
ApiController.update = (req, res) => {
    log.info(`API: updating comment - ${req.params.commentid}`);
    commentService.update(
        req.params.commentid,
        {
          username: req.body.username,
          usercomment: req.body.usercomment
        },
        {new: true}
    )
    .then((comment) => {
        log.info(`API: updated - ${comment}`);
        res.status(200);
        res.json(comment);
    })
    .catch((err) => {
        log.error(`Updating Comment error: ${err}`);
        res.status(500);
        res.end('Updating Comment error.');
    });
};

//
// Delete a single comment.
//
ApiController.delete = (req, res) => {
    log.info(`API: deleting comment - ${req.params.commentid}`);
    commentService.delete(req.params.commentid)
    .then((comment) => {
        log.info(`API: deleted - ${comment}`);
        res.status(200);
        res.json(comment);
    })
    .catch((err) => {
        log.error(`Deleting Comment error: ${err}`);
        res.status(500);
        res.end('Deleting Comment error.');
    });
};

module.exports = ApiController;
