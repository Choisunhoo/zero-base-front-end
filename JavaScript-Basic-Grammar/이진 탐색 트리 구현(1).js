// 이진 탐색 트리 (Binary Search Tree)
// 현재 노드 기준으로 왼쪽에는 작은 값, 오른쪽은 큰 값으로 정렬해 놓는 이진 트리 기반 자료 구조

//Node(): value와 left, right node 저장을 위한 생성자 
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// BinaryTree(): 시작 노드인 root를 저장하기 위한 생성자
function BinarySearchTree() {
    this.root = null;
}

// _inOrderTraverseNode(): 재귀로 트리를 순회하며 중위 순회 
BinarySearchTree.prototype._inOrderTraverseNode = function (node, callback) {
    if (node === null) {
        return;
    }
    
    this._inOrderTraverseNode(node.left, callback);
    callback(node);
    this._inOrderTraverseNode(node.right, callback);
}

// inOrderTraverse(): 중위 순회하며 노드 출력 
BinarySearchTree.prototype._inOrderTraverse = function (callback) {
    this._inOrderTraverseNode(this.root, callback);
    console.log("end");
};

// _insertNode(): 재귀로 트리를 순회하며 노드 추가 (내부 사용)
BinarySearchTree.prototype._insertNode = function (node, value) {
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
BinarySearchTree.prototype.insert = function(value) {
    this.root = this._insertNode(this.root, value);
};

// make & insert tree
let tree = new BinarySearchTree();

tree.insert("F");
tree.insert("B");
tree.insert("A");
tree.insert("D");
tree.insert("C");
tree.insert("E");
tree.insert("G");
tree.insert("I");
tree.insert("H");

console.log(tree.root);