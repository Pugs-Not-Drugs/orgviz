var github = require('octonode');
var radar = require('../views/radar-impl');

module.exports = {
  crawl: function () {
    var client = github.client('b4d4ee29cbb858da8cb54a3ca80ebb5bc119f2c3');

    var ghOrg = client.org('rails');
    var data = [];

    function findByLanguage(language, data){
        for(var langObj in data){
            if(data[langObj].language === language){
              return langObj;
            }
        }
        return -1;
    }

    ghOrg.repos(function(err, body){
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
      radar.showRadar(data);
    });



  }
};
