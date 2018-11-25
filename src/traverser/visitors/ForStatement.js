const pre = (node, scope) => {
  scope.enterScope();
};

const post = (node, scope) => {
  scope.exitScope();
};


export default { pre, post };
