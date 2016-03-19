var github = require('octonode');
var radar = require('../views/radar-impl');

var client = github.client('b4d4ee29cbb858da8cb54a3ca80ebb5bc119f2c3');

function findByLanguage(language, data){
    for(var langObj in data){
        if(data[langObj].language === language){
          return langObj;
        }
    }
    return -1;
}

function crawlOrg(orgName, callback) {

  var ghOrg = client.org(orgName);
  var data = [];

  ghOrg.repos(function(err, body){
    console.log(err);
    for(var repo in body) {
      var currentLanguage = body[repo].language;
      if(currentLanguage === null) continue;

      var languageIndex = findByLanguage(currentLanguage, data);
      if( languageIndex !== -1){
        data[languageIndex].count = data[languageIndex].count + 1;
      } else {
        var newLanguage = {};
        newLanguage.language = currentLanguage;
        newLanguage.count = 1;
        data.push(newLanguage);
      }
    }
    callback(data);
  });
}

function crawlMembers(orgName, callback) {
  var data = [];
  var membersNames = [];
  client.org(orgName).members(function(err, members){

  for(var memberIndex in members) {
      membersNames.push(members[memberIndex].login);
    }

    console.log(membersNames);
    callback(data);
  });
}

module.exports = {
  render: function(orgName) {
      crawlOrg(orgName, function(orgData) {
        crawlMembers(orgName, function(memberData){
          radar.showRadar(orgData);
        })
    });
  }
};
