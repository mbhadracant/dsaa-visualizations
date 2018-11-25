import traverse from 'ast-traverse';
import { parse } from 'esprima';
import Scope from './scope';
import BinaryExpression from './visitors/BinaryExpression';
import VariableDeclarator from './visitors/VariableDeclarator';
import VariableDeclaration from './visitors/VariableDeclaration';
import Program from './visitors/Program';
import ForStatement from './visitors/ForStatement';
import ExpressionStatement from './visitors/ExpressionStatement';
import UpdateExpression from './visitors/UpdateExpression';
import Identifier from './visitors/Identifier';
import Literal from './visitors/Literal';
import highlight from '../highlighter/highlight';

const map = {
  Program,
  BinaryExpression,
  VariableDeclarator,
  VariableDeclaration,
  ForStatement,
  Literal,
  UpdateExpression,
  ExpressionStatement,
  Identifier,
};

const scope = new Scope();

const speed = 100;

export default (code) => {
  let counter = 0;

  const ast = parse(code, { loc: true });
  traverse(ast, {

    pre: (node) => {
      if (node.type in map) {
        setTimeout(() => {
          map[node.type].pre(node, scope);
          highlight(node);
        }, counter * speed);
        counter += 1;
      }
    },
    post: (node) => {
      console.log(node);
      if (node.type in map) {
        setTimeout(() => {
          map[node.type].post(node, scope);
          highlight(node);
        }, counter * speed);
        counter += 1;
      }
    },
  });
};
