<div id="projects">
</div>
<div id="projectsContainer">
    <div class='transparentArrowContainer'>
        <div class='transparentArrow'>
        </div>
        <div class='arrowBackground'>
        </div>
    </div>

    <div class="sectionTitle projectsSectionTitle">
        Projects
    </div>

    <!-- <div class="sectionContainer">
        <a href="#tools" class="sectionTitle smallTitle">
            <span>
                (Or skip to overview of tools)
            </span>
        </a>
    </div> -->
</div>


<?php
$projectName = "Saving Aid ";
$projectID = "savingAidCard";
$projectLink = "https://www.besparingshulp.nl/";
$toolsObj = array(
    array(
        'name' => 'HTML/CSS',
    ),
    array(
        'name' => 'JavaScript',
    ),
    array(
        'name' => 'React',
    ),
    array(
        'name' => 'PHP/SQL',
    ),
    array(
        'name' => 'Framer Motion',
    ),

);
$slideObj = array(
    array(
        'vidName' => "saving_aid_1.mp4",
        'imgName' => "saving_aid.png",
        'text' => 'Energy saving recommender system, in which study participants could obtain personalized saving advice',
    ),
    array(
        'imgName' => "savingAid2.png",
        'text' => 'abcdefg',
    ),
    array(
        'imgName' => "savingAid3.png",
        'text' => 'abcdefg',
    )
);
include("projects/projectCardTemplate.php");



$projectName = "Recipe Website ";
$projectID = "recipeCard";
$projectLink = "https://www.aleidsuzan.com/recipes/";
$toolsObj = array(
    array(
        'name' => 'HTML/CSS',
    ),
    array(
        'name' => 'JavaScript',
    ),
    array(
        'name' => 'React',
    ),
);
$slideObj = array(
    array(
        'imgName' => "recipes.png",
        'text' => 'Recipe website, made to learn React',
    ),
    array(
        'imgName' => "recipes_2.png",
        'text' => 'abcdefg',
    ),
    array(
        'imgName' => "recipes_3.png",
        'text' => 'abcdefg',
    ),
    array(
        'imgName' => "recipes_4.png",
        'text' => 'abcdefg',
    )
);
include("projects/projectCardTemplate.php");


$projectName = "Drawing App";
$projectID = "drawingAppCard";
$projectLink = "https://www.aleidsuzan.com/canvas/";
$toolsObj = array(
    array(
        'name' => 'HTML/CSS',
    ),
    array(
        'name' => 'JavaScript',
    )
);
$slideObj = array(
    array(
        'imgName' => "canvas.png",
        'text' => 'Energy saving recommender system, in which study participants could obtain personalized saving advice',
    ),
    array(
        'imgName' => "canvas_3.png",
        'text' => 'abcdefg',
    ),
    array(
        'imgName' => "canvas_4.png",
        'text' => 'abcdefg',
    )
);
include("projects/projectCardTemplate.php");


include("projects/wipe.php");



$projectName = "Saving Aid ";
$projectID = "savingAid";
$videoName = "savingAidVideo";
$link = "https://www.besparingshulp.nl/";
$prev = "#projects";
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

// $projectName = "Art portfolio";
// $projectID = "artPortfolio";
// $videoName = "artPortfolioVideo";
// $link = "https://www.aleidsuzan.com/artportfolio";
// $prev = '#drawingApp';
// $next = "#edu";

// include("projects/projectTemplate.php");
include("projects/wipe.php");
?>