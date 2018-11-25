import literal from '../../visualizations/literal';

const pre = (node, scope) => {
  literal(node.raw);
};

const post = (node, scope) => {

};


export default { pre, post };
