var x, y, xAxis, yAxis, svg, height;

function sexFreq() {

    var margin = {top: 40, right: 40, bottom: 70, left: 60},
        width = 450 - margin.left - margin.right;
    height = 410 - margin.top - margin.bottom;
    
    svg = d3.select("#sex_visualization")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    svg.append("text")
    .attr("x", width/2)
    .attr("y", height+50)
    .attr("text-anchor", "middle")
    .style("font-size", "20px")
    .text("Sex Frequency by Month");

    svg.append("text")
    .attr("text-anchor", "end")
    .attr("transform", "rotate(-90)")
    .attr("y", -margin.left+10)
    .attr("x", -margin.top)
    .text("Frequency")

    
    x = d3.scaleBand()
    .range([ 0, width ])
    .padding(0.2);
    xAxis = svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    
    y = d3.scaleLinear()
    .range([ height, 0]);
    yAxis = svg.append("g")
    .attr("class", "myYaxis")
    sexFreqUpdate(data1)
}
//--------------------------------------------------------------------------------------------------
function sexFreqUpdate(data) {

    x.domain(data.map(function(v) { return v.group; }))
    xAxis.call(d3.axisBottom(x))
    
    y.domain([0, d3.max(data, function(v) { return v.value }) ]);
    yAxis.transition().duration(1000).call(d3.axisLeft(y));
    
    var f = svg.selectAll("rect")
        .data(data)
    f
        .enter()
        .append("rect") 
        .merge(f) 
        .transition()
        .duration(1000)
        .attr("x", function(v) { return x(v.group); })
        .attr("y", function(v) { return y(v.value); })
        .attr("width", x.bandwidth())
        .attr("height", function(v) { return height - y(v.value); })
        .attr("fill", "#69b3a2")
    f
        .exit()
        .remove()
}

// -------------------------------------------------------------------------------------------------------------------------------------

function update(v1) {
    sexFreqUpdate(v1);
}

function init() {
    sexFreq();
}

window.onload = init;
