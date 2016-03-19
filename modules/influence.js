var github = require('octonode');

var client = github.client('b4d4ee29cbb858da8cb54a3ca80ebb5bc119f2c3');

function findByIn(influ, data){
    for(var obj in data){
        if(data[obj].name === influ){
          return obj;
        }
    }
    return -1;
}

module.exports = {
  render: function(orgName) {
    var data = [];
    var membersNames = [];

    var ghOrg = client.org(orgName);
    ghOrg.members(function(err, members) {
      for(var memberIndex in members) {
          membersNames.push(members[memberIndex].login);
        }

      for(var nameIndex in membersNames) {
         client.get('/users/' + membersNames[nameIndex] + '/following', {}, function (err, status, body, headers) {
           for(var dudeIndex in body) {
             var influ = body[dudeIndex].login;

            var influIndex = findByIn(influ, data);
             if(influIndex !== -1){
               data[influIndex].count = data[influIndex].count + 1;
             } else {
               var newinflu = {};
               newinflu.name = influ;
               newinflu.count = 1;
               data.push(newinflu);
             }

          }
          console.log(data);
      });
      }

    //  https://api.github.com/users/andy-c-jones/following
    });

  }
};
