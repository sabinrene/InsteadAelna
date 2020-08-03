<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title> Instructor's Dashboard </title>

    <link rel="stylesheet" href="../../Public/CSS/Trainer/Trainer.css">
    <link rel="stylesheet" type="text/css" href="../../Public/CSS/Footer.css">
    <link rel="stylesheet" type="text/css" href="../../Public/CSS/Instead.css">
    <link rel="stylesheet" type="text/css" href="../../Public/CSS/Trainee/TraineeMenu.css">

    <!-- Font Awesome + Favicon -->
    <script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
    <link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">

    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap" rel="stylesheet">
    <script src="../../Public/JS/jquery-3.5.0.min.js"></script>
  </head>
  <body>

    <!--
    <div class="slide">
      <a class="links" href="#">
        <div class="text-links">Instead </div>
      </a>
      <a class="links" href="#">
        <img src="../../Public/images/01-Trainer/iconCourses.png" alt="">
        <div class="text-links">Courses</div>
      </a>

      <a class="links" href="#">
        <img src="../../Public/images/01-Trainer/iconTools.png" alt="">
        <div class="text-links">Settings</div>
      </a>


    </div>
  -->

<?php include ("../../Pages/Trainee/TraineeMenu.php"); ?>







  <!--  <h1>Courses</h1> -->

    <div class="Courses-search">
    <!--  <input class="icon-search"  type="text" placeholder="Search your courses" />
      <a class="btn-search" href="#"></a> -->
      <a id="newCourse" class="btn-new-course" href="#">New Course</a>
    </div>

    <div class="PanelArea">
      <div id="coursePanel" class="bgCourse">

      </div>
    </div>





<div id="modalCourse" class="modal">
  <div class="head-modal">
    <h4>Create Course</h4>
    <img  id="close-signup" src="../../Public/images/close.png" alt="">
  </div>
  <div class="body">
    <br><br>
      <input class="courseName" type="text" id="courseTitle" placeholder="Course Name" >
      <br>

      <select id="options" class="Options">
        <option value="" disabled selected>Select a Module</option>
        <option value="Option 1">Technology</option>
        <option value="Option 2">Engineering</option>
        <option value="Option 3">Design</option>
      </select>

      <select id="choices" class="Choices">
        <option value="" disabled selected>Please select a Topic</option>
      </select>

      <input class="CreateBtn" id="saveCourse" type="submit" value="Create" />
  </div>
</div>


















<?php include '../Footer.php' ?>


<script src="../../Public/JS/Trainer/Trainer.js"></script>
<script src="../../Public/JS/CRUD.js"></script>

  </body>
</html>
