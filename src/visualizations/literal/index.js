import * as d3 from 'd3';

let counter = 1;
const speed = 1000;

export default (value, node) => {
  const iteration = counter;
  setTimeout(() => {
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
  }, speed * (counter - 1));

  counter += 1;
};
