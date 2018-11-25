const getValue = (node, scope) => {
  switch (node.type) {
    case 'BinaryExpression':
      return node.value;
    case 'Literal':
      return node.raw;
    case 'Identifier':
      return scope.getNode(node.name).value;
    default:
      throw Error(`Unable to get value of:  +  ${node.type}`);
  }
};

const evaluate = (node, scope) => {
  const { left, right, operator } = node;
  const leftValue = getValue(left, scope);
  const rightValue = getValue(right, scope);

  node.value = eval(leftValue + operator + rightValue);
};


const pre = (node, scope) => {

};

const post = (node, scope) => {
  evaluate(node, scope);
};


export default { pre, post };
