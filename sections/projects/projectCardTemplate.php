<!-- Saving aid -->
<!-- Play on scroll - https://codepen.io/Maltsbier/pen/dyYmGGq -->
<div id=<?php echo ($projectID . "-card") ?> class="projectCard">

    <h2>
        <i class="fa-solid fa-globe"></i> &nbsp;<a href='<?php echo ($projectLink) ?>'><?php echo ($projectName) ?></a>
    </h2>
    <div class="contents">
        <div class='ulContainer'>
            <ul>

                <?php
                // $slideArray = json_decode(json_encode($slideObj));

                foreach ($toolsObj as $key => $val) {
                    $tool = json_decode(json_encode($toolsObj[$key]));
                    // echo ($slide->imgName2); 
                ?>
                    <li>
                        <?php echo ($tool->name) ?>
                        <span class='o'>
                            &nbsp;◆
                            <!-- ▶• -->
                        </span>
                        <hr>
                        </hr>
                    </li>

                <?php
                } ?>
            </ul>
        </div>
        <!-- Slider main container -->
        <div class="swiperImg swiper imgContainer ">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <?php
                // $slideArray = json_decode(json_encode($slideObj));

                foreach ($slideObj as $key => $val) {
                    $slide = json_decode(json_encode($slideObj[$key]));
                    // echo ($slide->imgName2); 
                ?>
                    <div class="swiper-slide imgContainerInner">
                        <?php if (property_exists($slide, 'vidName')) : ?>
                            <video muted autoplay controls>
                                <source src=<?php echo ("Images/screenshots/" . $slide->vidName) ?> type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        <?php else : ?>
                            <img src=<?php echo ("Images/screenshots/" . $slide->imgName) ?> loading="lazy" />
                        <?php endif ?>


                    </div>
                <?php
                    // echo (implode(" ", $slideObj[$key]));
                } ?>
            </div>

            <div class="swiperFooter">
                <div class="swiper-button-prev swiper-interface" id="backButton"></div>
                <div class="swiper-button-next swiper-interface" id="nextButton"></div>
                <div class="swiper-pagination swiper-interface"></div>
            </div>
        </div>
        <!-- Synced with the slides, but new div :) -->
        <div class="swiperText swiper textContainer ">
            <div class="swiper-wrapper textWrapper">

                <?php
                foreach ($slideObj as $key => $val) {
                    $slide = json_decode(json_encode($slideObj[$key]));
                ?>
                    <div class="swiper-slide textContainerInner">
                        <img class="textBgImg" src=<?php echo ("Images/screenshots/" . $slide->imgName) ?> loading=" lazy" />
                        <div class="pContainer">
                            <p class='pCard'><?php echo ($slide->text) ?></p>
                        </div>


                    </div>
                <?php
                } ?>
            </div>
        </div>
        <div class="cardFooter">
            <a href="link" class="sourceCode">
                <i class="fa-brands fa-github"></i> source code
            </a>
            <div class="learnmore">
                <i class="fa-solid fa-magnifying-glass"></i>
                Learn More
            </div>
        </div>


    </div>
</div>