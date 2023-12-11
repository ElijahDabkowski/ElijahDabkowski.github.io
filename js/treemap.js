function treemapchange() {
    treemap.wrangelData();
}

class Treemap {
    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data =  {"name":"PenaltyCount","children":
                [{"name":"2004 Season","children":
                        [{"name":"Less Than Two Penalties","children":
                                [{"name": "Wins","value": 18},{"name": "Losses","value":10}]},
                            {"name":"Between 3 and 4 Penalties","children":
                                    [{"name": "Wins","value": 59},{"name": "Losses","value":49}]},
                            {"name":"Between 3 and 4 Penalties","children":
                                    [{"name": "Wins","value": 79},{"name": "Losses","value":89}]},
                            {"name":"Between 7 and 8 Penalties","children":
                                    [{"name": "Wins","value": 94},{"name": "Losses","value":73}]},
                            {"name":"Between 9 and 10 Penalties","children":
                                    [{"name": "Wins","value": 57},{"name": "Losses","value":61}]},
                            {"name":"Between 11 and 12 Penalties","children":
                                    [{"name": "Wins","value": 19},{"name": "Losses","value":36}]},
                            {"name":"Between 13 and 14 Penalties","children":
                                    [{"name": "Wins","value": 3},{"name": "Losses","value":9}]},
                            {"name":"15 or More Penalties","children":
                                    [{"name": "Wins","value": 3},{"name": "Losses","value":4}]}]},
                    {"name":"2005 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 14},{"name": "Losses","value":7}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 67},{"name": "Losses","value":41}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 81},{"name": "Losses","value":64}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 76},{"name": "Losses","value":103}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 56},{"name": "Losses","value":60}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 23},{"name": "Losses","value":33}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 12},{"name": "Losses","value":14}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 3},{"name": "Losses","value":10}]}]},
                    {"name":"2006 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 36},{"name": "Losses","value":26}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 92},{"name": "Losses","value":72}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 86},{"name": "Losses","value":100}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 55},{"name": "Losses","value":80}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 47},{"name": "Losses","value":41}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 11},{"name": "Losses","value":11}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 1},{"name": "Losses","value":3}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 1},{"name": "Losses","value":1}]}]},
                    {"name":"2007 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 39},{"name": "Losses","value":21}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 103},{"name": "Losses","value":87}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 106},{"name": "Losses","value":95}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 47},{"name": "Losses","value":70}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 24},{"name": "Losses","value":38}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 8},{"name": "Losses","value":15}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 3},{"name": "Losses","value":3}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 0},{"name": "Losses","value":1}]}]},
                    {"name":"2008 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 20},{"name": "Losses","value":13}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 50},{"name": "Losses","value":32}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 49},{"name": "Losses","value":52}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 14},{"name": "Losses","value":31}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 26},{"name": "Losses","value":34}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 25},{"name": "Losses","value":28}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 1},{"name": "Losses","value":1}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 120},{"name": "Losses","value":150}]}]},
                    {"name":"2009 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 11},{"name": "Losses","value":6}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 45},{"name": "Losses","value":58}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 67},{"name": "Losses","value":58}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 23},{"name": "Losses","value":40}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 25},{"name": "Losses","value":33}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 24},{"name": "Losses","value":28}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 1},{"name": "Losses","value":1}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 119},{"name": "Losses","value":138}]}]},
                    {"name":"2010 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 1},{"name": "Losses","value":0}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 5},{"name": "Losses","value":5}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 20},{"name": "Losses","value":15}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 0},{"name": "Losses","value":1}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 30},{"name": "Losses","value":30}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 45},{"name": "Losses","value":42}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 0},{"name": "Losses","value":1}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 230},{"name": "Losses","value":238}]}]},
                    {"name":"2011 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 1},{"name": "Losses","value":0}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 3},{"name": "Losses","value":3}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 14},{"name": "Losses","value":16}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 0},{"name": "Losses","value":1}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 26},{"name": "Losses","value":27}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 40},{"name": "Losses","value":36}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 1},{"name": "Losses","value":0}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 246},{"name": "Losses","value":256}]}]},
                    {"name":"2012 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 1},{"name": "Losses","value":0}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 3},{"name": "Losses","value":3}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 14},{"name": "Losses","value":`8`}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 4},{"name": "Losses","value":2}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 24},{"name": "Losses","value":26}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 38},{"name": "Losses","value":35}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 6},{"name": "Losses","value":12}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 241},{"name": "Losses","value":247}]}]},
                    {"name":"2013 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 5},{"name": "Losses","value":1}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 2},{"name": "Losses","value":3}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 16},{"name": "Losses","value":17}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 6},{"name": "Losses","value":1}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 25},{"name": "Losses","value":26}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 39},{"name": "Losses","value":36}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 3},{"name": "Losses","value":8}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 246},{"name": "Losses","value":247}]}]},
                    {"name":"2014 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 3},{"name": "Losses","value":1}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 2},{"name": "Losses","value":3}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 9},{"name": "Losses","value":13}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 8},{"name": "Losses","value":4}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 20},{"name": "Losses","value":26}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 39},{"name": "Losses","value":33}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 3},{"name": "Losses","value":8}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 260},{"name": "Losses","value":257}]}]},
                    {"name":"2015 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 5},{"name": "Losses","value":2}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 17},{"name": "Losses","value":11}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 16},{"name": "Losses","value":19}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 22},{"name": "Losses","value":21}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 26},{"name": "Losses","value":19}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 30},{"name": "Losses","value":26}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 5},{"name": "Losses","value":4}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 228},{"name": "Losses","value":227}]}]},
                    {"name":"2016 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 2},{"name": "Losses","value":3}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 8},{"name": "Losses","value":12}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 18},{"name": "Losses","value":19}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 19},{"name": "Losses","value":18}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 28},{"name": "Losses","value":19}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 26},{"name": "Losses","value":24}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 5},{"name": "Losses","value":4}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 230},{"name": "Losses","value":227}]}]},
                    {"name":"2017 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 2},{"name": "Losses","value":6}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 20},{"name": "Losses","value":21}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 27},{"name": "Losses","value":29}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 31},{"name": "Losses","value":33}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 20},{"name": "Losses","value":15}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 23},{"name": "Losses","value":17}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 5},{"name": "Losses","value":2}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 202},{"name": "Losses","value":208}]}]},
                    {"name":"2018 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 2},{"name": "Losses","value":4}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 17},{"name": "Losses","value":15}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 31},{"name": "Losses","value":23}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 32},{"name": "Losses","value":36}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 25},{"name": "Losses","value":33}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 35},{"name": "Losses","value":30}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 20},{"name": "Losses","value":23}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 165},{"name": "Losses","value":157}]}]},
                    {"name":"2019 Season","children":
                            [{"name":"Less Than Two Penalties","children":
                                    [{"name": "Wins","value": 4},{"name": "Losses","value":3}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 14},{"name": "Losses","value":10}]},
                                {"name":"Between 3 and 4 Penalties","children":
                                        [{"name": "Wins","value": 35},{"name": "Losses","value":19}]},
                                {"name":"Between 7 and 8 Penalties","children":
                                        [{"name": "Wins","value": 34},{"name": "Losses","value":39}]},
                                {"name":"Between 9 and 10 Penalties","children":
                                        [{"name": "Wins","value": 32},{"name": "Losses","value":54}]},
                                {"name":"Between 11 and 12 Penalties","children":
                                        [{"name": "Wins","value": 48},{"name": "Losses","value":47}]},
                                {"name":"Between 13 and 14 Penalties","children":
                                        [{"name": "Wins","value": 40},{"name": "Losses","value":46}]},
                                {"name":"15 or More Penalties","children":
                                        [{"name": "Wins","value": 120},{"name": "Losses","value":112}]}]}]};
    }

    initVis() {
        let vis = this;
        vis.margin = {top: 40, right: 0, bottom: 0, left: 0}
        vis.width = 700;
        vis.height = 300 - vis.margin.top - vis.margin.bottom;

        function tile(node, x0, y0, x1, y1) {
            d3.treemapBinary(node, 0, 0, vis.width, vis.height);
            for (const child of node.children) {
                child.x0 = x0 + child.x0 / vis.width * (x1 - x0);
                child.x1 = x0 + child.x1 / vis.width * (x1 - x0);
                child.y0 = y0 + child.y0 / vis.height * (y1 - y0);
                child.y1 = y0 + child.y1 / vis.height * (y1 - y0);
            }
        }



        vis.svg = d3.select("#" + vis.parentElement).append("svg")
            .attr("width", vis.width)
            .attr("height", vis.height + 30)
            .attr("viewBox", [0.5, -30, vis.width, vis.height + 30])

        vis.hierarchy = d3.hierarchy(vis.data).sum(d => d.value)


        vis.root = d3.treemap().tile(tile)(vis.hierarchy)


        vis.x = d3.scaleLinear();
        vis.y = d3.scaleLinear();



        vis.cellsgroup = vis.svg.selectAll(".cell")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr("class", 'cell')

        vis.infobox = d3.select("#" + vis.parentElement).append("svg")
            .attr("width", 500)
            .attr("height", 260)

        vis.infobox.append("rect")
            .attr("x", 35)
            .attr("y", 5)
            .attr("width", 450)
            .attr("height", 250)
            .attr("fill", "white")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 3)

        vis.seasongroup = vis.infobox.selectAll(".season")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr('class', "season")

        vis.wingroup = vis.infobox.selectAll(".wins")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr('class', "winamount")

        vis.lossgroup = vis.infobox.selectAll(".loss")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr('class', "lossamount")

        vis.winpctgroug = vis.infobox.selectAll(".winpct")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr('class', "winpct")

        vis.pengroup = vis.infobox.selectAll(".pen")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr('class', "pen")

        vis.totalGroup = vis.infobox.selectAll(".total")
            .data(vis.root.children)
            .enter()
            .append("g")
            .attr('class', "total")

        this.wrangelData()
    }

    wrangelData() {
        let vis = this;

        vis.selectedSeason = Number(document.getElementById("season").value)
        vis.selectedPen = Number(document.getElementById("pencount").value)
        if (vis.selectedSeason === 16 && vis.selectedPen === 8) {vis.newnode = vis.root.children}
        else if (vis.selectedSeason === 16 && vis.selectedPen < 8) {vis.newnode = vis.root.children}
        else if (vis.selectedSeason < 16 && vis.selectedPen === 8) {vis.newnode = vis.root.children[vis.selectedSeason].children}
        else if (vis.selectedSeason < 16 && vis.selectedPen < 8) {vis.newnode = vis.root.children[vis.selectedSeason].children[vis.selectedPen].children}
        if (vis.selectedSeason === 16) {vis.displaySeason = "N/A"}
        else if (vis.selectedSeason < 16) { vis.displaySeason = vis.root.children[vis.selectedSeason].data.name}
        if (vis.selectedPen === 8) {vis.displayPen = "N/A"}
        else if (vis.selectedPen < 8) { vis.displayPen = vis.root.children[vis.selectedSeason].children[vis.selectedPen].data.name}
        if (vis.newnode.length === 2) {vis.displayWins = `${Math.round(vis.newnode[0].value)}`}
        else if (vis.newnode.length > 2) {vis.displayWins = "N/A"}
        if (vis.newnode.length === 2) {vis.displayTotal = `${Math.round(vis.newnode[0].value) + Math.round(vis.newnode[1].value)}`}
        else if (vis.newnode.length > 2) {vis.displayTotal = "N/A"}
        if (vis.newnode.length === 2) {vis.displayLoss = `${Math.round(vis.newnode[1].value)}`}
        else if (vis.newnode.length > 2) {vis.displayLoss = "N/A"}
        if (vis.newnode.length === 2) {vis.displayWpct = `${Math.round((vis.newnode[0].value / (vis.newnode[0].value + vis.newnode[1].value))*100)}` + "%"}
        else if (vis.newnode.length > 2) {vis.displayWpct = "N/A"}
        vis.updateVis()
    }

    updateVis() {

        let vis = this;
        vis.cells = vis.cellsgroup.selectAll(".cell").data(vis.newnode)
        vis.minx = vis.newnode[0].x0
        vis.miny = vis.newnode[0].y0
        vis.maxx = vis.newnode[0].x1
        vis.maxy = vis.newnode[0].y1

        vis.newnode.forEach(function(d) {
            if (d.x0 < vis.minx) { vis.minx = d.x0}
            else if (d.x1 > vis.maxx) { vis.maxx = d.x1}
        })


        vis.newnode.forEach(function(d) {
            if (d.y0 < vis.miny) { vis.miny = d.y0}
            else if (d.y1 > vis.maxy) { vis.maxy = d.y1}
        })



        console.log(vis.minx)
        console.log(vis.miny)
        console.log(vis.maxx)
        console.log(vis.maxy)

        vis.x.domain([vis.minx, vis.maxx]).range([0, vis.width])
        vis.y.domain([vis.miny, vis.maxy]).range([0, vis.height])
        vis.newnode.forEach(function(d) {
            console.log(d.x0)
            console.log(vis.x(d.x0))
            console.log(d.x1)
            console.log(vis.x(d.x1))
            console.log(d.y0)
            console.log(vis.y(d.y0))
            console.log(d.y1)
            console.log(vis.y(d.y1))
        })


        console.log(vis.x(vis.minx))
        console.log(vis.x(vis.maxx))
        console.log(vis.y(vis.miny))
        console.log(vis.y(vis.maxy))

        vis.cells = vis.cellsgroup.selectAll(".cell").data(vis.newnode)

        vis.cells.exit().remove();

        vis.cells.enter().append('rect')
            .attr("class", "cell")
            .merge(vis.cells)
            .transition()
            .duration('2000')
            .attr('x',d=>vis.x(d.x0))
            .attr("y", d=>vis.y(d.y0))
            .attr('width', d=>(vis.x(d.x1) - vis.x(d.x0)))
            .attr('height', d=>(vis.y(d.y1) - vis.y(d.y0)))
            .attr('stroke', 'white')
            .attr("fill", "steelblue")


        vis.seasoncell = vis.seasongroup.selectAll(".season").data(vis.newnode)

        vis.seasoncell.exit().remove();

        vis.seasoncell.enter().append("text")
            .attr('class', "season")
            .merge(vis.seasoncell)
            .text("Selected Season: " + vis.displaySeason)
            .attr("font-family", "sans-serif")
            .attr("x", 50)
            .attr("y", 30)

        vis.pencell = vis.pengroup.selectAll(".pen").data(vis.newnode)

        vis.pencell.exit().remove();

        vis.pencell.enter().append("text")
            .merge(vis.pencell)
            .text("Number of Penalties Selected: " + vis.displayPen)
            .attr("font-family", "sans-serif")
            .attr("x", 50)
            .attr("y", 70)
            .attr('class', "pen")

        vis.wincell = vis.wingroup.selectAll(".winamount").data(vis.newnode)

        vis.wincell.exit().remove();

        vis.wincell.enter().append("text")
            .merge(vis.wincell)
            .text("Number of Wins for Season/Penalty Pairing: " + vis.displayWins)
            .attr("font-family", "sans-serif")
            .attr("x", 50)
            .attr("y", 110)
            .attr('class', "winamount")

        vis.losscell = vis.lossgroup.selectAll(".lossamount").data(vis.newnode)

        vis.losscell.exit().remove();

        vis.losscell.enter().append("text")
            .merge(vis.losscell)
            .text("Number of Losses for Season/Penalty Pairing:  " + vis.displayLoss)
            .attr("font-family", "sans-serif")
            .attr("x", 50)
            .attr("y", 150)
            .attr('class', "lossamount")

        vis.totalcell = vis.totalGroup.selectAll(".lossamount").data(vis.newnode)

        vis.totalcell.exit().remove();

        vis.totalcell.enter().append("text")
            .merge(vis.totalcell)
            .text("Total Number of Games for Season/Penalty Pairing:  " + vis.displayTotal)
            .attr("font-family", "sans-serif")
            .attr("x", 50)
            .attr("y", 190)
            .attr('class', "lossamount")

        vis.winpctcell = vis.winpctgroug.selectAll(".winpct").data(vis.newnode)

        vis.winpctcell.exit().remove();

        vis.winpctcell.enter().append("text")
            .merge(vis.winpctcell)
            .text("Win Percentage for Season/Penalty Pairing:  " + vis.displayWpct)
            .attr("font-family", "sans-serif")
            .attr("x", 50)
            .attr("y", 230)
            .attr('class', "winpct")

        console.log(vis.wingroup)


    }
}