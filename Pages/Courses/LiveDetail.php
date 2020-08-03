<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title> Live Preview </title>

    <script src="../../Public/JS/jquery-3.5.0.min.js"></script>
    <link rel="stylesheet" href="../../Public/CSS/Course/LiveDetail.css">
    <link rel="stylesheet" href="../../Public/CSS/Header.css">
    <link rel="stylesheet" href="../../Public/CSS/Footer.css">
    <link rel="stylesheet" href="../../Public/CSS/Instead.css">
    <link rel="stylesheet" type="text/css" href="../../Public/CSS/Trainee/TraineeMenu.css">
    <link rel="stylesheet" type="text/css" href="../../Public/CSS/Modals.css">


    <!-- Font Awesome + Favicon -->
    <script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
    <link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">
  </head>




<body>

<?php include ("../../Pages/Header.php"); ?>
<?php include ("../../Pages/Trainee/TraineeMenu.php"); ?>
<?php include ("../../Pages/Modals.php"); ?>
<input class="hide" type="text" id="logIn2" value="../../">
<input id="page" class="hide" type="text" name="" value="">

<!-- Banner -->
<div class="Banner">
    <div class="Banner-Txt"> <a href="../../index.php">Smart Plant 3D</a></div>
</div>
<!-- END Banner -->







<!-- Live-SecWrap -->
<div class="Live-SecWrap">

  <div class="Live-TwoCols clearfix">

      <!-- Left Section -->
        <div class="Live-SecL">
            <div class="CourseTitle"> <h2 id="courseTitle">  </h2> </div>

            <div id="description" class="Description">

              <div class="BoxBot-Desc clearfix">
                  <h2> SP3D - Piping Course </h2>

                  <p> Smart Plant 3D (SP3D) is a modeling software used in
                    the engineering sector for pipe designing. This SP3D
                    training builds the skills required for executing detailed
                    designing projects in power plants, petrochemical setups,
                    oil and gas industry, and food and beverage manufacturing
                    units etc. </p>

                <div class="DescLists">
                  <h3> Common Introduction: </h3>
                  <ul>
                    <li> SmartPlant 3D Introduction </li>
                    <li> Templates/Session Files </li>
                    <li> Filters (Database query) </li>
                    <li> Views </li>
                    <li> Common Toolbar </li>
                    <li> Selecting Objects </li>
                    <li> Space management </li>
                    <li> Interference Detection </li>
                  </ul>
                </div> <!-- Part ONE -->


                <div class="DescLists Up">
                  <h3> Piping: </h3>
                  <ul>
                    <li> Piping Hierarchy </li>
                    <li> Templates/Session Files </li>
                    <li> Filters (Database query) </li>
                    <li> Views </li>
                    <li> Common Toolbar </li>
                    <li> Selecting Objects </li>
                    <li> Space management </li>
                    <li> Interference Detection </li>
                  </ul>
                </div> <!-- Part TWO -->


                <div class="DescLists">

                  <h3> About this Course </h3>
                  <ul>
                    <li> Length: 8 Weeks </li>
                    <li> Effort: 3-4 hours/wk </li>
                    <li> Subject: Technology </li>
                  </ul>

                </div> <!-- Part THREE -->


              </div> <!-- END BoxBot Description -->

              <div class="Row2 clearfix">

                <div class="Schedule">

                  <h3> Course Schedule </h3>

                    <table>
                      <tr>
                        <th>  </th>
                        <th>  </th>
                        <th>  </th>
                      </tr>
                      <tr>
                        <th> Mo </th>
                        <td> 10am - 1pm </td>
                        <td>  </td>
                      </tr>

                      <tr>
                        <th> Tu </th>
                        <td class="OddRow"> 2pm - 4pm </td>
                        <td>  </td>
                      </tr>

                      <tr>
                        <th> Wd </th>
                        <td> 12pm - 3pm </td>
                        <td>  </td>
                      </tr>

                      <tr>
                        <th> Th </th>
                        <td class="OddRow"> 2pm - 4pm </td>
                        <td>  </td>
                      </tr>

                      <tr>
                        <th> F </th>
                        <td> 12pm - 3pm </td>
                        <td>  </td>
                      </tr>
                    </table>

                </div>

              </div> <!-- END Row2 -->

            </div>  <!-- END Description -->
        </div>
        <!-- END Live-SecL-->








        <!-- Live Section Right -->
        <div class="Live-SecR">

        		<div class="CourseTemp-Right-Container">

        			<div>
        				<a href="#"><img id="image" class="" src="" alt="">
                  <!-- Esto lo puse YO ahora -->
                  <img src="../../Public/images/Course-Sample-Pics/06-Autocad.jpg" class="Course-Pic">
                  <!-- ESTO arriba Aelna -->
                </a>
        			</div>

        			<div id="price" class="Course-Price"> <h1> $5000 </h1> </div>

        			<div class="Course-Btns">
        					<div id="addToCard" class="Btn02 colorBlack">
        					Add to Cart
        				  </div>
        				<div id="buyCourse" class="Btn02">
        					Buy Now
        				</div>
        			</div>

        			<div class="Course-includes">
        				<p>This course includes: </p>
        					<ul>
                    <li> Live Lectures  </li>
        						<li> Expert Training </li>
          					<li> Mobile friendly Access </li>
        					</ul>
        			</div>

        			<div class="ribbon-wrapper">
                <a href="CourseMain.php">
            				<div class="glow">&nbsp;</div>
              				<a href=" https://us02web.zoom.us/j/87931157219?pwd=THRoQnkxaVcrcmc3Q0F6K3VFQmNKZz09">
                        <div class="ribbon-front">
              					Live Course
              				</div>
                    </a>
          					<div class="ribbon-edge-topleft"></div>
          					<div class="ribbon-edge-topright"></div>
          					<div class="ribbon-edge-bottomleft"></div>
          					<div class="ribbon-edge-bottomright"></div>



        			   </a>
               </div>

        		</div> <!-- END CourseTemp Right Container -->

        </div> <!-- END Live Section Right -->

    </div>
    <!-- END Live Two Columns -->








<?php include '../../Pages/Footer.php' ?>
<script src="../../Public/JS/Course/LiveDetail.js"></script>
<script src="../../Public/JS/CRUD.js"></script>

</body>
</html>
