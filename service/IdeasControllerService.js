'use strict';

var sql = require('../utils/db.js');


/**
 * Create Ideas
 *
 * body Ideas  (optional)
 * returns Ideas
 **/
exports.createIdeas = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO Ideas (IdeaID, Title, Description, CreatedDate, UserID, CategoryID, StatusID) Values (?,?,?,?,?,?,?)",[body.IdeaID,body.Title,body.Description,body.CreatedDate,body.UserID,body.CategoryID,body.StatusID],function(err,res){
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
 * Delete Ideas
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteIdeas = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Ideas WHERE IdeaID = ?",[id], function (err,res){
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
 * Retrieve Ideas
 *
 * id Long 
 * returns Ideas
 **/
exports.retrieveIdea = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Ideas WHERE IdeaID = ?",[id], function(err,res){
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
 * Retrieve Ideas
 *
 * returns List
 **/
exports.retrieveIdeas = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Ideas",function(err,res){
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
 * Update Ideas
 *
 * body Ideas
 * id Long 
 * no response value expected for this operation
 **/
exports.updateIdeas = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE Ideas set IdeaID = ?, Title = ?, Description = ?, CreatedDate = ?, UserID = ?, CategoryID = ?, StatusID = ? WHERE IdeaID = ?", [body.IdeaID,body.Title,body.Description,body.CreatedDate,body.UserID,body.CategoryID,body.StatusID, id],function(err,res){
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