import * as d3 from "d3";

export default () => {
    const svg = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    svg
        .insert('circle')
        .attr('r', 10)
        .attr('cx', 50)
        .attr('cy', 50)
        .attr('fill', 'black')
        .transition()
        .ease(Math.sqrt)
        .duration(3000)
        .attr('cx', 200)
        .attr('cy', 200)
        .on('end', function() {
            this.remove();
        })
}