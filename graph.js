let nodes = [];
let edges = [];
let num = null;

let isvalid = false;
let is_valid = false;

function draw(nodes){

    var container = document.getElementById('mynetwork');

    if(isvalid == false){
        nodes = create_graph();
        isvalid = true;

        for(let i = 0; i < 30; i++){
            for(let j = 0; j < nodes[i].neighbors.length; j++){
                edge1 = {
                    from: nodes[i].neighbors[j],
                    to: nodes[i].id
                }

                edge2 = {
                    from: nodes[i].id,
                    to: nodes[i].neighbors[j]
                }

                if(!edges.includes(edge1) && !edges.includes(edge2)){
                    edges.push(edge1);
                }
            }
        }
    }

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

stack = []

function on_reload(number){

    num = number;

    console.log(num);

    build_stack_elements(num);

    console.log(stack);

    for(let i = 0; i < stack.length; i++){
        nodes[stack[i]].color = {
            border: '#483D8B',
            background: '#483D8B'
        }
        console.log(nodes[stack[i]]);
    }

    draw(nodes);
}

function build_stack_elements(number){
    number = parseInt(number);

    list = nodes[number].neighbors;

    console.log(list);

    if(!stack.includes(number))
        stack.push(parseInt(number));

    for(let i = 0; i < list.length; i++){
        if (nodes[list[i]].is_infected == false){

            if(!stack.includes(list[i])){
                stack.push(list[i]);
                nodes[list[i]].is_infected = true;
            }

            build_stack_elements(list[i]);
        }
    }
}
