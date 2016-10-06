var config = {};

// mongo uri
config.mongoURI = {
  development: "mongodb://yeko:12345@ds013926.mlab.com:13926/heroku_9k5sszl0",
  test: "mongodb://yeko:12345@ds013926.mlab.com:13926/heroku_9k5sszl0",
  stage: process.env.MONGOLAB_URI
};

module.exports = config;