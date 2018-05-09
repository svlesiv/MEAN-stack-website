//commentService.js

const log   = require('log-util');
var Comment = require('../models/commentModel');
var CommentService = {};


// List comments.
CommentService.list = (searchParams) => {
    log.info("Service: listing");
    return Comment.find(searchParams)
        .then((comments) => {
            return comments;
        })
        .catch((err) => {
            log.error(`Service: listing error: ${err}`);
            throw err;
        });
};


// Save comment to the DB.
CommentService.create = (commentObj) => {
    var comment = new Comment(commentObj);
    log.info(`Service: creating ${comment}`);
    return comment.save()
        .then((comment) => {
            log.info(`Service: saving comment - ${comment}`);
            return comment;
        })
        .catch((err) => {
            log.error(`Service: saving error: ${err}`);
            throw err;
        });
};


// Read one comment.
CommentService.read = (commentId) => {
    log.info(`Service: reading ${commentId}`);
    return Comment.findOne({_id: commentId})
        .then((comment) => {
            log.info(`Service: returning one comment ${commentId}`);
            return comment;
        })
        .catch((err) => {
            log.error(`Service: reading error: ${err}`);
            throw err;
        });
};


// Update one comment.
CommentService.update = (commentId, commentObj) => {
    log.info(`Service: updating ${commentId}`);
    return Comment.findByIdAndUpdate(
            commentId,
            {$set: commentObj},
            {new: true}
        )
        .then((comment) => {
            log.info(`Service: updated ${commentId}`);
            return comment;
        })
        .catch((err) => {
            log.error(`Service: updating error: ${err}`);
            throw err;
        });
};


// Delete one comment.
CommentService.delete = (commentId) => {
    log.info(`Service: deleting ${commentId}`);
    return Comment.findByIdAndRemove(commentId)
    .then((comment) => {
        log.info(`Service: deleted ${commentId}`);
        return comment;
    })
    .catch((err) => {
        log.error(`Service: deleting error: ${err}`);
        throw err;
    });
};

module.exports = CommentService;
