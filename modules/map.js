"use strict";
var github = require('octonode');

var client = github.client('b4d4ee29cbb858da8cb54a3ca80ebb5bc119f2c3');

function getLoginData(orgName) {
    var name = orgName.toLowerCase();
    var logins = {
        "pusher": [{"login":"alexpate","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/3749759?v=3"},
            {"login":"topliceanu","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/462588?v=3"},
            {"login":"pl","location":[52.52000659999999, 13.404953999999975],"avatar":"https://avatars.githubusercontent.com/u/69904?v=3"},
            {"login":"maxthelion","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/999?v=3"},
            {"login":"benfoxall","location":[51.7520209, -1.2577263000000585],"avatar":"https://avatars.githubusercontent.com/u/51385?v=3"},
            {"login":"vivangkumar","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/6005628?v=3"},
            {"login":"zimbatm","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/3248?v=3"},
            {"login":"sylg","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/1723187?v=3"},
            {"login":"hamchapman","location":[51.5073509, -0.12775829999998223],"avatar":"https://avatars.githubusercontent.com/u/2475150?v=3"}],
        "esendex": [{"login":"hawx","location":[52.95478319999999, -1.1581085999999914],"avatar":"https://avatars.githubusercontent.com/u/146390?v=3"},
            {"login":"BadgerCode","location":[52.1306607, -3.783711700000026],"avatar":"https://avatars.githubusercontent.com/u/5206198?v=3"},
            {"login":"Codesleuth","location":[55.378051, -3.43597299999999],"avatar":"https://avatars.githubusercontent.com/u/5011956?v=3"},
            {"login":"andy-c-jones","location":[52.9225301, -1.4746185999999852],"avatar":"https://avatars.githubusercontent.com/u/2070987?v=3"},
            {"login":"neilkilbride","location":[52.95478319999999, -1.1581085999999914],"avatar":"https://avatars.githubusercontent.com/u/633871?v=3"},
            {"login":"EsendexDev","location":[52.95478319999999, -1.1581085999999914],"avatar":"https://avatars.githubusercontent.com/u/1257918?v=3"},
            {"login":"andrewseward","location":[52.9225301, -1.4746185999999852],"avatar":"https://avatars.githubusercontent.com/u/655436?v=3"},
            {"login":"jonathanrelf","location":[52.95478319999999, -1.1581085999999914],"avatar":"https://avatars.githubusercontent.com/u/584662?v=3"},
            {"login":"samwessel","location":[52.95478319999999, -1.1581085999999914],"avatar":"https://avatars.githubusercontent.com/u/545452?v=3"},
            {"login":"RobinJDCox","location":[55.378051, -3.43597299999999],"avatar":"https://avatars.githubusercontent.com/u/2930791?v=3"}],
        "netflix": [{"login":"brianjo","location":[37.2358078, -121.96237510000003],"avatar":"https://avatars.githubusercontent.com/u/1500149?v=3"},
            {"login":"claymccoy","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/2743?v=3"},
            {"login":"aspyker","location":[37.2358078, -121.96237510000003],"avatar":"https://avatars.githubusercontent.com/u/260750?v=3"},
            {"login":"bondj","location":[37.2358078, -121.96237510000003],"avatar":"https://avatars.githubusercontent.com/u/4749778?v=3"},
            {"login":"cquinn","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/494289?v=3"},
            {"login":"gorzell","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/1234453?v=3"},
            {"login":"jkschneider","location":[37.2358078, -121.96237510000003],"avatar":"https://avatars.githubusercontent.com/u/1697736?v=3"},
            {"login":"jayphelps","location":[37.8271784, -122.29130780000003],"avatar":"https://avatars.githubusercontent.com/u/762949?v=3"},
            {"login":"bryanz","location":[36.778261, -119.41793239999998],"avatar":"https://avatars.githubusercontent.com/u/6412864?v=3"},
            {"login":"kilink","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/835139?v=3"},
            {"login":"bmoyles","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/982180?v=3"},
            {"login":"dmuino","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/101209?v=3"},
            {"login":"jmeas","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/2322305?v=3"},
            {"login":"aglover","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/149878?v=3"},
            {"login":"joesondow","location":[37.387474, -122.05754339999999],"avatar":"https://avatars.githubusercontent.com/u/614132?v=3"},
            {"login":"cfregly","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/1438064?v=3"},
            {"login":"kunalkundaje","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/552415?v=3"},
            {"login":"clarle","location":[37.3860517, -122.0838511],"avatar":"https://avatars.githubusercontent.com/u/686352?v=3"},
            {"login":"lorin","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/446305?v=3"},
            {"login":"jmcgarr","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/170149?v=3"},
            {"login":"cfieber","location":[37.3382082, -121.88632860000001],"avatar":"https://avatars.githubusercontent.com/u/301292?v=3"},
            {"login":"btholt","location":[37.7749295, -122.41941550000001],"avatar":"https://avatars.githubusercontent.com/u/999523?v=3"},
            {"login":"brianm","location":[47.6062095, -122.3320708],"avatar":"https://avatars.githubusercontent.com/u/1291?v=3"}]
    };

    if (logins[name] != undefined) {
        return logins[name];
    }
    else {
        console.log("Could not find logins for organisation " + name + ". Returning default Netflix logins.");
        return logins["netflix"];
    }
}

// NB: not used while we have the hard-coded information for our demo clients
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
        storeLocationFn(getLoginData(orgName));

    //   crawlMemberLocations(orgName, function(data){
    //     storeLocationFn(data);
    //   })
    }
};
