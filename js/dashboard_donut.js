function change() {
    selectedPosition =  document.getElementById('positions').value;
    selectedStat =  document.getElementById('stats').value;

    main_dashboard_scatter_plot.wrangleData();
    main_dashboard_histogram.wrangleData();
    main_dashboard_top3.wrangleData();
    main_dashboard_donut.wrangleData();
}

class donut {

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
            .attr('transform', `translate (${screen_width * (3.9/5)}, ${screen_height*(1/3) + vis.margin.top})`);

        // Title
        vis.svg.append('g')
            .attr('class', 'title pie-title')
            .append('text')
            .text('Statistic by Sub-Era')
            .attr('transform', `translate(${vis.width / 2}, 0)`)
            .attr('text-anchor', 'middle')
            .attr('font-family', 'sans-serif')
            .attr('font-weight', 'bold')
            .attr('font-size', 'smaller');

        // Initial chart group
        vis.pieChartGroup = vis.svg
            .append('g')
            .attr('class', 'pie-chart')
            .attr("transform", "translate(" + vis.width / 2 + "," + vis.height / 2 + ")");
        vis.pie = d3.pie()
            .value(d => d.value)
        vis.outerRadius = (vis.width / 10) + vis.margin.left + vis.margin.right;
        vis.innerRadius = (vis.width / 10) + vis.margin.left/1.5;
        vis.arc = d3.arc()
            .innerRadius(vis.innerRadius)
            .outerRadius(vis.outerRadius);

        // Legend
        vis.svg.append('rect')
            .attr("x", (vis.width/2)-vis.margin.left)
            .attr("y", vis.height)
            .attr("width", "12")
            .attr("height", "12")
            .attr("fill", "#B2C1D6")
        vis.svg.append('rect')
            .attr("x", (vis.width/2)-vis.margin.left)
            .attr("y", vis.height + 15)
            .attr("width", "12")
            .attr("height", "12")
            .attr("fill", "steelblue")
        vis.svg.append('rect')
            .attr("x", (vis.width/2)-vis.margin.left)
            .attr("y", vis.height + 30)
            .attr("width", "12")
            .attr("height", "12")
            .attr("fill", "#5E6C85")
        vis.svg.append('text')
            .attr("x", (vis.width/2)-vis.margin.left + 14)
            .attr("y", vis.height + 11)
            .attr("font-size", "10pt")
            .attr('font-family', 'sans-serif')
            .text("2005 - 2009")
        vis.svg.append('text')
            .attr("x", (vis.width/2)-vis.margin.left + 14)
            .attr("y", vis.height + 26)
            .attr("font-size", "10pt")
            .attr('font-family', 'sans-serif')
            .text("2010 - 2014")
        vis.svg.append('text')
            .attr("x", (vis.width/2)-vis.margin.left + 14)
            .attr("y", vis.height + 42)
            .attr("font-size", "10pt")
            .attr('font-family', 'sans-serif')
            .text("2015 - 2020")

        // Label
        vis.text_group = vis.svg.append("g")
            .attr('class', 'text')

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

        let era1 = 0;
        let era2 = 0;
        let era3 = 0;

        vis.filteredData.forEach(function(d) {
            if (d.season >= 2004 && d.season < 2009) { era1 += d[selectedStat] }
            else if (d.season >= 2010 && d.season < 2014) { era2 += d[selectedStat] }
            else if (d.season >= 2015 && d.season < 2020) { era3 += d[selectedStat] }
        })

        vis.graphData = [
            {"era": "2005-09", "value":era1, "color":'#B2C1D6'},
            {"era": "2010-14%", "value":era2, "color":'steelblue'},
            {"era": "2015-20%", "value":era3, "color":'#5E6C85'}
        ];

        vis.sortedData = vis.graphData.sort( function (a, b) {
            return b.value - a.value
        });

        vis.textData = [
            {"text": `${Math.round(((vis.sortedData[0].value)/((vis.sortedData[0].value)+(vis.sortedData[1].value)+(vis.sortedData[2].value)))*100)}%`,
            "color": vis.sortedData[0].color}
        ]
        console.log(vis.graphData)
        console.log(vis.textData)

        vis.updateVis()
    }

    updateVis(){
        let vis = this;

        // Visualization
        vis.arcs = vis.pieChartGroup
            .selectAll('.pie-arc')
            .data(vis.pie(vis.graphData));
        vis.arcs.exit().remove();
        vis.arcs.enter().append('path')
            .attr('class', 'pie-arc')
            .merge(vis.arcs)
            .transition()
            .duration(500)
            .attr('d', vis.arc)
            .attr('fill', d => d.data.color)

        // Data label
        vis.text = vis.text_group
            .selectAll('.text')
            .data(vis.textData);
        vis.text.exit().remove();
        vis.text.enter().append('text')
            .attr('class', 'text')
            .merge(vis.text)
            .transition()
            .duration(500)
            .attr("x", vis.width/2)
            .attr("y", vis.height/2 + vis.margin.top/2)
            .attr("fill", function (d) { return d.color })
            .attr('text-anchor', 'middle')
            .attr('font-family', 'sans-serif')
            .attr('font-weight', 'bold')
            .attr('font-size', '2em')
            .text(function (d) { return `${d.text}` })
    }
}