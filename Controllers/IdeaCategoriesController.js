'use strict';

var utils = require('../utils/writer.js');
var IdeaCategoriesController = require('../service/IdeaCategoriesControllerService.js');

module.exports.createIdeaCategories = function createIdeaCategories (req, res, next, body) {
    IdeaCategoriesController.createIdeaCategories(body)
  .then(IdeaCategoriesController.retrieveIdeaCategories)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in createIdeaCategories:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.deleteIdeaCategories = function deleteIdeaCategories (req, res, next, id) {
    IdeaCategoriesController.deleteIdeaCategories(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in deleteIdeaCategories:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveIdeaCategory = function retrieveIdeaCategory (req, res, next, id) {
    IdeaCategoriesController.retrieveIdeaCategory(id)
    .then(function (response) {
      if (!response) {
        utils.writeJson(res, { error: "Idea Category not found" }, 404);
      } else {
        utils.writeJson(res, response);
      }
    })
    .catch(function (error) {
      console.error("Error in retrieveIdeaCategory:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveIdeaCategories = function retrieveIdeaCategories (req, res, next) {
    IdeaCategoriesController.retrieveIdeaCategories()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in retrieveIdeaCategories:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.updateIdeaCategories = function updateIdeaCategories (req, res, next, body, id) {
    IdeaCategoriesController.updateIdeaCategories(body, id)
  .then(IdeaCategoriesController.retrieveIdeaCategories)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in updateIdeaCategories:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
}; 