// class Node {
//     constructor(value){
//         this.value= value;
//         this.left = null;
//         this.right = null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }

//     isEmpty(){
//         return this.root ===null;
//     }
// }

// const bst = new BinarySearchTree();
// console.log("Tree is empty : ", bst.isEmpty());

function createBinarySearchTree(initKeyList){
    let root = null;
    if(Array.isArray(initKeyList) && initKeyList.length>0){
        initKeyList.forEach((key)=>{
            root = insert(root, key);
        })
    }


function insert(node, key){
    const newNode = {
        key,
        left:null,
        right:null,
    }
    //Base case : 
    if(node == null) return newNode;
    if(node.key===key) return node ;
    if(key>node.key){
        node.right = insert(node.right, key);
    }else{
        node.left = insert(node.left, key);
    }
    return node;

}
return {
    root,
    insert,
}
}
const BinarySearchTree = createBinarySearchTree([10, 7, 15,8]);
console.log(BinarySearchTree.root);

function findMin(node) {
    if (node == null) return null;
    let minNode = node;
    while (minNode.left != null) {
      minNode = minNode.left;
    }
    return minNode;
  }
  
  function search(node, key) {
    if (node == null) return null;
    if (key > node.key) return search(node.right, key);
    if (key < node.key) return search(node.left, key);
    return node;
  }
  
  function getMaxNodesCount(node) {
    if (node == null) return 0;
    const leftHeight = getMaxNodesCount(node.left);
    const rightHeight = getMaxNodesCount(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }
  function getHeight() {
    const height = getMaxNodesCount(root);
    return height > 0 ? height - 1 : 0;
  }

  function remove(node, key) {
    if (node == null) return null;
    // find until we get at the node to be deleted
    if (key > node.key) {
      node.right = remove(node.right, key);
      return node;
    }
    if (key < node.key) {
      node.left = remove(node.left, key);
      return node;
    }
    // key === node.key
    // no child
    if (node.left == null && node.right == null) return null;
    // one child
    if (node.left == null) {
      node = node.right;
      return node;
    }
    if (node.right == null) {
      node = node.left;
      return node;
    }
    // two children
    const minNode = findMin(node.right);
    node.key = minNode.key;
    node.right = remove(node.right, minNode.key);
    return node;
  }