$(document).ready(function () {
    $("#fullview").fullView();
});

// TITLE SLIDE (1)//
///////////////////////////////////////////////////////
title_margin = {top: 40, right: 40, bottom: 40, left: 40};
title_width = (document.getElementById("title").getBoundingClientRect().width)/2 - title_margin.left - title_margin.right;
title_height = (document.getElementById("title").getBoundingClientRect().height)/2 - title_margin.top - title_margin.bottom;
title_slide = d3.select("#title").append("svg")
    .attr("class", "title-svg")
    .attr("width", document.getElementById("title").getBoundingClientRect().width + title_margin.left + title_margin.right)
    .attr("height", document.getElementById("title").getBoundingClientRect().height + title_margin.top + title_margin.bottom)
    .append('g')
    .attr('transform', `translate (${title_margin.left}, ${(title_margin.top)})`);

title_pic = title_slide.selectAll("image").data([0])
title_pic.enter()
    .append("svg:image")
    .attr("class", "title_image")
    .attr('x', (title_width/10))
    .attr('y', 0)
    .attr('width', title_width*2)
    .attr('height', title_height*2)
    .attr("xlink:href", "img/title_image.png")

// INTRO SLIDE (2)//
///////////////////////////////////////////////////////
// no javascript for this slide
///////////////////////////////////////////////////////


// DASHBOARD SLIDE (3) //
///////////////////////////////////////////////////////
let lookup = {
    'Quarterbacks': ['Pass Completions', 'Pass Touchdowns', 'Interceptions'],
    'Runningbacks': ['Rush Yards', 'Rushing Touchdowns'],
    'Wide Receivers': ['Receptions', 'Receiving Yards', 'Receiving Yards After Carry', '1st Down Receptions'],
};
$('#positions').on('change', function() {
    let selectValue = $(this).val();
    $('#stats').empty();
    for (i = 0; i < lookup[selectValue].length; i++) {
        $('#stats').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
    }
});

let main_dashboard_scatter_plot;
let main_dashboard_histogram;
let main_dashboard_top3;
let main_dashboard_donut;

loadMainDashboardData()

function loadMainDashboardData() {
    d3.csv("data/slide1_data.csv", d => {
        d.passInt = +d.passInt
        d.passLength = +d.passLength
        d.passOutcomes = +d.passOutcomes
        d.passTd = +d.passTd
        d.rec = +d.rec
        d.rec1down = +d.rec1down
        d.recYac = +d.recYac
        d.recYards = +d.recYards
        d.rushTd = +d.rushTd
        d.rushYards = +d.rushYards
        d.season = +d.season

        return d;
    }).then( main_data => {
        console.log(main_data)

        main_dashboard_scatter_plot = new main_scatter_plot('main-dashboard', main_data);
        main_dashboard_histogram = new histogram('main-dashboard', main_data);
        main_dashboard_top3 = new lollipop('main-dashboard', main_data);
        main_dashboard_donut = new donut('main-dashboard', main_data);
        //main_dashboard_timeline = new timeline('main-dashboard', main_data);
    });
}


// VIDEO SLIDE (4) //
///////////////////////////////////////////////////////
// no javascript for this slide
///////////////////////////////////////////////////////


// PENALTY VISUALS SLIDE (5) //
///////////////////////////////////////////////////////
let penalties;
loadPenalty()
function loadPenalty() {
    d3.csv("data/kicksackpenalty.csv", d => {
        d.Season = +d.Season
        d.Sacks = +d.Sacks
        d.KickReturns = +d.KickReturns
        d.Penalties = +d.Penalties
        return d;
    }).then( data => {
        console.log(data)

        penalties = new Penalties("penalty_visuals", data)

        penalties.initVis()
    });
}

let sacks;
let kick_return;
loadAdjust()
function loadAdjust() {
    d3.csv("data/kicksackpenalty.csv", d => {
        d.Season = +d.Season
        d.Sacks = +d.Sacks
        d.KickReturns = +d.KickReturns
        d.Penalties = +d.Penalties
        return d;
    }).then( data => {
        console.log(data)

        sacks = new Sacks("penalty_visuals", data)
        kick_return = new KickReturns("penalty_visuals", data)

        sacks.initVis()
        kick_return.initVis()
    });
}


// TREEMAP SLIDE (6)//
///////////////////////////////////////////////////////
let treemap;
tree_map()
function tree_map() {
    d3.csv("data/kicksackpenalty.csv", d => {
        d.Season = +d.Season
        d.Sacks = +d.Sacks
        d.KickReturns = +d.KickReturns
        d.Penalties = +d.Penalties
        return d;
    }).then( data => {
        treemap = new Treemap("treemap", data)
        treemap.initVis()
    });
}



// CONCLUSION SLIDE (7)
///////////////////////////////////////////////////////
// no javascript for this slide
///////////////////////////////////////////////////////


// AUTHOR SLIDE (8) //
///////////////////////////////////////////////////////
author_margin = {top: 40, right: 40, bottom: 40, left: 40};
author_width = (document.getElementById("authors").getBoundingClientRect().width)/2 - author_margin.left - author_margin.right;
author_height = (document.getElementById("authors").getBoundingClientRect().height)/2 - author_margin.top - author_margin.bottom;
author_slide = d3.select("#authors").append("svg")
    .attr("class", "author-svg")
    .attr("width", document.getElementById("authors").getBoundingClientRect().width + author_margin.left + author_margin.right)
    .attr("height", document.getElementById("authors").getBoundingClientRect().height + author_margin.top + author_margin.bottom)
    .append('g')
    .attr('transform', `translate (${author_margin.left}, ${(author_margin.top)})`);

author_pic = author_slide.selectAll("image").data([0])
author_pic.enter()
    .append("svg:image")
    .attr("class", "author-svg")
    .attr('x', (title_width/10))
    .attr('y', 0)
    .attr('width', title_width*2)
    .attr('height', title_height*2)
    .attr("xlink:href", "img/authors.png")


















