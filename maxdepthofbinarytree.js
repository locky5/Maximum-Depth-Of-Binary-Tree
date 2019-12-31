var maxDepth = function(root) {
    function max(root, sum) {
      if (root === null) {
        return sum
      }

      return Math.max(max(root.left, sum + 1), max(root.right, sum + 1))
    }

    return max(root, 0)
};
