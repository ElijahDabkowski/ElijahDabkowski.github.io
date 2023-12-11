let selectedPosition =  document.getElementById('positions').value;
let selectedStat =  document.getElementById('stats').value;

function change() {
    selectedPosition =  document.getElementById('positions').value;
    selectedStat =  document.getElementById('stats').value;

    main_dashboard_scatter_plot.wrangleData();
    main_dashboard_histogram.wrangleData();
    main_dashboard_top3.wrangleData();
    main_dashboard_donut.wrangleData();
}

class main_scatter_plot {

    constructor(parentElement, data){
        this.parentElement = parentElement;
        this.data = data;
        this.initVis()
    }

    initVis(){
        let vis = this;

        vis.margin = {top: 20, right: 20, bottom: 20, left: 40};
        vis.width = (document.getElementById(vis.parentElement).getBoundingClientRect().width)/2 - vis.margin.left - vis.margin.right;
        vis.height = (document.getElementById(vis.parentElement).getBoundingClientRect().height)/2 - vis.margin.top - vis.margin.bottom;

        // initialize svg
        vis.svg = d3.select("#" + vis.parentElement).append("svg")
            .attr("class", "main-svg")
            .attr("width", document.getElementById(vis.parentElement).getBoundingClientRect().width + vis.margin.left + vis.margin.right)
            .attr("height", document.getElementById(vis.parentElement).getBoundingClientRect().height + vis.margin.top + vis.margin.bottom)
            .append('g')
            .attr('transform', `translate (${(vis.width/2) + vis.margin.right + vis.margin.left}, ${(vis.margin.top)*2})`);

        // scales and axes
        vis.xScale = d3.scaleLinear()
            .range([0, vis.width]);
        vis.xAxis = d3.axisBottom(vis.xScale)
            .tickFormat(d3.format("d"));
        vis.yScale = d3.scaleLinear()
            .range([vis.height, 0]);
        vis.yAxis = d3.axisLeft(vis.yScale);
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")");
        vis.svg.append("g")
            .attr("class", "y-axis axis");
        vis.svg.append('g')
            .attr('class', 'axis-label x-label')
        vis.svg.append('g')
            .attr('class', 'axis-label y-label')

        // Axis Labels
        vis.svg.append('g')
            .attr('class', 'x-label')
            .append('text')
            .text('Season')
            .attr('transform', `translate(${vis.width / 2}, ${vis.height + vis.margin.bottom*2})`)
            .style('font-family', 'sans-serif')
            .attr('text-anchor', 'middle');
        vis.svg.append('g')
            .attr('class', 'y-label')
            .append('text')
            .text('Selected Statistic')
            .attr('transform', `translate(${-vis.margin.left}, ${vis.height/2}) rotate(-90)`)
            .style('font-family', 'sans-serif')
            .attr('text-anchor', 'middle');
        vis.xlab_group = vis.svg.append("g")
            .attr('class', 'x-label')
        vis.ylab_group = vis.svg.append("g")
            .attr('class', 'y-label')

        // Initial chart group
        vis.points_group = vis.svg.append("g")
            .attr('class', 'points')

        // Border
        vis.svg.append('rect')
            .attr("x", -vis.margin.left - vis.margin.right)
            .attr("y", -vis.margin.top - vis.margin.bottom + (vis.margin.top/2))
            .attr("width", vis.width + vis.margin.left + vis.margin.right + vis.margin.top + vis.margin.bottom/3)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom + vis.margin.left)
            .attr("stroke", "black")
            .attr("stroke-width", "3")
            .attr("fill", "none")
            .attr("rx", "15")

        this.wrangleData();
    }

    wrangleData(){
        let vis = this
        vis.filteredData = [];

        if (selectedPosition === "") { selectedPosition = "Quarterbacks" }
        if (selectedStat === "") { selectedStat = "Pass Completions" }

        if (selectedPosition === "Quarterbacks") {
            vis.data.forEach( function (d) {
                if (d.passOutcomes > 0) {
                    vis.filteredData.push(d)
                }
            })
        } else if (selectedPosition === "Runningbacks") {
            vis.data.forEach( function (d) {
                if (d.rushYards > 0) {
                    vis.filteredData.push(d)
                }
            })
        } else if (selectedPosition === "Wide Receivers") {
            vis.data.forEach( function (d) {
                if (d.rec > 0) {
                    vis.filteredData.push(d)
                }
            })
        }

        if (selectedStat === "Pass Completions") { selectedStat = "passOutcomes" }
        else if (selectedStat === "Pass Touchdowns") { selectedStat = "passTd" }
        else if (selectedStat === "Interceptions") { selectedStat = "passInt" }
        else if (selectedStat === "Rush yards") { selectedStat = "rushYards" }
        else if (selectedStat === "Rushing Touchdowns") { selectedStat = "rushTd" }
        else if (selectedStat === "Receptions") { selectedStat = "rec" }
        else if (selectedStat === "Receiving Yards") { selectedStat = "recYards" }
        else if (selectedStat === "Receiving Yards After Carry") { selectedStat = "recYac" }
        else if (selectedStat === "1st Down Receptions") { selectedStat = "rec1down" }

        vis.graphData = [];
        vis.filteredData.forEach(function(d) {
            let each_point = {
                season: d.season,
                stat: d[selectedStat],
                statName: selectedStat
            }
            vis.graphData.push(each_point)
        })

        vis.updateVis()
    }

    updateVis(){
        let vis = this;

        // axes
        vis.xScale.domain([d3.min(vis.graphData, function(d) { return d.season; }), d3.max(vis.filteredData, function(d) { return d.season; })])
        vis.yScale.domain([0, d3.max(vis.graphData, function(d) { return d.stat; })])

        // Visualization
        vis.points = vis.points_group
            .selectAll('.points')
            .data(vis.graphData);
        vis.points.exit().remove();
        vis.points.enter().append('circle')
            .attr('class', 'points')
            .merge(vis.points)
            .transition()
            .duration(500)
            .attr("r", "0.2vw")
            .attr("cx", function(d) { return vis.xScale(d.season); })
            .attr("cy", function(d) { return vis.yScale(d.stat); })
            .attr("fill", "steelblue")
            .attr("stroke", "black")

        // Axes
        vis.svg.select(".y-axis")
            .call(vis.yAxis)
        vis.svg.select(".x-axis")
            .call(vis.xAxis)
    }
}