// Stack(): 생성자 함수로 초기 데이터 설정 
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
  
  // let stack = new Stack([1, 2, 3]);
  // console.log(stack); // output: Stack { array: [1, 2, 3]}
  
  // let data = stack.getBuffer();
  // console.log(data === stack.array); // output: false
  // console.log(data); // output: [ 1, 2, 3 ]
  
  // console.log(stack.isEmpty()); // output: false
  
  // console.log(Object.getOwnPropertyDescriptors(Stack.prototype));
  
  
  
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

// dfs(): DFS 탐색 
Graph.prototype.dfs = function (startVertex) {
    this._dfsLoopVisit(startVertex);
}

// _dfsLoopVisit(): 스택을 이용한 DFS 탐색 
Graph.prototype._dfsLoopVisit = function (vertex) {
    let stack = new Stack();
    stack.push(vertex);

    while (!stack.isEmpty()) {
        let vertex = stack.pop();
        if (this.visited[vertex]) {
            continue;
        }

        this.visited[vertex] = true;
        console.log(`visit "${vertex}"`);

        let neighbors = this.edge[vertex];
        for (let i = neighbors.length - 1; i >= 0; i--) {
            stack.push(neighbors[i]);
        }
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
graph.print();
console.log("");

graph.dfs("A");