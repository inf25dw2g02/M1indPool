'use strict';

var utils = require('../utils/writer.js');
var IdeasController = require('../service/IdeasControllerService.js');

module.exports.createIdeas = function createIdeas (req, res, next, body) {
    IdeasController.createIdeas(body)
  .then(IdeasController.retrieveIdeas)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in createIdeas:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.deleteIdeas = function deleteIdeas (req, res, next, id) {
    IdeasController.deleteIdeas(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in deleteIdeas:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveIdea = function retrieveIdea (req, res, next, id) {
    IdeasController.retrieveIdea(id)
    .then(function (response) {
      if (!response) {
        utils.writeJson(res, { error: "Idea not found" }, 404);
      } else {
        utils.writeJson(res, response);
      }
    })
    .catch(function (error) {
      console.error("Error in retrieveIdea:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveIdeas = function retrieveIdeas (req, res, next) {
    IdeasController.retrieveIdeas()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in retrieveIdeas:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.updateIdeas = function updateIdeas (req, res, next, body, id) {
    IdeasController.updateIdeas(body, id)
  .then(IdeasController.retrieveIdeas)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in updateIdeas:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
}; 