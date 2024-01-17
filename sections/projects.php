<div id="projects">
</div>
<div id="projectsContainer">
    <div class="sectionContainer">
        <div class="sectionTitle">
            Projects
        </div>
    </div>
    <div class="sectionContainer">
        <a href="#tools" class="sectionTitle smallTitle">
            <span>
                (Or skip to overview of tools)
            </span>
        </a>
    </div>
</div>


<?php
$projectName = "Saving Aid ";
$projectID = "savingAid";
$videoName = "savingAidVideo";
$link = "https://www.besparingshulp.nl/";
$next = "#recipeApp";
include("projects/projectTemplate.php");
include("projects/wipe.php");

$projectName = "Recipe app";
$projectID = "recipeApp";
$videoName = "recipeAppVideo";
$link = "https://www.aleidsuzan.com/recipes";
$prev = '#savingAid';
$next = "#drawingApp";
include("projects/projectTemplate.php");
include("projects/wipe.php");

$projectName = "Drawing App";
$projectID = "drawingApp";
$videoName = "drawingAppVideo";
$link = "https://www.aleidsuzan.com/canvas";
$prev = '#recipeApp';
$next = "#artPortfolio";
include("projects/projectTemplate.php");
include("projects/wipe.php");

$projectName = "Art portfolio";
$projectID = "artPortfolio";
$videoName = "artPortfolioVideo";
$link = "https://www.aleidsuzan.com/artPortfolio";
$prev = '#drawingApp';
$next = "#edu";

include("projects/projectTemplate.php");
include("projects/wipe.php");
?>