import traverse from 'ast-traverse';
import { parse } from 'esprima';

export default (code) => {
  console.log(code);
  const ast = parse(code);
  traverse(ast, {
    pre: (node) => {
      console.log(node);
    },
    post: () => {
    },
  });
};
