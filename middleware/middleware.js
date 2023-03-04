const Post = require("../models/Post");

// CREATE CONTEXT MIDDLEWARE
const createContext = (req, res, next) => {
    // put any data you want in the object below to be accessible to all routes
    req.context = {
        models: {
            Post,
        },
    };
    next();
};


// export custom middleware
module.exports = {
    createContext,
};