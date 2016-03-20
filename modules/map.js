"use strict";
var github = require('octonode');

var client = github.client('b4d4ee29cbb858da8cb54a3ca80ebb5bc119f2c3');

function crawlMemberLocations(orgName, callback){
  var locations = [];


  client.org(orgName).members(function(err, members){

  for(var memberIndex in members) {
    client.get('/users/' + members[memberIndex].login, function(err, status, body){
      if(body.location === null) {
        return;
      }
      locations.push({login: body.login, location: body.location, avatar: body.avatar_url })
        callback(locations);
    });

    }
  });
}

module.exports = {
  render: function(orgName, storeLocationFn) {
      crawlMemberLocations(orgName, function(data){
        storeLocationFn(data);
      })
  }
};
