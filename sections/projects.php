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
        <span class="ml10 text-wrapper tlt">
            <span class="letters">Projects</span>
        </span>
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
$projectName = "Saving Aid";
$year = '2023';
$icon = 'seedling';
$projectID = "savingAid";
$showElement = "savingAid";
$projectLink = "https://www.besparingshulp.nl/";
$githubLink = null;
$toolsObj = array(
    array(
        'name' => 'HTML/CSS',
        'logo' => 'HTML5_logo_wikipedia.png',
    ),
    array(
        'name' => 'JavaScript',
        'logo' => 'JavaScript-Logo.png'
    ),
    array(
        'name' => 'React',
        'logo' => 'React-icon.png'
    ),
    array(
        'name' => 'PHP/SQL',
        'logo' => 'phpsql.png'
    ),
    array(
        'name' => 'Framer Motion',
        'logo' => 'framer-motion-logo.png'
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
        'text' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Accusantium voluptatem quas, eligendi repellendus quis harum maxime officia,
totam cum neque sed veniam consectetur. Modi totam quae a neque, libero rem.
',
    ),
    array(
        'imgName' => "savingAid3.png",
        'text' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Accusantium voluptatem quas, eligendi repellendus quis harum maxime officia,
totam cum neque sed veniam consectetur. Modi totam quae a neque, libero rem.',
    )
);
include("projects/projectCardTemplate.php");


$projectName = "Saving Aid ";
$projectID = "savingAid";
$videoName = "savingAidVideo";
$link = "https://www.besparingshulp.nl/";
$prev = "#projects";
$next = "#recipeApp";
include("projects/projectTemplate.php");
include("projects/wipe.php");



$projectName = "Recipes";
$projectID = "recipeCard";
$year = '2022';
$icon = 'utensils';
$projectLink = "https://www.aleidsuzan.com/recipes/";
$githubLink = 'https://github.com/AleidS/recipes_react_public';
$toolsObj = array(
    array(
        'name' => 'HTML/CSS',
        'logo' => 'HTML5_logo_wikipedia.png',
    ),
    array(
        'name' => 'JavaScript',
        'logo' => 'JavaScript-Logo.png'
    ),
    array(
        'name' => 'React',
        'logo' => 'React-icon.png'
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
$icon = 'pencil';
$projectLink = "https://www.aleidsuzan.com/canvas/";
$toolsObj = array(
    array(
        'name' => 'HTML/CSS',
        'logo' => 'HTML5_logo_wikipedia.png',
    ),
    array(
        'name' => 'HTML Canvas',
        'logo' => 'Html5_canvas_logo.png'
    ),
    array(
        'name' => 'JavaScript',
        'logo' => 'JavaScript-Logo.png'
    ),

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