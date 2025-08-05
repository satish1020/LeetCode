let buildGraph = (edges) => {
  let graph = new Map();

  for (const [x, y] of graph) {
    if(!graph.has(x)){
        graph.set(x,[]);
    }
    graph.get(x).push(y)
  }
  return graph;
};

// https://replit.com/@ZhangMYihua/Adjacency-List-BFS#index.js
const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

const traversalBFS = (graph) =>{
 let queue = [0];
 const values = [];
 let seen = {};
 while(queue.length > 0){
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for(var i=0;i<connections.length; i++)
    {
        const connection = connections[i];
        if(!seen[connection]){
            queue.push(connection);
        }
    }
 }
 return values;
}

traversalBFS(adjacencyList);

// https://replit.com/@ZhangMYihua/Adjacency-Matrix-BFS#index.js

const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalBFS = function(graph) {
  const seen = {};
  const queue = [0];
  const values = [];

  while(queue.length) {
    const vertex = queue.shift();
    values.push(vertex);
    seen[vertex] = true;
    const connections = graph[vertex];
    for(let v = 0; v < connections.length; v++) {
      if(connections[v] > 0 && !seen[v]) {
        queue.push(v);
      }
    }
  }

  return values;
}

console.log(traversalBFS(adjacencyMatrix));


// https://replit.com/@ZhangMYihua/Adjacency-List-DFS#index.js

const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2]
];

// https://replit.com/@ZhangMYihua/Adjacency-List-DFS#index.js
const traversalDFS = function(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for(let i = 0; i < connections.length; i++) {
    const connection = connections[i];

    if(!seen[connection]) {
      traversalDFS(connection, graph, values, seen);
    }
  }
}


const values = [];
traversalDFS(0, adjacencyList, values, {})

console.log(values);


https://replit.com/@ZhangMYihua/Adjacency-Matrix-DFS#index.js


const adjacencyMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

const traversalDFS = function(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for(let v = 0; v < connections.length; v++) {
    if(connections[v] > 0 && !seen[v]) {
      traversalDFS(v, graph, values, seen);
    }
  }
}

const values = [];
traversalDFS(0, adjacencyMatrix, values, {})

console.log(values);
