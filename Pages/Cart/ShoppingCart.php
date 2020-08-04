
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

  <div class="stycky">

    <!-- TraineeMenu -->
    <div class="menu-trainee" id="menuTrainee">
      <div class="LogoT">
        <a id="openIndex" class="index" href="../../index.php">
          <img id="logo" src="../../Public/images/logo.png" alt="">
        </a>
      </div>




  <!--    <ul class="MenuList">
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
      </ul> -->

      <div id="user" class="user">
        <img id="iconCourse" src="../../Public/images/01-Trainer/iconCourse.png" alt="">
      </div>
      <div id="ShoppingCart"  class="ShoppingCart">
        <img id="ImgShoppingCart"  alt="" class="" src="../../Public/images/shoppingCart.png">
      </div>

      <div id="MyCourses" class="MyCourses">
        <h2>My Courses</h2>
      </div>


    </div>


    <!-- User-Div -->
    <div id="user-div" class="user-div">
      <a class="items" href="#">
        <img id="userImg" src="../../Public/images/01-Trainer/iconCourse.png" alt="">
        <div id="userName" class="text-items">Name</div>
        <div id="userEmail" class="text-items2">email</div>
      </a>

      <!-- LogOut -->
      <a id="logOut" class="items" >
        <div  class="text-items3">Log out</div>
      </a>

    </div>
    <!-- MenuT-->



    <!-- MenuT-->
  </div>






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














<footer class="footer-distributed">

  <div class="footer-left">

    <h3>Instead<span>Academy </span></h3>

    <p class="footer-links">
    <a href="../index.php">Home</a>
    <!-- PHASE 2
    ·
    <a href="#">Contact</a>

  -->
    · <a href="Pages/AboutUs.php">About Us</a>
    </p>

    <p class="footer-company-name">Instead &copy; 2020 <a href="index.php">.</a></p>
    </div>

    <div class="footer-center">

    <div>
    <i class="fa fa-map-marker"></i>
    <p>Bogotá<span>Colombia</span></p>
    </div>

    <div>
    <i class="fa fa-phone"></i>
    <p>+57 310 778 8028</p>
    </div>

    <div>
    <i class="fa fa-envelope"></i>
    <p><a href="mailto:Admin@insteadAcademy.com">Admin@insteadAcademy.com</a></p>
    </div>

    </div>

    <div class="footer-right">

    <p class="footer-company-about">
    <span>About the company</span>
    Instead Academy is an Online Portal for Engineers, Students, Designers,
    Developers &amp; Industry Leaders<a href="index2.php">.</a>
    </p>

    <div class="footer-icons">

    <a href="https://www.facebook.com/Instead-Academy-111041223985031"><i class="fa fa-facebook"></i></a>
    <a href="https://twitter.com/InsteadAcademy"><i class="fa fa-twitter"></i></a>
    <a href="https://www.linkedin.com/company/instead-academy/"><i class="fa fa-linkedin"></i></a>
    <a href="https://www.instagram.com/instead.academy/"><i class="fa fa-instagram"></i></a>

    </div>

  </div>

</footer>




<script src="../../Public/JS/Course/ShoppingCart.js"></script>


</body>
</html>
