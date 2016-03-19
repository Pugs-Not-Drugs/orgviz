var vis = require('../node_modules/vis/dist/vis')

// create an array with nodes
var nodes = [
  {id: 1, label: 'Node 1', image: '../images/test_image.png'},
  {id: 2, label: 'Node 2', image: '../images/test_image.png'},
  {id: 3, label: 'Node 3', image: '../images/test_image.png'},
  {id: 4, label: 'Node 4', image: '../images/test_image.png'},
  {id: 5, label: 'Node 5', image: '../images/test_image.png'}
];
// create an array with edges
var edges = [
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 2, to: 4},
  {from: 2, to: 5}
];
// create a network
var container = document.getElementById('networkgraph');
var data = {
  nodes: nodes,
  edges: edges
};
var options = {
  nodes: {borderWidth: 4,
          borderWidthSelected: 8,
          shadow: false,
          shape: 'circularImage',
          brokenImage: '../images/test_image.png'}
};
var network = new vis.Network(container, data, options);
