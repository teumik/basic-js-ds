const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
// class BinarySearchTree {

//   root() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   add(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   has(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   find(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   remove(/* data */) {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   min() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }

//   max() {
//     throw new NotImplementedError('Not implemented');
//     // remove line with error and write your code here
//   }
// }
class BinarySearchTree {

  root() {
    if (!this.tree) {
      return null;
    } else {
      return this.tree;
    }
  }

  add(data) {
    const node = {
      data: data,
      left: null,
      right: null,
    }

    this.tree = insert(this.tree, data);

    function insert(root, data) {
      if (!root) {
        return node;
      }

      if (root.data === data) {
        return root;
      }

      if (data < root.data) {
        root.left = insert(root.left, data);
      } else {
        root.right = insert(root.right, data);
      }

      return root;
    }


  }

  has(data) {

    function hasData(root, value) {
      if (!root) {
        return false;
      }
      if (root.data === value) {
        return true;
      }

      if (value < root.data) {
        return hasData(root.left, value);
      }
      if (value > root.data) {
        return hasData(root.right, value);
      }
    }

    return hasData(this.tree, data);
  }

  find(data) {

    function hasData(root, value) {
      if (!root) {
        return null;
      }
      if (root.data === value) {
        return root;
      }

      if (value < root.data) {
        return hasData(root.left, value);
      }
      if (value > root.data) {
        return hasData(root.right, value);
      }
    }

    return hasData(this.tree, data);
  }

  remove(data) {
    this.tree = removeData(this.tree, data);

    function removeData(root, value) {
      if (!root) return null;

      if (value > root.data) {
        root.right = removeData(root.right, value);
        return root;
      } else if (value < root.data) {
        root.left = removeData(root.left, value);
        return root;
      } else {
        if (root.data === value) {
          if (!root.left && !root.right) {
            return null;
          }
          if (!root.left) {
            return root.right;
          }
          if (!root.right) {
            return root.left;
          }

          let minRight = root.right;

          while (minRight.left) {
            minRight = minRight.left;
          }

          root.data = minRight.data;
          root.right = removeData(root.right, minRight.data);

          return root;
        }
      }
    }
  }

  min() {
    if (!this.tree) return null;

    let root = this.tree;

    while (root.left) {
      root = root.left;
    }

    return root.data;
  }

  max() {
    if (!this.tree) return null;

    let root = this.tree;

    while (root.right) {
      root = root.right;
    }

    return root.data;
  }

}

module.exports = {
  BinarySearchTree
};
