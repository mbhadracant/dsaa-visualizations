const pre = (node, scope) => {
  scope.addNode(node.id.name, node);
};

const post = (node, scope) => {
  node.value = node.init.value;
  console.log(node.id.name, ' -> ', node.value);
};


export default { pre, post };
