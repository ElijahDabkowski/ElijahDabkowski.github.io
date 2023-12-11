class Sacks {

    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
    }

    initVis() {
        let vis = this;

        vis.margin = {top: 10, right: 20, bottom: 10, left: 20};
        vis.width = (document.getElementById(vis.parentElement).getBoundingClientRect().width)/3 - vis.margin.left - vis.margin.right;
        vis.height = ((document.getElementById(vis.parentElement).getBoundingClientRect().height)/2 - vis.margin.top - vis.margin.bottom)/3;

        let screen_width = window.innerWidth
        let screen_height = window.innerHeight

        // Initialize svg
        vis.svg = d3.select(".penalty-viz").append("g")
            .attr("width", document.getElementById(vis.parentElement).getBoundingClientRect().width + vis.margin.left + vis.margin.right)
            .attr("height", (document.getElementById(vis.parentElement).getBoundingClientRect().height) + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", `translate(${(screen_width*(3/4)) - (vis.width/2)}, ${vis.margin.top})`);

        // Scales and axes
        vis.x = d3.scaleLinear()
            .range([0, vis.width]);
        vis.xAxis = d3.axisBottom(vis.x)
            .tickFormat(d3.format("d"));
        vis.y = d3.scaleLinear()
            .range([vis.height, 0]);
        vis.yAxis = d3.axisLeft(vis.y)
            .ticks(5);
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")");
        vis.svg.append("g")
            .attr("class", "y-axis axis");

        vis.wrangleData()
    }

    wrangleData(){
        let vis = this;

        vis.total = [{"KickReturns": 17, "Sacks": 543, "Penalties": 3515, "Season": 2004},
            {"KickReturns": 12, "Sacks": 537, "Penalties": 3720, "Season": 2005},
            {"KickReturns": 15, "Sacks": 551, "Penalties": 3045, "Season": 2006},
            {"KickReturns": 19, "Sacks": 527, "Penalties": 2924, "Season": 2007},
            {"KickReturns": 19, "Sacks": 495, "Penalties": 2881, "Season": 2008},
            {"KickReturns": 13, "Sacks": 484, "Penalties": 3017, "Season": 2009},
            {"KickReturns": 18, "Sacks": 545, "Penalties": 2952, "Season": 2010},
            {"KickReturns": 14, "Sacks": 582, "Penalties": 3814, "Season": 2011},
            {"KickReturns": 11, "Sacks": 548, "Penalties": 2752, "Season": 2012},
            {"KickReturns": 11, "Sacks": 706, "Penalties": 3077, "Season": 2013},
            {"KickReturns": 11, "Sacks": 627, "Penalties": 3103, "Season": 2014},
            {"KickReturns": 8, "Sacks": 576, "Penalties": 3608, "Season": 2015},
            {"KickReturns": 11, "Sacks": 485, "Penalties": 3697, "Season": 2016},
            {"KickReturns": 12, "Sacks": 539, "Penalties": 3580, "Season": 2017},
            {"KickReturns": 10, "Sacks": 461, "Penalties": 3411, "Season": 2018},
            {"KickReturns": 17, "Sacks": 536, "Penalties": 3457, "Season": 2019}]

        vis.updateVis()
    }

    updateVis() {
        let vis = this;

        // Domains
        vis.x.domain([d3.min(vis.total, function(d) { return d.Season; }), d3.max(vis.total, function(d) { return d.Season; })]);
        vis.y.domain([d3.min(vis.total, function(d) { return d.Sacks; }), d3.max(vis.total, function(d) { return d.Sacks; })]);

        // Visualization
        vis.svg.append("path")
            .datum(vis.total)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", "0.2vw")
            .attr("d", d3.line()
                .x(function(d) { return vis.x(d.Season) })
                .y(function(d) { return vis.y(d.Sacks) }))

        // Labels
        vis.svg.append("text")
            .text("Season")
            .attr("x", (vis.width/2)-vis.margin.right)
            .attr("y", vis.height + vis.margin.bottom*4)
            .attr("font-family", "sans-serif");
        vis.svg.append("text")
            .text("Sacks")
            .attr("x", -(vis.height/2)-(vis.margin.top*2.5))
            .attr("y", -vis.margin.right*1.75)
            .attr("transform", "rotate(-90)")
            .attr("font-family", "sans-serif");

        // Axes
        vis.svg.select(".y-axis")
            .call(vis.yAxis);
        vis.svg.select(".x-axis")
            .call(vis.xAxis)
    }
}



class KickReturns {

    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
    }

    initVis() {
        let vis = this;

        vis.margin = {top: 10, right: 20, bottom: 10, left: 20};
        vis.width = (document.getElementById(vis.parentElement).getBoundingClientRect().width)/3 - vis.margin.left - vis.margin.right;
        vis.height = ((document.getElementById(vis.parentElement).getBoundingClientRect().height)/2 - vis.margin.top - vis.margin.bottom)/3;

        let screen_width = window.innerWidth
        let screen_height = window.innerHeight

        // Initialize svg
        vis.svg = d3.select(".penalty-viz").append("g")
            .attr("width", document.getElementById(vis.parentElement).getBoundingClientRect().width + vis.margin.left + vis.margin.right)
            .attr("height", (document.getElementById(vis.parentElement).getBoundingClientRect().height) + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", `translate(${(screen_width*(3/4)) - (vis.width/2)}, ${vis.height*2})`);

        // Scales and axes
        vis.x = d3.scaleLinear()
            .range([0, vis.width]);
        vis.xAxis = d3.axisBottom(vis.x)
            .tickFormat(d3.format("d"));
        vis.y = d3.scaleLinear()
            .range([vis.height, 0]);
        vis.yAxis = d3.axisLeft(vis.y)
            .ticks(5);
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")");
        vis.svg.append("g")
            .attr("class", "y-axis axis");

        vis.wrangleData()
    }

    wrangleData(){
        let vis = this;

        vis.total = [{"KickReturns": 17, "Sacks": 543, "Penalties": 3515, "Season": 2004},
            {"KickReturns": 12, "Sacks": 537, "Penalties": 3720, "Season": 2005},
            {"KickReturns": 15, "Sacks": 551, "Penalties": 3045, "Season": 2006},
            {"KickReturns": 19, "Sacks": 527, "Penalties": 2924, "Season": 2007},
            {"KickReturns": 19, "Sacks": 495, "Penalties": 2881, "Season": 2008},
            {"KickReturns": 13, "Sacks": 484, "Penalties": 3017, "Season": 2009},
            {"KickReturns": 18, "Sacks": 545, "Penalties": 2952, "Season": 2010},
            {"KickReturns": 14, "Sacks": 582, "Penalties": 3814, "Season": 2011},
            {"KickReturns": 11, "Sacks": 548, "Penalties": 2752, "Season": 2012},
            {"KickReturns": 11, "Sacks": 706, "Penalties": 3077, "Season": 2013},
            {"KickReturns": 11, "Sacks": 627, "Penalties": 3103, "Season": 2014},
            {"KickReturns": 8, "Sacks": 576, "Penalties": 3608, "Season": 2015},
            {"KickReturns": 11, "Sacks": 485, "Penalties": 3697, "Season": 2016},
            {"KickReturns": 12, "Sacks": 539, "Penalties": 3580, "Season": 2017},
            {"KickReturns": 10, "Sacks": 461, "Penalties": 3411, "Season": 2018},
            {"KickReturns": 17, "Sacks": 536, "Penalties": 3457, "Season": 2019}]

        vis.updateVis()
    }

    updateVis() {
        let vis = this;

        // Domains
        vis.x.domain([d3.min(vis.total, function(d) { return d.Season; }), d3.max(vis.total, function(d) { return d.Season; })]);
        vis.y.domain([d3.min(vis.total, function(d) { return d.KickReturns; }), d3.max(vis.total, function(d) { return d.KickReturns; })]);

        // Visualizationo
        vis.svg.append("path")
            .datum(vis.total)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", "0.2vw")
            .attr("d", d3.line()
                .x(function(d) { return vis.x(d.Season) })
                .y(function(d) { return vis.y(d.KickReturns) }))

        // Labels
        vis.svg.append("text")
            .text("Season")
            .attr("x", (vis.width/2)-vis.margin.right)
            .attr("y", vis.height + vis.margin.bottom*4)
            .attr("font-family", "sans-serif");
        vis.svg.append("text")
            .text("Kick Returns")
            .attr("x", -(vis.height/2)-(vis.margin.top*4.5))
            .attr("y", -vis.margin.right*1.5)
            .attr("transform", "rotate(-90)")
            .attr("font-family", "sans-serif");

        // Axes
        vis.svg.select(".y-axis")
            .call(vis.yAxis);
        vis.svg.select(".x-axis")
            .call(vis.xAxis)
    }
}

