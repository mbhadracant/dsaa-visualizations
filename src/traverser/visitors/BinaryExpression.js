const getValue = (node, scope) => {
  switch (node.type) {
    case 'BinaryExpression':
      return node.evaluation;
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

  node.evaluation = eval(leftValue + operator + rightValue);
};


const pre = (node) => {

};

const post = (node, scope) => {
  evaluate(node, scope);
};


export default { pre, post };
