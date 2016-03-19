var github = require('octonode');

module.exports = {
  crawl: function () {
    var client = github.client();

    var ghOrg = client.org('rails');
    var data = { };


    ghOrg.repos(function(err, body){
      for(var repo in body){
        var thing = {};
        thing.language = body[repo].language;
        thing.count = 1;
        data.one = thing;
      }
      console.log(body);
      console.log(data);
    });



  }
};
