const pre = (node, scope) => {
  scope.addNode(node.id.name, node);
};

const post = (node, scope) => {
  if (node.init.type === 'Literal') {
    node.value = node.init.value;
  } else {
    node.value = node.init.evaluation;
  }
  console.log(node.id.name, ' -> ', node.value);
};


export default { pre, post };
