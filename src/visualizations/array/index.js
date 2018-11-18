import * as d3 from 'd3';

export default (width, height) => {
  const svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', 'white')
    .attr('stroke', 'black');

  const dataset = [1, 2, 3, 4, 5, 7, 8];
  const n = dataset.length;
  const rectWidth = 50;
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
  const texts = svg.selectAll('texts')
    .data(dataset)
    .enter()
    .append('text')
    .attr('x', (d, i) => (i * (width / n)) + (width / n - rectWidth) / 2 + rectWidth / 2)
    .attr('y', height / 2 + rectWidth / 2 + 5)
    .attr('font-family', 'menlo')
    .attr('text-anchor', 'middle')
    .text(d => d);

  texts
    .transition()
    .duration(100)
    .delay((d, i) => i * 200)
    .on('end', function () {
      d3.select(this)
        .transition()
        .delay(2000)
        .style('fill', 'red');
    });
};
