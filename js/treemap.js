function treemapchange() {

    treemap.wrangelData();
}



class Treemap {
    constructor(parentElement, data) {
        this.parentElement = parentElement;
        this.data = data;
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
            .attr("width", 400)
            .attr("height", 250)
            .attr("fill", "white")
            .attr("stroke", "steelblue")

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

        vis.summary = d3.select("#" + vis.parentElement).append("svg")
            .attr("width", "100%")
            .attr("height", 240)

        vis.summary.append("rect")
            .attr("x", 125)
            .attr("y", 15)
            .attr("width", 1000)
            .attr("height", 165)
            .attr("fill", "white")
            .attr("stroke", "steelblue")

        vis.summary.append("text")
            .text("As we close out our project please take some time to play around with our final visualization! This is an interactive treemap that provides")
            .attr("x", "50%")
            .attr("y", 40)
            .attr("text-anchor", "middle")
            .attr("font-family", "arial")

        vis.summary.append("text")
            .text("the user with the chance to adjust the NFL Season from 2004-2019 along with the penalty counts of different teams for different games! ")
            .attr("x", "50%")
            .attr("y", 65)
            .attr("text-anchor", "middle")
            .attr("font-family", "arial")

        vis.summary.append("text")
            .text("As the user updates the treemap through the buttons provided at the top, the visualization cascades downward, originally showing all")
            .attr("x", "50%")
            .attr("y", 90)
            .attr("text-anchor", "middle")
            .attr("font-family", "arial")

        vis.summary.append("text")
            .text("the sixteen seasons available, followed by the eight different categories of penalty selection, and finally the number of wins/losses where .")
            .attr("x", "50%")
            .attr("y", 115)
            .attr("text-anchor", "middle")
            .attr("font-family", "arial")

        vis.summary.append("text")
            .text("The size of the boxes indicates the number of available subsections for that specific datapoint. An interesting statistic we observed was ")
            .attr("x", "50%")
            .attr("y", 140)
            .attr("text-anchor", "middle")
            .attr("font-family", "arial")

        vis.summary.append("text")
            .text("the difference in games with 15 or more penalties when looking at 2004 and 2019. Just take your time and have some fun, you've made it!.")
            .attr("x", "50%")
            .attr("y", 165)
            .attr("text-anchor", "middle")
            .attr("font-family", "arial")





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
            .attr("x", 50)
            .attr("y", 30)

        vis.pencell = vis.pengroup.selectAll(".pen").data(vis.newnode)

        vis.pencell.exit().remove();

        vis.pencell.enter().append("text")
            .merge(vis.pencell)
            .text("Number of Penalties Selected: " + vis.displayPen)
            .attr("x", 50)
            .attr("y", 70)
            .attr('class', "pen")

        vis.wincell = vis.wingroup.selectAll(".winamount").data(vis.newnode)

        vis.wincell.exit().remove();

        vis.wincell.enter().append("text")
            .merge(vis.wincell)
            .text("Number of Wins for Season/Penalty Pairing: " + vis.displayWins)
            .attr("x", 50)
            .attr("y", 110)
            .attr('class', "winamount")

        vis.losscell = vis.lossgroup.selectAll(".lossamount").data(vis.newnode)

        vis.losscell.exit().remove();

        vis.losscell.enter().append("text")
            .merge(vis.losscell)
            .text("Number of Losses for Season/Penalty Pairing:  " + vis.displayLoss)
            .attr("x", 50)
            .attr("y", 150)
            .attr('class', "lossamount")

        vis.totalcell = vis.totalGroup.selectAll(".lossamount").data(vis.newnode)

        vis.totalcell.exit().remove();

        vis.totalcell.enter().append("text")
            .merge(vis.totalcell)
            .text("Total Number of Games for Season/Penalty Pairing:  " + vis.displayTotal)
            .attr("x", 50)
            .attr("y", 190)
            .attr('class', "lossamount")

        vis.winpctcell = vis.winpctgroug.selectAll(".winpct").data(vis.newnode)

        vis.winpctcell.exit().remove();

        vis.winpctcell.enter().append("text")
            .merge(vis.winpctcell)
            .text("Win Percentage for Season/Penalty Pairing:  " + vis.displayWpct)
            .attr("x", 50)
            .attr("y", 230)
            .attr('class', "winpct")




        console.log(vis.wingroup)


    }
}




