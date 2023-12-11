README.txt for CS171 Final Project
---------------------------------------------------------------------------------------
To operate web page, simply scroll through slide by slide, read the information, and
interact with the data visualizations.
--------------------------------------------------------------------------------------- 


---------------------------------------------------------------------------------------
LINK TO WEBSITE: 
---------------------------------------------------------------------------------------


VIDEO:
---------------------------------------------------------------------------------------
final_project_screencast.mp4
	Watch for demonstration of our data story
---------------------------------------------------------------------------------------


PROCESS BOOK:
---------------------------------------------------------------------------------------
process_book.pdf
	Process Book detailing our entire design sprint for this project
---------------------------------------------------------------------------------------


DATA:
---------------------------------------------------------------------------------------
/data

-slide1_data.csv
	Individual player stats used to generate the exploratory dashboard
	on slide 3

	nameFirst: first name of player
	nameLast: last name of player
	season: year of observation
	passLength: total passing yard by player in given season
	passOutcomes: total number of completions by player in given season
	passTd: total number of touchdowns thrown by player in given season
	passInt: total number of interceptions thrown by player in given season
	rushYards: total rushing yards by player in given season
	rushTd: total number of rushing touchdowns by player in given season
	rec: totol number of receptions by player in given season
	recYards: total receiving yards by player in given season
	recYac: total yards after catch by player in given season
	rec1down: total number of receptions for first downs by player in given season
	

-kicksackpenalty.csv
	League (and Conference) level data regarding penalties, sacks, and
	kick returns for visualizations on slide 6

	KickReturns: total number of kicks returned for touchdowns for given team in given season
	Sacks: total number of sacks for given team in given season
	Season: year corresponding to the observation
	Team: NFL team corresponding to the observation
	Conference: AFC or NFC
	Penalties: total number of penalties for given team in given season

-avgscoresdf
	Records average scores on a season-by-season level for home and 
	away teams

	Year: NFL season corresponding to the given observation
	HomeTeamAvgScore: average score per game for home teams in the given season
	VisitingTeamAvgScore: average score per game for visiting teams in the given season
	AvgScore: overall average score per game in the given season

-treemapdata.txt
	In addition to the larger NFL dataset, we created a seperate dataset that was utilized in order to build the treemap. The issue that we ran into 	when attempting to the create the treemap at the start was that our larger NFL dataset is a combination of different, smaller CSV files. However, 	throughout our research into looking at how to create a treemap, we recognized that we need to have a nested object dataset that consisted of a 	multitude of different objects that are stored within arrays of each other object. We worked with the smaller CSV files and performed filtering and 	grouping in order to reduce the plays, games, and penalties dataframes down into a single csv file which we were then able to transform into a 	javascript object that consists of a root node housing all of the data, 16 leaf nodes off of the root node relating to the 16 seasons that we were 	observing, 8 leaf nodes off of each individual season relating to different penalty counts, and then two leaf nodes off of each individual penalty 	node within a season node that house the information relating to the number of wins and losses of different data points. These "leaf nodes" consist 	of a multitude of other objects stored within an array that relate to the children of the parent node. We were then able to utilize d3's built in 	treemap functions in order to parse through the larger object consisting of the root and subsequential leaf nodes in order to obtain the parent and 	children subsections of each section of the treemap. This enabled us to populate the root node with its original children when you originally load 	the treemap page while also storing the children of each of the individual children of the root node behind the scenes. This was important as we 	were then able to enable buttons within the website that allowed the user to "change" the root node (all this means is that the root node would 	switch to one of the children of the original root node, and the children of this children would now become the new children set that are shown 	within the treemap) to provide the interactivity that we wanted to see within our final visualization.

---------------------------------------------------------------------------------------


CODE:
---------------------------------------------------------------------------------------
-index.html
	Main html document including layout of webpage and general structure.



/js

-main.js
	Primary javascript file controlling structure of all other .js scripts,
	Laid out in a slide-by-slide fashion for readability

-dashboard_main.js
	Javascript code for the cenral scatterplot on the Exploration Dashboard (slide 3)

-dashboard_hist.js
	Javascript code for the left distribution visualization on slide 3

-dashboard_top3.js
	Javascript code for the bottom lollipop chart on slide 3

-dashboard_donut.js
	Javascript code for the right donut chart on slide 3

-penalties.js
	Javascript code for the left line chart showing penalties over time (slide 5)

-sacks_kickreturns.js
	Javascript code for the right two line charts showing sacks and kick returns
	for touchdowns over time (slide 5)

-treemap.js
	Javascript code for the interactive treemap on slide 6

-fullview.js
	Javascript code taken from the 'fullview' package to enable the slideshow format

-jquery-3.5.1.min.js
	More code from package to enable formating



/img

-title_image.png
	Timeline image for the front title slide

-penalty_flag.png
	Referee image for slide 2

-authors.png
	Final image for authors' slide

-/img/vid
	Contains all video files for slide 4



/fonts
	Contains .eot, .svg, .ttf, and .woff files for formatting purposes.



/css

-style.css
	Primary styling script

-fullview.css
	Package css styles to enable slideshow formating
---------------------------------------------------------------------------------------




























