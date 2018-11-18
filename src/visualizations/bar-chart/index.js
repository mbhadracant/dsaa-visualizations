import * as d3 from 'd3';

export default (data) => {

    const width = 40;

    const svg = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    svg.selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', (d, i) => (i * 50))
        .attr('y', (d, i) => 500 - ((i + 1) * 40))
        .attr('width', width)
        .attr('height', (d) => d * 5);


};
