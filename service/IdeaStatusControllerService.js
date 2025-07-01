'use strict';

var sql = require('../utils/db.js');


/**
 * Create IdeaStatus
 *
 * body IdeaStatus  (optional)
 * returns IdeaStatus
 **/
exports.createIdeaStatus = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO IdeaStatus (StatusID, StatusName) Values (?,?)",[body.StatusID,body.StatusName],function(err,res){
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
 * Delete IdeaStatus
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteIdeaStatus = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Ideas WHERE StatusID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
      }
    });
    sql.query("DELETE FROM IdeaStatus WHERE StatusID = ?",[id], function (err,res){
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
 * Retrieve IdeaStatus
 *
 * id Long 
 * returns IdeaStatus
 **/
exports.retrieveIdeaStatus = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM IdeaStatus WHERE StatusID = ?",[id], function(err,res){
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
 * Retrieve IdeaStatuses
 *
 * returns List
 **/
exports.retrieveIdeaStatuses = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM IdeaStatus",function(err,res){
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
 * Update IdeaStatus
 *
 * body IdeaStatus
 * id Long 
 * no response value expected for this operation
 **/
exports.updateIdeaStatus = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE IdeaStatus set StatusName = ? WHERE StatusID = ?", [body.StatusName, id],function(err,res){
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