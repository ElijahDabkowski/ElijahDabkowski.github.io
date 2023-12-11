function change() {
    selectedPosition =  document.getElementById('positions').value;
    selectedStat =  document.getElementById('stats').value;

    main_dashboard_scatter_plot.wrangleData();
    main_dashboard_histogram.wrangleData();
    main_dashboard_top3.wrangleData();
    main_dashboard_donut.wrangleData();
}

class histogram {

    constructor(parentElement, data){
        this.parentElement = parentElement;
        this.data = data;
        this.initVis()
    }

    initVis(){
        let vis = this;

        vis.margin = {top: 20, right: 20, bottom: 20, left: 40};
        vis.width = (document.getElementById(vis.parentElement).getBoundingClientRect().width)/5 - vis.margin.left - vis.margin.right;
        vis.height = (document.getElementById(vis.parentElement).getBoundingClientRect().height)/3 - vis.margin.top - vis.margin.bottom;

        let screen_width = window.innerWidth
        let screen_height = window.innerHeight

        // Initialize svg
        vis.svg = d3.select(".main-svg").append("g")
            .attr("width", document.getElementById(vis.parentElement).getBoundingClientRect().width + vis.margin.left + vis.margin.right)
            .attr("height", document.getElementById(vis.parentElement).getBoundingClientRect().height + vis.margin.top + vis.margin.bottom)
            .append('g')
            .attr('transform', `translate (${vis.margin.right*4}, ${screen_height*(1/3) + vis.margin.top})`);

        // Scales and axes
        vis.xScale = d3.scaleBand()
            .range([0, vis.width])
            .padding(0);
        vis.xAxis = d3.axisBottom(vis.xScale);
        vis.yScale = d3.scaleLinear()
            .range([vis.height, 0]);
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
            .text('Data Distribution')
            .attr('transform', `translate(${vis.width / 2}, 0)`)
            .attr('text-anchor', 'middle')
            .attr('font-family', 'sans-serif')
            .attr('font-weight', 'bold')
            .attr('font-size', 'smaller');
        vis.svg.append('g')
            .attr('class', 'x-label')
            .append('text')
            .text('Selected Statistic')
            .attr('transform', `translate(${vis.width / 2}, ${vis.height + vis.margin.bottom*2})`)
            .style('font-family', 'sans-serif')
            .attr('text-anchor', 'middle')
            .attr('font-size', 'smaller');
        vis.svg.append('g')
            .attr('class', 'y-label')
            .append('text')
            .text('Count')
            .attr('transform', `translate(${-vis.margin.left}, ${vis.height/2}) rotate(-90)`)
            .style('font-family', 'sans-serif')
            .attr('text-anchor', 'middle')
            .attr('font-size', 'smaller');

        // Initial chart group
        vis.bars_group = vis.svg.append("g")
            .attr('class', 'bars')

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

        let quintile1 = 0;
        let quintile2 = 0;
        let quintile3 = 0;
        let quintile4 = 0;
        let quintile5 = 0;

        vis.extent = d3.extent(vis.filteredData, function(d) {return d[selectedStat]})
        vis.range = vis.extent[1] - vis.extent[0]
        vis.step = vis.range/5

        vis.filteredData.forEach(function(d) {
            if (d[selectedStat] >= vis.extent[0] && d[selectedStat] <= (vis.extent[0]+vis.step)) { quintile1 += 1 }
            else if (d[selectedStat] >= (vis.extent[0]+vis.step) && d[selectedStat] <= (vis.extent[0]+(vis.step*2))) { quintile2 += 1 }
            else if (d[selectedStat] >= (vis.extent[0]+(vis.step*2)) && d[selectedStat] <= (vis.extent[0]+(vis.step*3))) { quintile3 += 1 }
            else if (d[selectedStat] >= (vis.extent[0]+(vis.step*3)) && d[selectedStat] <= (vis.extent[0]+(vis.step*4))) { quintile4 += 1 }
            else if (d[selectedStat] >= (vis.extent[0]+(vis.step*4)) && d[selectedStat] <= vis.extent[1]) { quintile5 += 1 }
        })

        vis.graphData = [
            {"bin": "0-20%", "count":quintile1},
            {"bin": "21-40%", "count":quintile2},
            {"bin": "41-60%", "count":quintile3},
            {"bin": "61-80%", "count":quintile4},
            {"bin": "81-100%", "count":quintile5}
        ];

        vis.updateVis()
    }

    updateVis(){
        let vis = this;

        // Axes
        vis.xScale.domain(vis.graphData.map(function(d) { return d.bin; }))
        vis.yScale.domain([0, d3.max(vis.graphData, function(d) { return d.count; })])

        // Visualization
        vis.bars = vis.bars_group
            .selectAll('.bars')
            .data(vis.graphData);
        vis.bars.exit().remove();
        vis.bars.enter().append('rect')
            .attr('class', 'bars')
            .merge(vis.bars)
            .transition()
            .duration(500)
            .attr("x", function(d) { return vis.xScale(d.bin) + 5; })
            .attr("y", function(d) { return vis.yScale(d.count); })
            .attr("height", function(d) { return vis.height - vis.yScale(d.count); })
            .attr("width", vis.xScale.bandwidth())
            .attr("fill", "steelblue")
            .attr("stroke", "black")

        // Axes
        vis.svg.select(".y-axis")
            .call(vis.yAxis)
        vis.svg.select(".x-axis")
            .call(vis.xAxis)
    }
}