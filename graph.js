graph_created = false;

function create_edges(nodes){

  list_id = get_all_id(nodes);
  edges = []

  for(let i = 0; i < nodes.length; i++){
    for(let j = 0; j < nodes[i].neighbors.length; j++){
      from = nodes[i].id;
      to = nodes[i].neighbors[j];
      edge = create_specific_edge(from, to);
      // Adds edge in the edges list
      if(is_in_list(from, list_id) && is_in_list(to, list_id)){
        edges.push(edge);
        console.log('a');
        // list_id.splice(list_id.indexOf(to), 1);
      }
    }
    list_id.splice(list_id.indexOf(from), 1);
  }

  return edges;
}

function is_in_list(value, list) {
  return list.indexOf(value) > -1;
}

function create_specific_edge(from, to){
  return {from: from, to: to}; //label: String(from) + ' -> ' + String(to)
}

function get_all_id(nodes){
  list_id = []

  for(let i = 0; i < nodes.length; i++){
      list_id.push(nodes[i].id);
  }

  return list_id;
}

function draw(nodes){

    var container = document.getElementById('mynetwork');

    if(!graph_created){
      nodes = create_graph();
      graph_created = true;
    }

    var edges = create_edges(nodes)

    var data = {
        nodes: nodes,
        edges: edges
    };

    var options = {
        nodes: {
            borderWidth: 2,
            size:30
        },
        physics: {
            forceAtlas2Based: {
                gravitationalConstant: -20,
                centralGravity: 0.005,
                springLength: 130,
                springConstant: 0.18
            },
            maxVelocity: 146,
            solver: 'forceAtlas2Based',
            timestep: 0.35,
            stabilization: {iterations: 50}
        }
    };

    network = new vis.Network(container, data, options);

}
