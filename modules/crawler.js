var github = require('octonode');

module.exports = {
  crawl: function () {
    var client = github.client('b4d4ee29cbb858da8cb54a3ca80ebb5bc119f2c3');

    var ghOrg = client.org('rails');
    var obj = { data: [] };

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
        var languageIndex = findByLanguage(currentLanguage, obj.data);
        if( languageIndex !== -1){
          console.log("are you breaking?");
          obj.data[languageIndex].count = obj.data[languageIndex].count + 1;
        } else {
          console.log("i should be here");
          var newLanguage = {};
          newLanguage.language = currentLanguage;
          newLanguage.count = 1;
          obj.data.push(newLanguage);
        }
      }
      console.log(obj);
      console.log(err);
    });



  }
};
