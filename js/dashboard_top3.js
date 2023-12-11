function change() {
    selectedPosition =  document.getElementById('positions').value;
    selectedStat =  document.getElementById('stats').value;

    main_dashboard_scatter_plot.wrangleData();
    main_dashboard_histogram.wrangleData();
    main_dashboard_top3.wrangleData();
    main_dashboard_donut.wrangleData();
}

class lollipop {

    constructor(parentElement, data){
        this.parentElement = parentElement;
        this.data = data;
        this.initVis()
    }

    initVis(){
        let vis = this;

        vis.margin = {top: 20, right: 20, bottom: 20, left: 20};
        vis.width = (document.getElementById(vis.parentElement).getBoundingClientRect().width)/5 - vis.margin.left - vis.margin.right;
        vis.height = (document.getElementById(vis.parentElement).getBoundingClientRect().height)/4 - vis.margin.top - vis.margin.bottom;

        let screen_width = window.innerWidth
        let screen_height = window.innerHeight

        // Initialize svg
        vis.svg = d3.select(".main-svg").append("g")
            .attr("width", document.getElementById(vis.parentElement).getBoundingClientRect().width + vis.margin.left + vis.margin.right)
            .attr("height", document.getElementById(vis.parentElement).getBoundingClientRect().height + vis.margin.top + vis.margin.bottom)
            .append('g')
            .attr('transform', `translate (${(screen_width/2) - (vis.width/2)}, ${((screen_height/3)*2)-vis.margin.bottom})`);

        // Scales and axes
        vis.xScale = d3.scaleLinear()
            .range([0, vis.width]);
        vis.xAxis = d3.axisBottom(vis.xScale);
        vis.yScale = d3.scaleBand()
            .range([0, vis.height])
            .padding(0.95);
        vis.yAxis = d3.axisLeft(vis.yScale);
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")");
        vis.svg.append("g")
            .attr("class", "y-axis axis");

        // Labels
        vis.svg.append('g')
            .attr('class', 'title')
            .append('text')
            .text('Top 3 Players')
            .attr('transform', `translate(${vis.width / 2}, 0)`)
            .attr('text-anchor', 'middle')
            .attr('font-family', 'sans-serif')
            .attr('font-weight', 'bold')
            .attr('font-size', 'smaller');
        vis.svg.append('g')
            .attr('class', 'x-label')
            .append('text')
            .text('Selected Statistic')
            .attr('transform', `translate(${vis.width}, ${vis.height - 3})`)
            .style('font-family', 'sans-serif')
            .attr('text-anchor', 'end')
            .attr('font-size', 'x-small');

        // Initial chart group (bars)
        vis.bars_group = vis.svg.append("g")
            .attr('class', 'bars')

        // Initial chart group (circles)
        vis.circle_group = vis.svg.append("g")
            .attr('class', 'circles')

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

        vis.sortedData = vis.filteredData.sort( function (a, b) {
            return b[selectedStat] - a[selectedStat]
        });
        vis.graphData = [
            {"player": `${vis.sortedData[0].nameFirst} ${vis.sortedData[0].nameLast}, ${vis.sortedData[0].season}`,
            "stat": vis.sortedData[0][selectedStat]},
            {"player": `${vis.sortedData[1].nameFirst} ${vis.sortedData[1].nameLast}, ${vis.sortedData[1].season}`,
                "stat": vis.sortedData[1][selectedStat]},
            {"player": `${vis.sortedData[2].nameFirst} ${vis.sortedData[2].nameLast}, ${vis.sortedData[2].season}`,
                "stat": vis.sortedData[2][selectedStat]}
        ]

        vis.updateVis()
    }

    updateVis(){
        let vis = this;

        // Axes
        vis.yScale.domain(vis.graphData.map(function(d) { return d.player; }))
        vis.xScale.domain([0, d3.max(vis.graphData, function(d) { return d.stat; })])

        // Visualization - bars
        vis.bars = vis.bars_group
            .selectAll('.bars')
            .data(vis.graphData);
        vis.bars.exit().remove();
        vis.bars.enter().append('rect')
            .attr('class', 'bars')
            .merge(vis.bars)
            .transition()
            .duration(500)
            .attr("x", 0)
            .attr("y", function(d) { return vis.yScale(d.player); })
            .attr("width", function(d) {return vis.xScale(d.stat);})
            .attr("height", 2)
            .attr("fill", "black")
            .attr("stroke", "black")

        // Visualization - circles
        vis.circles = vis.circle_group
            .selectAll('.circles')
            .data(vis.graphData);
        vis.circles.exit().remove();
        vis.circles.enter().append('circle')
            .attr('class', 'circles')
            .merge(vis.circles)
            .transition()
            .duration(500)
            .attr("r", 10)
            .attr("cx", function(d) {return vis.xScale(d.stat);})
            .attr("cy", function(d) { return vis.yScale(d.player); })
            .attr("fill", "steelblue")
            .attr("stroke", "black")

        // Axes
        vis.svg.select(".y-axis")
            .call(vis.yAxis)
        vis.svg.select(".x-axis")
            .call(vis.xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)");
    }
}