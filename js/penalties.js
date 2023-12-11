class Penalties {

// constructor method to initialize StackedAreaChart object
    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
    }

    initVis() {
        let vis = this;

        vis.margin = {top: 10, right: 20, bottom: 10, left: 20};
        vis.width = (document.getElementById(vis.parentElement).getBoundingClientRect().width)/3 - vis.margin.left - vis.margin.right;
        vis.height = (document.getElementById(vis.parentElement).getBoundingClientRect().height)/2 - vis.margin.top - vis.margin.bottom;

        let screen_width = window.innerWidth
        let screen_height = window.innerHeight

        // Initialize svg
        vis.svg = d3.select("#" + vis.parentElement)
            .append("svg")
            .attr("class", "penalty-viz")
            .attr("width", document.getElementById(vis.parentElement).getBoundingClientRect().width + vis.margin.left + vis.margin.right)
            .attr("height", (document.getElementById(vis.parentElement).getBoundingClientRect().height) + vis.margin.top + vis.margin.bottom)
            .append("g")
            .attr("transform", `translate(${(screen_width/4) - (vis.width/2)}, ${vis.margin.top})`);

        // Scales and axes
        vis.x = d3.scaleLinear()
            .domain([2004, 2019])
            .range([0, vis.width]);
        vis.xAxis = d3.axisBottom(vis.x)
            .tickFormat(d3.format("d"));
        vis.y = d3.scaleLinear()
            .domain([0, 3814])
            .range([vis.height, 0]);
        vis.yAxis = d3.axisLeft(vis.y);
        vis.svg.append("g")
            .attr("class", "x-axis axis")
            .attr("transform", "translate(0," + vis.height + ")");
        vis.svg.append("g")
            .attr("class", "y-axis axis");

        // Legend
        vis.svg.append('rect')
            .attr("x", (vis.width*(2/3))-vis.margin.left + 50)
            .attr("y", vis.height*(4/5)-15)
            .attr("width", "12")
            .attr("height", "12")
            .attr("fill", "#B2C1D6")
        vis.svg.append('rect')
            .attr("x", (vis.width*(2/3))-vis.margin.left + 50)
            .attr("y", (vis.height*(4/5)) + 15)
            .attr("width", "12")
            .attr("height", "12")
            .attr("fill", "#5E6C85")
        vis.svg.append('rect')
            .attr("x", (vis.width*(2/3))-vis.margin.left + 50)
            .attr("y", (vis.height*(4/5)) + 45)
            .attr("width", "12")
            .attr("height", "12")
            .attr("fill", "steelblue")
        vis.svg.append('text')
            .attr("x", (vis.width*(2/3)) + 50)
            .attr("y", (vis.height*(4/5)) - 5)
            .attr("font-size", "10pt")
            .attr('font-family', 'sans-serif')
            .text("NFC")
        vis.svg.append('text')
            .attr("x", (vis.width*(2/3)) + 50)
            .attr("y", (vis.height*(4/5)) + 25)
            .attr("font-size", "10pt")
            .attr('font-family', 'sans-serif')
            .text("AFC")
        vis.svg.append('text')
            .attr("x", (vis.width*(2/3)) + 50)
            .attr("y", (vis.height*(4/5)) + 55)
            .attr("font-size", "10pt")
            .attr('font-family', 'sans-serif')
            .text("Total")

        vis.wrangleData()
    }

    wrangleData(){
        let vis = this;

        vis.NFC = [{"KickReturns": 6, "Sacks": 543, "Penalties": 1641, "Season": 2004},
                {"KickReturns": 5, "Sacks": 537, "Penalties": 1807, "Season": 2005},
                {"KickReturns": 8, "Sacks": 551, "Penalties": 1542, "Season": 2006},
                {"KickReturns": 9, "Sacks": 527, "Penalties": 1377, "Season": 2007},
                {"KickReturns": 9, "Sacks": 495, "Penalties": 1357, "Season": 2008},
                {"KickReturns": 6, "Sacks": 484, "Penalties": 1434, "Season": 2009},
                {"KickReturns": 7, "Sacks": 545, "Penalties": 1391, "Season": 2010},
                {"KickReturns": 6, "Sacks": 582, "Penalties": 1865, "Season": 2011},
                {"KickReturns": 4, "Sacks": 548, "Penalties": 1251, "Season": 2012},
                {"KickReturns": 6, "Sacks": 706, "Penalties": 1405, "Season": 2013},
                {"KickReturns": 5, "Sacks": 627, "Penalties": 1388, "Season": 2014},
                {"KickReturns": 4, "Sacks": 576, "Penalties": 1685, "Season": 2015},
                {"KickReturns": 6, "Sacks": 485, "Penalties": 1761, "Season": 2016},
                {"KickReturns": 6, "Sacks": 539, "Penalties": 1629, "Season": 2017},
                {"KickReturns": 4, "Sacks": 461, "Penalties": 1569, "Season": 2018},
                {"KickReturns": 9, "Sacks": 536, "Penalties": 1628, "Season": 2019}]

        vis.AFC = [{"KickReturns": 11, "Sacks": 661, "Penalties": 1874, "Season": 2004},
                {"KickReturns": 7, "Sacks": 645, "Penalties": 1913, "Season": 2005},
                {"KickReturns": 7, "Sacks": 612, "Penalties": 1503, "Season": 2006},
                {"KickReturns": 10, "Sacks": 575, "Penalties": 1547, "Season": 2007},
                {"KickReturns": 10, "Sacks": 587, "Penalties": 1524, "Season": 2008},
                {"KickReturns": 7, "Sacks": 547, "Penalties": 1583, "Season": 2009},
                {"KickReturns": 11, "Sacks": 613, "Penalties": 1561, "Season": 2010},
                {"KickReturns": 8, "Sacks": 604, "Penalties": 1949, "Season": 2011},
                {"KickReturns": 5, "Sacks": 585, "Penalties": 1501, "Season": 2012},
                {"KickReturns": 5, "Sacks": 765, "Penalties": 1672, "Season": 2013},
                {"KickReturns": 6, "Sacks": 633, "Penalties": 1715, "Season": 2014},
                {"KickReturns": 4, "Sacks": 653, "Penalties": 1923, "Season": 2015},
                {"KickReturns": 5, "Sacks": 578, "Penalties": 1936, "Season": 2016},
                {"KickReturns": 6, "Sacks": 581, "Penalties": 1951, "Season": 2017},
                {"KickReturns": 6, "Sacks": 533, "Penalties": 1842, "Season": 2018},
                {"KickReturns": 8, "Sacks": 676, "Penalties": 1829, "Season": 2019}]

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

        // NFC Line
        vis.svg.append("path")
            .datum(vis.NFC)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "#B2C1D6")
            .attr("stroke-width", "0.2vw")
            .attr("d", d3.line()
                .x(function(d) { return vis.x(d.Season) })
                .y(function(d) { return vis.y(d.Penalties) })
            )

        // AFC Line
        vis.svg.append("path")
            .datum(vis.AFC)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "#5E6C85")
            .attr("stroke-width", "0.2vw")
            .attr("d", d3.line()
                .x(function(d) { return vis.x(d.Season) })
                .y(function(d) { return vis.y(d.Penalties) })
            )

        // TOTAL Line
        vis.svg.append("path")
            .datum(vis.total)
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", "0.2vw")
            .attr("d", d3.line()
                .x(function(d) { return vis.x(d.Season) })
                .y(function(d) { return vis.y(d.Penalties) })
            )

        // Labels
        vis.svg.append("text")
            .text("Season")
            .attr("x", (vis.width/2)-vis.margin.right)
            .attr("y", vis.height + vis.margin.bottom*4)
            .attr("font-family", "sans-serif");
        vis.svg.append("text")
            .text("Penalty Count")
            .attr("x", -(vis.height/2)-(vis.margin.top*4))
            .attr("y", -vis.margin.right*2.5)
            .attr("transform", "rotate(-90)")
            .attr("font-family", "sans-serif");

        // Axes
        vis.svg.select(".y-axis")
            .call(vis.yAxis)
        vis.svg.select(".x-axis")
            .call(vis.xAxis)
    }
}