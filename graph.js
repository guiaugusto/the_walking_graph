graph_created = false;

function create_edges(nodes){

  list_id = get_all_id(nodes);

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
