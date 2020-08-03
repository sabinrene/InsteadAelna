<!DOCTYPE html>
<html lang="en">

<head>
<title>Instead Preview</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="../../Public/JS/jquery-3.5.0.min.js"></script>
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Course/CourseTemplate.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Trainee/TraineeMenu.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Modals.css">

<link rel="stylesheet" type="text/css" href="../../Public/CSS/Footer.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Instead.css">
<link rel="stylesheet" href="../../Public/CSS/Header.css">

<!-- Font Awesome + Favicon -->
<script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
<link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">

</head>



<body>


  <div class="bg-modal" id="bg-modal"></div>
  <?php include ("../../Pages/Header.php"); ?>
	<?php include ("../../Pages/Trainee/TraineeMenu.php"); ?>
  <?php include ("../../Pages/Modals.php"); ?>
  <input class="hide" type="text" id="logIn2" value="../../">
  <input id="page" class="hide" type="text" name="" value="CourseTemplate">








<!-- CourseTemp-->


<!-- LEFT Section -->
<div class="CourseTemplate clearfix">
	<div class="CourseTemp-HeadBg">
		<div class="TemplateWrap">



			<div class="CourseTemp-Left">

					<div class="CourseHeader">
						<div class="CourseHeader-in">
							<h1 id="courseTitle">  </h1>
								<h2 id="courseSubtitle"> Course Subtitle: Expert in 360 Tour Creation </h2> <!-- Quick Description -->
								<p id="courseCreateBy">  </p> <!-- Created by -->
						</div>
					</div>

					<div class="LearnCard">
						<h2> What you'll Learn </h2>

							<div class="ToLearn clearfix">

								<ul>
									<div id="learn" class="">


								<!--		<li> <div class="ToLearn-Item">
											<i class="fas fa-check"></i> Revit redesign Inventor
										</div> </li>

										<li> <div class="ToLearn-Item">
											<i class="fas fa-check"></i> Solidworks and Finite Element Analysis
										</div> </li>

										<li> <div class="ToLearn-Item">
											<i class="fas fa-check"></i> Unity Renders better than MCNP and GeoMagic Rendering Tools
										</div> </li>

										<li> <div class="ToLearn-Item">
											<i class="fas fa-check"></i> Unreal Tournament
										</div> </li> -->

									</div>

								</ul>

							</div> <!-- END ToLearn -->
					</div> <!-- END LearnCard -->



					<div class="Reqs">
						<h2> Requirements </h2>
							<ul>
								<div id="requirement" class="">
								<!--	<li> No prior technical experience is required! All you need a computer! </li>
									<li> Can Create and Delete at will.. </li>
									<li> Coca Cola as Height are both adjustable things </li> -->
								</div>

							</ul>
					</div>

          <!--
          <div id="timeCourse" class="timeCourse">
            <h3>Schedule</h3>
             <div class="days">
               Monday      2pm   4pm
             </div>

             <div class="days">
               Wednesday   2pm   4pm
             </div>

             <div class="days">
               Friday      2pm   4pm
             </div>
          </div>
          -->

	<h2> Description </h2>
					<div id="description" class="Desc">
					<!--	<h2> Description </h2>
						<h3> Learn how to use SQL quickly and effectively with this course! </h3>
						<p> You'll learn how to read and write complex queries to a database using one of
							the most in demand skills - PostgreSQL. These skills are also applicable to any
							other major SQL database, such as MySQL, Microsoft SQL Server, Amazon Redshift,
							Oracle, and much more. </p>

						<p> Learning SQL is one of the fastest ways to improve your career prospects as it
							is one of the most in demand tech skills! In this course you'll learn quickly and
							receive challenges and tests along the way to improve your understanding!</p>
							<ul>
								<li> Get started with PostgreSQL and PgAdmin , two of the world's most popular SQL tools </li>
								<li> Running advanced queries with string operations and comparison operations </li>
								<li> No prior technical experience is required! All you need a computer! </li>
								<li> Can Create and Delete at will.. </li>
								<li> Coca Cola as Height are both adjustable things </li>
							</ul>

							<p> I've spent years as an instructor both online and in-person at Fortune 500 companies,
								and this course is built to combine the best of both worlds, allowing you to learn at your
								own pace through an interactive environment. You will start with the basics and soon find
								yourself working with advanced commands, dealing with timestamp data and variable character
								information like a seasoned professional. </p> -->
								<!-- Insert Paragraphs from Course Content -->

					</div>
					<!-- End Description -->




        <!-- Course Content -->
      	<h2> Course Content </h2>
				<div id="content" class="Content">

				</div>
				<!-- End Content -->




        	<!-- LIKED -->
					<div id="liked" class="Liked">

            <h2>Students also liked </h2>
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


			</div>
			<!-- End LEFT -->







	<!-- CourseTemp RIGHT -->
	<div class="CourseTemp-Right">
		<div class="CourseTemp-Right-Container">

			<div >
				<a href="#"><img id="image" class="Course-Pic" src="" alt=""></a>
			</div>



			<div id="price" class="Course-Price">
			</div>
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
						<li> On-demand Video Lectures </li>
						<li> Articles to Deepen Knowledge </li>
						<li> Mobile friendly Access </li>
					</ul>
			</div>

			<div class="ribbon-wrapper"><a id="openLiveOnlineCourse" >
				<div class="glow">&nbsp;</div>
				<div id="textOpenLiveOnlineCourse" class="ribbon-front">


				</div>
					<div class="ribbon-edge-topleft"></div>
					<div class="ribbon-edge-topright"></div>
					<div class="ribbon-edge-bottomleft"></div>
					<div class="ribbon-edge-bottomright"></div>
			</a></div>

		</div>








<!--
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

    </div>   -->
    <!-- END Row2 -->



	</div>
	<!-- End RIGHT -->





		</div>
		<!-- Wrap-->

	</div>
	<!-- End CourseTemp-HeadBg -->





</div>
<!-- End Course TEmplate -->


	<?php include '../Footer.php' ?>


<script src="../../Public/JS/Course/CourseTemplate.js"></script>
<script src="../../Public/JS/CRUD.js"></script>

</body>
</html>
