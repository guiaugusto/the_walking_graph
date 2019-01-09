function create_graph(){

    nodes = []

    max_value = 30;
    min_value = 0;
    neighbor_quantity = 1

    // Create all nodes with no neighbor
    for(let i = min_value; i < max_value; i++){
        node = {
            id: i,
            neighbors: [],
            is_infected: false,
            color: {
                border: '#D2B48C',
                background: '#D2B48C'
            },
            label: String(i)
        }

        nodes.push(node);
    }

    for(let i = min_value; i < max_value; i++){
        for(let q = 0; q < neighbor_quantity; q++){

            number_neighbor = generateRandomNumber(min_value, max_value-1);

            if(!nodes[i].neighbors.includes(number_neighbor) && number_neighbor != i){
                nodes[i].neighbors.push(number_neighbor);
                nodes[number_neighbor].neighbors.push(i);
            }
        }
    }

    return nodes;
}

function generateRandomNumber(min_value , max_value)
{
    return parseInt(Math.random() * (max_value-min_value) + min_value);
}

graph = create_graph();
// console.log(graph)
