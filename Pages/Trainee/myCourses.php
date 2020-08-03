<!DOCTYPE html>
<html lang="en">

<head>

<title>My Courses</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../../Public/JS/jquery-3.5.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Trainee/myCourses.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Header.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Footer.css">
<link rel="stylesheet" href="../../Public/CSS/Trainee/TraineeMenu.css">


<!-- Font Awesome + Favicon -->
<script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
<link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">

</head>

<body>


      <!-- TraineeMenu -->
      <div class="menu-trainee">

        <ul class="MenuList">
          <li>
              <div class="LogoT">
                <a href="../../index.php">
                  <img src="../../Public/images/logo.png" alt="">
                </a>
              </div>
          </li>
          <li> Categories
              <ul class="dropdown">
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Engineering</a></li>
                  <li><a href="#">Design</a></li>
            </ul>
          </li>
          <a href="myCourses.php"><li class="myCourses"> My Courses </li></a>
        </ul>

        <div id="user" class="user">
          <img src="../../Public/images/01-Trainer/iconCourse.png" alt="">
        </div>
      </div>

      <!-- User-Div -->
      <div id="user-div" class="user-div">
        <a class="items" href="#">
          <img id="userImg" src="../../Public/images/01-Trainer/iconCourse.png" alt="">
          <div id="userName" class="text-items"></div>
          <div id="userEmail" class="text-items2"></div>
        </a>

        <!-- LogOut -->
        <a id="logOut" class="items" href="">
          <div  class="text-items3">Log out</div>
        </a>

      </div>
      <!-- MenuT-->





<!-- CourseTemp-->
<div class="CTop">
    <div class="Top-Title"> My Courses </div>

    <div class="BotMenu">
        <ul>
            <li class="active"><a href="">All Courses</a></li>
            <li><a href="Wishlist.php">Wishlist</a></li>
        </ul>
    </div>
</div>


    <!-- Search Nav -->
    <div class="SearchNav">
      <div class="SearchBox">

      <form action="/action_page.php">
          <input type="text" placeholder="Search.." name="search">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>

      </div>
    </div>
    <!-- END Search Nav -->



<div class="Template-Body clearfix">


      <!-- CourseArea -->
      <div id="CourseArea" class="CourseArea">

        <!--
        <div id="InsTabs-Card" class="InsTabs-Card">
          <img class="InsTab-CardA" src="../../Public/images/Course/05-Operations.jpg">

                <div class="InsTab-CardA-Titles">
                  <h4> Title: This is the longest title you can ever think of </h4>
                  <h5> Subtitle: What if we do in this mad world what ppl say  </h5>
                  <h6> By: Teachers Name </h6>
                  <h4 class="PriceTag">$11.99</h4>
                </div>

        </div>





        <div id="InsTabs-Card" class="InsTabs-Card">
          <img class="InsTab-CardA" src="../../Public/images/Course/05-Operations.jpg">

                <div class="InsTab-CardA-Titles">
                  <h4> Title: This is the longest title you can ever think of </h4>
                  <h5> Subtitle: What if we do in this mad world what ppl say  </h5>
                  <h6> By: Teachers Name </h6>
                  <h4 class="PriceTag">$11.99</h4>
                </div>

        </div>





        <div id="InsTabs-Card" class="InsTabs-Card">
          <img class="InsTab-CardA" src="../../Public/images/Course/05-Operations.jpg">

                <div class="InsTab-CardA-Titles">
                  <h4> Title: This is the longest title you can ever think of </h4>
                  <h5> Subtitle: What if we do in this mad world what ppl say  </h5>
                  <h6> By: Teachers Name </h6>
                  <h4 class="PriceTag">$11.99</h4>
                </div>

        </div>





        <div id="InsTabs-Card" class="InsTabs-Card">
          <img class="InsTab-CardA" src="../../Public/images/Course/05-Operations.jpg">

                <div class="InsTab-CardA-Titles">
                  <h4> Title: This is the longest title you can ever think of </h4>
                  <h5> Subtitle: What if we do in this mad world what ppl say  </h5>
                  <h6> By: Teachers Name </h6>
                  <h4 class="PriceTag">$11.99</h4>
                </div>

        </div>





        <div id="InsTabs-Card" class="InsTabs-Card">
          <img class="InsTab-CardA" src="../../Public/images/Course/05-Operations.jpg">

                <div class="InsTab-CardA-Titles">
                  <h4> Title: This is the longest title you can ever think of </h4>
                  <h5> Subtitle: What if we do in this mad world what ppl say  </h5>
                  <h6> By: Teachers Name </h6>
                  <h4 class="PriceTag">$11.99</h4>
                </div>

        </div>




        <div id="InsTabs-Card" class="InsTabs-Card">
          <img class="InsTab-CardA" src="../../Public/images/Course/05-Operations.jpg">

                <div class="InsTab-CardA-Titles">
                  <h4> Title: This is the longest title you can ever think of </h4>
                  <h5> Subtitle: What if we do in this mad world what ppl say  </h5>
                  <h6> By: Teachers Name </h6>
                  <h4 class="PriceTag">$11.99</h4>
                </div>

        </div>
       END InstabCARD-->





      </div>
      <!-- END CourseArea -->
</div>

































<div class="Foot">
<div class="GraDiv"></div>

	<div class="Foot-Center">
		<p class="Foot-Left"> Copyright © 2020 Instead, Inc.  </p>
		<p class="Foot-Right"> Terms Privacy Policy  </p>
	</div>

</div>








<script src="../../Public/JS/Trainee/myCourses.js"></script>

</body>
</html>
