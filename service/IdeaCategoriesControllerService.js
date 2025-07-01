'use strict';

var sql = require('../utils/db.js');


/**
 * Create IdeaCategories
 *
 * body IdeaCategories  (optional)
 * returns IdeaCategories
 **/
exports.createIdeaCategories = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO IdeaCategories (CategoryID, CategoryName) Values (?,?)",[body.CategoryID,body.CategoryName],function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else {
        console.log(res.insertId);
        resolve(res.insertId);
      }
    });
  });
}


/**
 * Delete IdeaCategories
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteIdeaCategories = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Ideas WHERE CategoryID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
      }
    });
    sql.query("DELETE FROM IdeaCategories WHERE CategoryID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
        resolve({"deleted":id});
      }
    });
  });
}


/**
 * Retrieve IdeaCategories
 *
 * id Long 
 * returns IdeaCategories
 **/
exports.retrieveIdeaCategory = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM IdeaCategories WHERE CategoryID = ?",[id], function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res[0]);
      }
    });
  });
}

/**
 * Retrieve IdeaCategories
 *
 * returns List
 **/

exports.retrieveIdeaCategories = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM IdeaCategories",function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(res);
      }
    });
  });
}

/**
 * Update IdeaCategories
 *
 * body IdeaCategories
 * id Long 
 * no response value expected for this operation
 **/
exports.updateIdeaCategories = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE IdeaCategories set CategoryName = ? WHERE CategoryID = ?", [body.CategoryName, id],function(err,res){
      if(err){
        console.log(err);
        reject(err);
      }
      else{
        console.log(res);
        resolve(id);
      }
    });
  });
} 