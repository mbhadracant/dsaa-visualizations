import * as d3 from 'd3';

const speed = 1000;
let iteration = 1;

export default (value, node) => {
  const svg = d3.select('#svg-viz');
  const text = svg.append('text')
    .attr('x', iteration * 20)
    .attr('y', 50)
    .attr('font-family', 'menlo')
    .attr('text-anchor', 'middle')
    .text(value)
    .attr('opacity', 0);
  text
    .transition()
    .duration(speed)
    .attr('opacity', 1);

  iteration += 1;
};
