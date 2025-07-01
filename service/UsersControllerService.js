'use strict';

var sql = require('../utils/db.js');


/**
 * Create User
 *
 * body User  (optional)
 * returns User
 **/
exports.createUsers = function(body) {
  return new Promise(function(resolve, reject) {
    console.log(body);
    sql.query("INSERT INTO Users (UserID, UserName, Email) Values (?,?,?)",[body.UserID,body.UserName,body.Email],function(err,res){
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
 * Delete User
 *
 * id Long 
 * no response value expected for this operation
 **/
exports.deleteUsers = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("DELETE FROM Tasks WHERE UserID = ?",[id], function (err,res){
      if (err|| !res.affectedRows){
        console.log(err);
        console.log(res);
      }
      else{
        console.log(res);
      }
    });
    sql.query("DELETE FROM Users WHERE UserID = ?",[id], function (err,res){
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
 * Retrieve Users
 *
 * id Long 
 * returns Users
 **/
exports.retrieveUser = function(id) {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Users WHERE UserID = ?",[id], function(err,res){
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
 * Retrieve Users
 *
 * returns List
 **/
exports.retrieveUsers = function() {
  return new Promise(function(resolve, reject) {
    sql.query("SELECT * FROM Users",function(err,res){
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
 * Update Users
 *
 * body Users
 * id Long 
 * no response value expected for this operation
 **/
exports.updateUsers = function(body,id) {
  return new Promise(function(resolve, reject) {
    sql.query("UPDATE Users set Email = ?, UserName = ? WHERE UserID = ?", [body.Email,body.UserName, id],function(err,res){
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

