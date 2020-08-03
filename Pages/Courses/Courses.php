<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Courses</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
    <link rel="stylesheet" href="../../Public/CSS/Course/Description.css">


    <link rel="stylesheet" href="../../Public/CSS/Course/Course.css">
    <link rel="stylesheet" href="../../Public/CSS/Course/CourseLandingPage.css">
    <link rel="stylesheet" href="../../Public/CSS/Course/Curriculum.css">
    <link rel="stylesheet" type="text/css" href="../../Public/CSS/Footer.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet">
    <script src="../../Public/JS/jquery-3.5.0.min.js"></script>


    <!-- Font Awesome + Favicon -->
    <script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
    <link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">


    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="http://cdn.jsdelivr.net/webshim/1.12.4/extras/modernizr-custom.js"></script>
    <script src="http://cdn.jsdelivr.net/webshim/1.12.4/polyfiller.js"></script>


  </head>
  <body>
    <!-- BodyCourse -->
    <div class="body-course">





      <div class="header-course">
          <a class="backCourse" href="../../Pages/Trainer/Trainer.php">
            <img src="../../Public/images/02-Course/backCourses.png" alt="">
            Back to Courses</a>
          <a class="preview" href="CourseTemplate.php">Preview</a>
        </div>





        <div class="left-menu">
          <br><br><br><br><br><br>
          <h4>Create your course</h4>
          <a id="linkCourseLandingPage"  href="#"><img src='../../Public/images/02-Course/uncheck.png'>Course landing page</a>
          <a id="linkCurriculum"  href="#"><img src='../../Public/images/02-Course/uncheck.png'>Curriculum</a>
        </div>



        <?php include ("CourseLandingPage.php"); ?>

        <?php include ("Curriculum.php"); ?>


        <?php // include '../Footer.php' ?>

    </div>





    <!-- END BodyCourse -->
  <!--  <script src="../../Public/JS/Course/Description.js"></script> -->
    <script src="../../Public/JS/Course/Curriculum.js"></script>
    <script src="../../Public/JS/Course/CourseLandingPage.js"></script>
    <script src="../../Public/JS/Course/Course.js"></script>
    <script src="../../Public/JS/CRUD.js"></script>
  </body>
</html>
