console.log('bst');

/*
           50
       30      70
    20   45  60   100
  10    35  59   85  105


*/

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.insert = (value) => {
      if (value <= this.value) {
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
      }
      else if (value > this.value) {
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
      }
    };

    this.contains = (value) => {
      if (value === this.value) return true;
      else if (value < this.value) {
        if (!this.left) return false;
        else return this.left.contains(value);
      }
      else if (value > this.value) {
        if(!this.right) return false;
        else return this.right.contains(value);
      }
    };

  }; //ctor-end

    //DFS Depth First Traversal -in-order
    /*depthFirstTraversal(iteratorFunc) {
      if (this.left) this.left.depthFirstTraversal(iteratorFunc);
      iteratorFunc(this.value);
      if (this.right) this.right.depthFirstTraversal(iteratorFunc);
    };*/
    depthFirstTraversal(iteratorFunc, order) {
      if (order === 'pre-order') iteratorFunc(this.value);
      if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
      if (order === 'in-order') iteratorFunc(this.value);
      if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
      if (order === 'post-order') iteratorFunc(this.value);
    };

/*
--->---->---50-->--->-->
--->---->30-->--70-->-->
-->-->20-->45-60-100--->
  10    35  59   85  105
*/
    breadthFirstTraversal(iteratorFunc) {
      let queue = [this];   //this refers to the root node of the binary tree
      while (queue.length) {
        var treeNode = queue.shift();
        iteratorFunc (treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
      }
    };

    getMinVal() {
      if (this.left) return this.left.getMinVal();
      else return this.value;
    };

    getMaxVal() {
      if (this.right) return this.right.getMaxVal();
      else return this.value;
    };
};

const bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log(bst.right.right);

console.log(bst.contains(15));

function logDF(value) {
  console.log(value);
};
bst.depthFirstTraversal(logDF, 'pre-order');

console.log('');

function logBF(node) {
  console.log(node.value);
};
bst.breadthFirstTraversal(logBF);

console.log('MIN: ', bst.getMinVal() );
console.log('MAX: ', bst.getMaxVal() );