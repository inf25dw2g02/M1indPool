'use strict';

var utils = require('../utils/writer.js');
var IdeaStatusController = require('../service/IdeaStatusControllerService.js');

module.exports.createIdeaStatus = function createIdeaStatus (req, res, next, body) {
    IdeaStatusController.createIdeaStatus(body)
  .then(IdeaStatusController.retrieveIdeaStatuses)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in createIdeaStatus:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.deleteIdeaStatus = function deleteIdeaStatus (req, res, next, id) {
    IdeaStatusController.deleteIdeaStatus(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in deleteIdeaStatus:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveIdeaStatus = function retrieveIdeaStatus (req, res, next, id) {
    IdeaStatusController.retrieveIdeaStatus(id)
    .then(function (response) {
      if (!response) {
        utils.writeJson(res, { error: "Idea Status not found" }, 404);
      } else {
        utils.writeJson(res, response);
      }
    })
    .catch(function (error) {
      console.error("Error in retrieveIdeaStatus:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveIdeaStatuses = function retrieveIdeaStatuses (req, res, next) {
    IdeaStatusController.retrieveIdeaStatuses()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in retrieveIdeaStatuses:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.updateIdeaStatus = function updateIdeaStatus (req, res, next, body, id) {
    IdeaStatusController.updateIdeaStatus(body, id)
  .then(IdeaStatusController.retrieveIdeaStatuses)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in updateIdeaStatus:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
}; 