<!DOCTYPE html>
<html lang="en">
    <!-- Hello there!
    Please refer to github:
    https://github.com/AleidS/webPortfolio
    for the php source code, 
    it's not all in one large file as it seems on the inspection pane :) -->

    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <!-- Fonts -->
        <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Itim&family=Julius+Sans+One&family=Karla:wght@100;300;400&family=Nothing+You+Could+Do&family=Overlock:ital@0;1&family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet">
        <link
            href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Itim&family=Julius+Sans+One&family=Karla:wght@200;300;400&family=Lato:wght@300&family=Nothing+You+Could+Do&family=Overlock:ital@0;1&family=Roboto+Mono:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet">
        <!--2.animate.css (MIT) -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.compat.css" rel="stylesheet" />


        <!-- Own stylesheets -->
        <link href="CSS/main.css" rel="stylesheet">
        <link href="CSS/menu.css" rel="stylesheet">
        <link href="CSS/dottedLine.css" rel="stylesheet">


        <link href="CSS/projects/video.css" rel="stylesheet">

        <link href="CSS/sections/sections.css" rel="stylesheet">
        <link href="CSS/sections/courses.css" rel="stylesheet">
        <link href="CSS/sections/sections.css" rel="stylesheet">
        <link href="CSS/sections/tools.css" rel="stylesheet">
        <link href="CSS/sections/welcome.css" rel="stylesheet">
        <link href="CSS/sections/workflow.css" rel="stylesheet">

        <link href="CSS/sections/contact.css" rel="stylesheet">

        <link href="CSS/projects/projects.css" rel="stylesheet">
        <link href="CSS/projects/projectCard.css" rel="stylesheet">


        <link href="CSS/projects/explanations.css" rel="stylesheet">
        <link href="CSS/projects/explanationsText.css" rel="stylesheet">
        <link href="CSS/projects/explanationsImg.css" rel="stylesheet">
        <link href="CSS/projects/explanationsLogo.css" rel="stylesheet">
        <link href="CSS/projects/explanationsIcon.css" rel="stylesheet">

        <link href="CSS/ios.css" rel="stylesheet">
        <link href="CSS/newTheme.css" rel="stylesheet">
        <!-- <link href="CSS/othercolors.css" rel="stylesheet"> -->
        <!-- Favicons (broser tab icon for example) -->
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link ref="icon" type="image/x-icon" href="./Images/favicons/AOfavicon.ico">
        <link rel=" icon" type="image/png" sizes="32x32" href="./Images/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./Images/favicons//favicon-16x16.png">
        <link rel="manifest" href="site.webmanifest" crossorigin="use-credentials">
        <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
        <title>Portfolio</title>
        <meta name="description" content="Website showcasing a 3D web design with HTML, CSS and Javascript" />
        <meta name="keywords"
            content="web design, portfolio, web development, web development, HTML, CSS, Javascript, Design" />
        <meta charset="UTF-8">
        <!-- Motion library -->
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />


    </head>

    <body>

        <?php
        include "sections/menu.html"
        ?>
        <div class="mainArea">

            <div id="home"></div>


            <?php
            include "sections/welcome.html";
            include "sections/dottedLine.html";
            include "sections/projects.php";
            include "sections/education.html";
            include "sections/tools.html";
            include "sections/contact.html";
            include "sections/workflow.html";
            include "sections/info.html";
            include "sections/coursesTaken.html";

            ?>
        </div>
        <?php
        include "sections/inlineScript.html";
        ?>

    </body>

</html>