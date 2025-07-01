"use strict";

var utils = require("../utils/writer.js");
var UsersController = require("../service/UsersControllerService.js");

module.exports.createUsers = function createUsers(req, res, next, body) {
  UsersController.createUsers(body)
    .then(UsersController.retrieveUsers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in createUsers:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.deleteUsers = function deleteUsers(req, res, next, id) {
  UsersController.deleteUsers(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in deleteUsers:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveUser = function retrieveUser(req, res, next, id) {
  UsersController.retrieveUser(id)
    .then(function (response) {
      if (!response) {
        utils.writeJson(res, { error: "User not found" }, 404);
      } else {
        utils.writeJson(res, response);
      }
    })
    .catch(function (error) {
      console.error("Error in retrieveUser:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.retrieveUsers = function retrieveUsers(req, res, next) {
  UsersController.retrieveUsers()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in retrieveUsers:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};

module.exports.updateUsers = function updateUsers(req, res, next, body, id) {
  UsersController.updateUsers(body, id)
    .then(UsersController.retrieveUsers)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (error) {
      console.error("Error in updateUsers:", error);
      utils.writeJson(res, { error: error.message || "Internal server error" }, 500);
    });
};
