// 이진 트리 구현(1)

// Node: value와 left, right node 저장을 위한 생성자 
function Node(value) {
    this.value = value; 
    this.left = null;
    this.right = null; 
}


// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자 
function BinaryTree() {
    this.root = null;
}


// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
BinaryTree.prototype._insertNode = function (node, value) {
    if (node === null) {
        node = new Node(value);
    } else if (value < node.value) {
        node.left = this._insertNode(node.left, value);
    } else if (value >= node.value) {
        node.right = this._insertNode(node.right, value);
    }
    return node;
};


// insert(): 노드 추가 
BinaryTree.prototype.insert = function (value) {
    this.root = this._insertNode(this.root, value);
};

// _preOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._preOrderTranverseNode = function (node, callback) {
    if (node, callback) {
        if (node === null) {
            return;
        }
    }

    callback(node);
    this._preOrderTranverseNode(node.left, callback); 
    this._preOrderTranverseNode(node.right, callback);
};

// preOrderTravarse(): 전위 순회하며 노드 출력
BinaryTree.prototype.preOrderTravarse = function (callback) {
    this._preOrderTranverseNode(this.root, callback);
};


// _inOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._inOrderTraverseNode = function (node, callback) {
    if (node, callback) {
        if (node === null) {
            return;
        }
    }

    this._inOrderTraverseNode(node.left, callback); 
    callback(node);
    this._inOrderTraverseNode(node.right, callback);
};

// inOrderTravarse(): 전위 순회하며 노드 출력
BinaryTree.prototype.inOrderTravarse = function (callback) {
    this._inOrderTraverseNode(this.root, callback);
};


// _postOrderTraverseNode(): 재귀로 트리를 순회하며 전위 순회 (내부 사용)
BinaryTree.prototype._postOrderTraverseNode = function (node, callback) {
    if (node, callback) {
        if (node === null) {
            return;
        }
    }

    this._postOrderTraverseNode(node.left, callback); 
    this._postOrderTraverseNode(node.right, callback);
    callback(node);
};

// postOrderTravarse(): 전위 순회하며 노드 출력
BinaryTree.prototype.postOrderTravarse = function (callback) {
    this._postOrderTraverseNode(this.root, callback);
};


// make & insert tree
let tree = new BinaryTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree);

// 전위 순회 (Pre-order)
function printNode(node) {
    process.stdout.write(`${node.value} -> `); 
}

console.log("*********** Pre-Order ***********");
tree.preOrderTravarse(printNode);  // F -> B -> A -> D -> C -> E -> G -> I -> H -> end
console.log("end");


// 중위 순회 (Pre-order)
function printNode(node) {
    process.stdout.write(`${node.value} -> `); 
}

console.log("*********** In-Order ***********");
tree.inOrderTravarse(printNode);   // A -> B -> C -> D -> E -> F -> G -> H -> I -> end
console.log("end");


// 중위 순회 (Post-order)
function printNode(node) {
    process.stdout.write(`${node.value} -> `); 
}

console.log("*********** Post-Order ***********");
tree.postOrderTravarse(printNode);   // A -> C -> E -> D -> B -> H -> I -> G -> F -> end
console.log("end");