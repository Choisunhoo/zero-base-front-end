function Stack(array) {
  this.array = array ? array : [];
}

// getBuffer(): 객체 내 데이터 셋 변환
Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

// isEmpty(): 객체 내 데이터 존재 여부 파악 
Stack.prototype.isEmpty = function () {
  return this.array.length == 0;
};
// 스택 구현 (2)

// push(): 데이터 추가 
Stack.prototype.push = function (element) {
  return this.array.push(element);
};

// pop(): 데이터 삭제
Stack.prototype.pop = function (element) {
  return this.array.pop();
};

// peek(): 가장 끝 데이터 반환
Stack.prototype.peek = function (element) {
  return this.array[this.array.length-1];
};

// size(): 스택 내 데이터 개수 확인
Stack.prototype.size = function () {
  return this.array.length;
};


// indexOf(): 데이터 위치 값 조회 
Stack.prototype.indexOf = function (element, position = 0) {
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) return i;
  }

  return -1;
};


// includes(): 데이터 존재 여부 확인 
Stack.prototype.includes = function (element, position = 0) {
  for (let i = position; i < element; i++) {
    if (element == this.array[i]) return true;
  }

  return false;
};

function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length == 0;
};

Queue.prototype.enqueue = function (element) {
  return this.array.push(element);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};

Queue.prototype.front = function () {
  return this.array.length == 0 ? undefined : this.array[0]
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.clear = function () {
  this.array = [];
};

function Graph() {
    this.edge = {};
    this.visited = {};
}

Graph.prototype.addVertex = function (v) {
    this.edge[v] = [];
    this.visited[v] = false;
};

Graph.prototype.addEdge = function (v1, v2) {
    this.edge[v1].push(v2);
};

Graph.prototype.print = function () {
    for (let vertex in this.edge) {
        let neighbors = this.edge[vertex];
        if (neighbors.length == 0) continue;
        
        process.stdout.write(`${vertex} -> `);
        for (let j = 0; j < neighbors.length; j++) {
            process.stdout.write(`${neighbors[j]} `);
        }

        console.log("");
    }
};

// bfs(): BFS 탐색 
Graph.prototype.bfs = function (startVertex) {
  this._bfsLoopVisit(startVertex);
};

// _bfsLoopVisit(): 큐를 이용한 BFS 탐색 
Graph.prototype._bfsLoopVisit = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();
    if (this.visited[vertex]) {
      continue;
    }

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      queue.enqueue(neighbors[i]);
    }
  }
};

// _bfsShortestPath(): 다른 정점 간 최단 경로 비용 산출 
Graph.prototype._bfsShortestPath = function (vertex) {
  let queue = new Queue();
  queue.enqueue(vertex);
  
  let distance = {};
  let pre_visit = {};
  for (let vertex in this.edge) {
    distance[vertex] = 0;
    pre_visit[vertex] = null;
  }

  while (!queue.isEmpty()) {
    let vertex = queue.dequeue();

    this.visited[vertex] = true;
    console.log(`visit "${vertex}"`);

    let neighbors = this.edge[vertex];
    for (let i = 0; i < neighbors.length; i++) {
      if (!this.visited[neighbors[i]]) {
        distance[neighbors[i]] = distance[vertex] + 1;
        pre_visit[neighbors[i]] = vertex;
        queue.enqueue(neighbors[i]);
      }
    }
  }
  return { distance, pre_visit };
};

// _from_to_path(): from 정점에서 to 정점으로 최단 경로 출력 
Graph.prototype._from_to_path = function (pre_visit, from, to) {
  let stack = new Stack();

  for (let v = to; v !== from; v = pre_visit[v]) {
    stack.push(v);
  }
  stack.push(from);

  while (!stack.isEmpty()) {
    let v = stack.pop();
    process.stdout.write(`${v} -> `);
    
  }
  console.log("end");
};

// shortestPath(): 다른 정점 간 최단 경로 탐색 
Graph.prototype.shortestPath = function (startVertex) {
  let result = this._bfsShortestPath(startVertex);

  console.log(result.distance);
  console.log(result.pre_visit);

  for (let vertex in this.edge) {
    if (vertex === startVertex) continue;

    this._from_to_path(result.pre_visit, startVertex, vertex);
  }
};

let graph = new Graph();
let vertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

for (let i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i])
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");
graph.print();
console.log("");

graph.bfs("A");

console.log(graph._bfsShortestPath("A"))

graph.shortestPath("A");