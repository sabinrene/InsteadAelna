<!DOCTYPE html>
<html lang="en">

<head>

<title> Shopping Cart </title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="../../Public/JS/jquery-3.5.0.min.js"></script>

<link rel="stylesheet" type="text/css" href="../../Public/CSS/Cart/ShoppingCart.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Footer.css">

<link rel="stylesheet" type="text/css" href="../../Public/CSS/Instead.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Trainee/TraineeMenu.css">




<!-- Font Awesome + Favicon -->
<script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
<link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">

<!-- Montserrat Font -->
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
</head>

<body>

  <?php include ("../../Pages/Trainee/TraineeMenu.php"); ?>






<!-- CourseTemp-->
<div class="CTop">
    <div class="Top-Title">
      <h1> Shopping Cart <h1>
    </div>
</div>

<div class="Cart-Wrap clearfix">

    <!-- CartL -->
    <div id="CartL" class="CartL">


      <!-- CartL-Box -->

        <!--  <div class="CartL-Box">
              <div class="L-BoxIn">

                <div class="CartL-BoxPic">
                  <img class="BoxPic" src="../../Public/images/00-Home/Refinery-S.jpg" alt="">
                </div>

                <div class="CartL-Titles">
                  <h3> Leadership: Practical Leadership Skills </h3>
                  <p> By Chris Croft, Management Trainer, Speaker, Author </p>
                </div>

                <div class="CartL-rem"> <a href="#"> Remove </a> </div>
                <div class="CartL-Price"> $11.99 </div>

              </div>
          </div>


           END CartL-Box -->


    <!-- END CartL -->





</div>


    <!-- CartR -->
    <div class="CartR">
      <div class="CartR-Box">
        <span>Total:</span>
        <h1 id="totalPrice"></h1>
        <a id="Checkout"  class="ChkOutBtn">Checkout</a>
      </div>
    </div>
    <!-- END CartR -->

</div>



<h2 class="studentsLiked">Students also liked </h2>

<!-- LIKED -->
<div id="liked" class="Liked">

<!--
  <div class="Liked-Row">
    <div class="Liked-Row-Pic"> <br/>W x H <br/> 150 x 80 px </div>

    <div class="Liked-Row-Title">        Google Analytics Certification: <br/>
      <span class="Liked-Row-Subtitle">Get Certified & Earn More</span>
    </div>

    <div class="Liked-Row-Price"> $18.99 </div>
    <div class="Liked-Row-Like">  <i class="far fa-heart"></i></div>
  </div>




<div class="Liked-Row">
    <div class="Liked-Row-Pic"> <br/>W x H <br/> 150 x 80 px </div>

    <div class="Liked-Row-Title">        Google Analytics Certification: <br/>
      <span class="Liked-Row-Subtitle">Get Certified & Earn More</span>
    </div>

    <div class="Liked-Row-Price"> $18.99 </div>
    <div class="Liked-Row-Like">  <i class="far fa-heart"></i></div>
  </div>




  <div class="Liked-Row">
    <div class="Liked-Row-Pic"> <br/>W x H <br/> 150 x 80 px </div>

    <div class="Liked-Row-Title">        Google Analytics Certification: <br/>
      <span class="Liked-Row-Subtitle">Get Certified & Earn More</span>
    </div>

    <div class="Liked-Row-Price"> $18.99 </div>
    <div class="Liked-Row-Like">  <i class="far fa-heart"></i></div>
  </div>




  <div class="Liked-Row">
    <div class="Liked-Row-Pic"> <br/>W x H <br/> 150 x 80 px </div>

    <div class="Liked-Row-Title">        Google Analytics Certification: <br/>
      <span class="Liked-Row-Subtitle">Get Certified & Earn More</span>
    </div>

    <div class="Liked-Row-Price"> $18.99 </div>
    <div class="Liked-Row-Like">  <i class="far fa-heart"></i></div>
  </div>  -->
</div>
<!-- End LIked -->














<?php include '../Footer.php' ?>




<script src="../../Public/JS/Course/ShoppingCart.js"></script>


</body>
</html>
