import * as d3 from 'd3';

const createSvg = (width, height) => (
  d3.select('#viz')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('box-shadow', '0px 0px 10px rgb(245,245,245)')
);

const createBgRect = (svg, width, height) => (
  svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white')

);

export { createSvg, createBgRect };
