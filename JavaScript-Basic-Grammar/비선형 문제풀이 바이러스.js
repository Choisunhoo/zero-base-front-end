function Graph(){
  this.edge = {};
  this.visited = {};

}

Graph.prototype.addVertex = function (v) {
  this.edge[v] = [];
  this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
  this.edge[v2].push(v1);
  this.edge[v1].push(v2);
}

Graph.prototype.dfs = function (vertex) {
  if (this.visited[vertex]) return;

  this.visited[vertex] = true;
  let neighbors = this.edge[vertex];
  for (let i = 0; i < neighbors.length; i++) {
    this.dfs(neighbors[i]);
  }
};
 
function answer(v, e_list) {
  let result = 0;

  let g = new Graph();
   for (let i = 1; i <= v; i++) {
    g.addVertex(i);
   }

   for (let i = 0; i < e_list.length; i++) {
    let e = e_list[i];
    g.addEdge(e[0], e[1]);
   }

   g.dfs(1);

   for (let vertex in g.visited) {
    result += g.visited[vertex] ? 1 : 0;
   }

  return result;
}

let input = [
  [7, 
    [[1, 2], [2, 3], [1, 5], [1, 5], [5, 2], [5, 6], [4, 7], ],
  ], 
  [10,
    [[8, 6], [5, 7], [9, 10], [7, 4], [1, 8], [5, 10], [7, 2], ], 
  ],

  [10,
    [[6, 9], [9, 4], [4, 8], [9, 7], [6, 8], [10, 1], [10, 9], ],
  ],

];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]))
}