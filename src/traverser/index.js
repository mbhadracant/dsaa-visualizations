import traverse from 'ast-traverse';
import { parse } from 'esprima';
import Scope from './scope';
import BinaryExpression from './visitors/BinaryExpression';
import VariableDeclarator from './visitors/VariableDeclarator';
import VariableDeclaration from './visitors/VariableDeclaration';
import Program from './visitors/Program';
import ForStatement from './visitors/ForStatement';
import Literal from './visitors/Literal';

const map = {
  Program,
  BinaryExpression,
  VariableDeclarator,
  VariableDeclaration,
  ForStatement,
  Literal,
};

const scope = new Scope();

export default (code) => {
  const ast = parse(code, { loc: true });
  traverse(ast, {
    pre: (node) => {
      console.log(node);
      if (node.type in map) {
        map[node.type].pre(node, scope);
      }
    },
    post: (node) => {
      if (node.type in map) {
        map[node.type].post(node, scope);
      }
    },
  });
};
