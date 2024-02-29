<div id="projects">
</div>
<div id="projectsContainer">
    <div class='transparentArrowContainer'>
        <div class='transparentArrow'>
        </div>
        <div class='arrowBackground'>
        </div>
    </div>

    <div class="sectionTitle animated ml10 projectsSectionTitle">
        <span class="letters">Projects</span>
    </div>

    <!-- <div class="sectionContainer">
        <a href="#tools" class="sectionTitle smallTitle">
            <span>
                (Or skip to overview of tools)
            </span>
        </a>
    </div> -->



    <?php
    $projectName = "Saving Aid";
    $year = '2023';
    $icon = 'seedling';
    $projectID = "savingAid";
    $showElement = "savingAid";
    $prev = '#welcome';
    $next = "#recipeApp-scroll";
    $projectLink = "https://www.besparingshulp.nl/";
    $thesis = "https://research.tue.nl/nl/studentTheses/sustainable-goals";
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
            'name' => 'FramerMotion',
            'logo' => 'framer-motion-logo.png'
        ),

    );

    $slideObj = array(
        array(
            'title' => 'Graduation project',
            'imgName' => "saving_aid_first.png",
            'text' => 'Energy saving recommender system, 
            in which study participants could obtain personalized saving advice.
            Master thesis graduation project, under supervision of Martijn Willemsen and Alain Starke.',
        ),
        array(
            'title' => 'SQL database',
            'imgName' => "savingAid2.png",
            'thumbnailFrame' => 20,
            'vidName' => "saving_aid_scroll.mp4",
            'text' => 'We had an SQL database with over 130 energy saving measures, of which participants got 20 personalized recommendations.',
        ),
        array(
            'title' => 'Rasch Scale',
            'imgName' => "currentActions.png",
            'thumbnailFrame' => 10,
            'vidName' => "saving_aid_current_actions.mp4",
            'text' => 'Recommendations were based on the number of items someone already performed, following the psychometric Rasch model.',
        ),
        array(
            'title' => 'User Experience',
            'imgName' => "saving_aid.png",
            'vidName' => "saving_aid_questionnaires.mp4",
            'thumbnailFrame' => 7,
            'text' => 'During the experiment, users got various questions about their personal values and user experiences. 
            User actions and answers to questions were saved using a simple CRUD API (php), connected to the database.',
        )
    );

    include("projects/projectCardTemplate.php");

    $projectName = "Recipes";
    $projectID = "recipeApp";
    $prev = '#savingAid-scroll';
    $next = "#drawingApp-scroll";
    $year = '2022';
    $icon = 'utensils';
    $projectLink = "https://www.aleidsuzan.com/recipes/";
    $githubLink = 'https://github.com/AleidS/recipes_react_public';
    $thesis = null;
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
            'text' => 'Recipes and ingredients displayed side by side',
        ),
        array(
            'imgName' => "recipes_3.png",
            'text' => 'Filter option for vegan recipes',
        ),
        array(
            'imgName' => "recipes_4.png",
            'text' => '<strong>Menu</strong> automatically generated based on recipe categories',
        )
    );
    include("projects/projectCardTemplate.php");


    $projectName = "Drawing App";
    $projectID = "drawingApp";
    $year = '2021';
    $prev = '#recipeApp-scroll';
    $next = "#artPortfolio-scroll";
    $icon = 'pencil';
    $projectLink = "https://www.aleidsuzan.com/canvas/";
    $githubLink = 'https://github.com/AleidS/drawingApp';
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
            'text' => 'Line drawing app made to learn Javascript',
        ),
        array(
            'imgName' => "canvas_3.png",
            'vidName' => 'drawingApp_effects.mp4',
            'thumbnailFrame' => 10,
            'text' => 'Users can choose various effects',
        ),
        array(
            'imgName' => "canvas_4.png",
            'vidName' => 'drawingAppOptions.mp4',
            'thumbnailFrame' => 2,
            'text' => 'They can also change brush properties and save the image',
        )
    );
    include("projects/projectCardTemplate.php");

    $projectName = "Art portfolio";
    $projectID = "artPortfolio";
    $year = '2022';
    $prev = '#drawingApp-scroll';
    $next = "#portfolioOld-scroll";
    $icon = 'pencil';
    $projectLink = "https://www.aleidsuzan.com/artportfolio/";
    $githubLink = 'https://github.com/AleidS/artPortfolio';
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
            'name' => 'FramerMotion',
            'logo' => 'framer-motion-logo.png'
        ),

    );
    $slideObj = array(
        array(
            'title' => 'Art portfolio',
            'imgName' => "art_portfolio_first2.png",
            'text' => 'Art portfolio made with React.js and the Framer Motion library.',
        ),
        array(
            'title' => 'Framer motion',
            'imgName' => "artPortfolio.png",
            'vidName' => "artportfolioNew.mp4",
            'thumbnailFrame' => 7,
            'text' => 'Framer Motion library.',
        ),
        array(
            'title' => 'Filtering',
            'imgName' => "artPortfolio.png",
            'vidName' => "artPortfolio_filter_new.mp4",
            'thumbnailFrame' => 3,
            'text' => 'Items can be filtered based on category, e.g. photos or pen&paper',
        ),
        array(
            'imgName' => "artPortfolio.png",
            'vidName' => "artPortfolio_zoom2.mp4",
            'thumbnailFrame' => 2.5,
            'text' => 'Full images are loaded upon thumbnail click',
        )
    );
    include("projects/projectCardTemplate.php");

    $projectName = "Web Portfolio";
    $year = '2023-2024';
    $projectID = "portfolioOld";
    $showElement = "portfolio3D";
    $prev = '#artPortfolio-scroll';
    $next = "#edu";
    $projectLink = "https://www.aleidsuzan.com/portfolioOld/";
    $githubLink = 'https://www.github.com/AleidS/webPortfolio';
    $toolsObj = array(
        array(
            'name' => 'CSS+SCSS',
            'logo' => 'Sass_logo.png',
        ),
        array(
            'name' => 'Bootstrap',
            'logo' => 'Bootstrap_logo.svg.png',
        ),
        array(
            'name' => 'JavaScript',
            'logo' => 'JavaScript-Logo.png'
        ),
        array(
            'name' => 'PHP',
            'logo' => 'PHP-logo.svg.png'
        ),
        array(
            'name' => 'Blender',
            'logo' => 'Blender_logo_no_text.svg.png'
        ),
        array(
            'name' => 'Anime.js',
            'logo' => 'anime2.png'
        ),

    );

    $slideObj = array(
        array(
            'title' => '3D portfolio',
            'imgName' => 'webPortfolio.png',
            'vidName' => "webPortfolio.mp4",
            'thumbnailFrame' => 3,
            'text' => 'First version of this portfolio with 3D animations. 
            You can activate these animations with the "show more" switches in the other projects, 
            or use the link below to view all projects in 3D.',
        ),
    );

    include("projects/projectCardTemplate.php");
    ?>

</div>