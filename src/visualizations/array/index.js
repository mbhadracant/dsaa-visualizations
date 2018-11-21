import { createSvg, createBgRect } from '../common';

export default (width, height) => {
  const svg = createSvg(width, height);

  createBgRect(svg, width, height);

  const dataset = [1, 2, 3, 4, 5, 7, 8];
  const n = dataset.length;
  const rectWidth = n > 10 ? 25 : 50;
  // create rectangles
  svg.selectAll('elements')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d, i) => (i * (width / n)) + (width / n - rectWidth) / 2)
    .attr('y', height / 2)
    .attr('width', rectWidth)
    .attr('height', rectWidth)
    .attr('stroke', 'black')
    .attr('stroke-width', '2')
    .attr('fill', 'white');

  // create text labels
  svg.selectAll('texts')
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', (d, i) => (i * (width / n)) + (width / n - rectWidth) / 2 + rectWidth / 2)
    .attr('y', height / 2 + rectWidth / 2 + 5)
    .attr('font-family', 'menlo')
    .attr('text-anchor', 'middle')
    .text(d => d);

  svg.selectAll('texts')
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', (d, i) => (i * (width / n)) + (width / n - rectWidth) / 2 + rectWidth / 2)
    .attr('y', height / 2 + rectWidth + 20)
    .attr('font-family', 'menlo')
    .attr('font-size', 10)
    .attr('text-anchor', 'middle')
    .text((d, i) => i);
};
