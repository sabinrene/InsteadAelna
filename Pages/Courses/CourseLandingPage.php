<div id="courseLandingPage"  class="right-menu">

<div class="courseLandingPage">
  <div class="content">
    <div class="header">
      <div class="title">
          Course landing page
      </div>
    </div>
    <div class="body">

    <div class="select Center">

        <div class="divSelect">
          <label for="options">Select a Module</label>
          <select id="options">
          <option value="" disabled selected>Select a Module</option>
          <option value="Option 1">Technology</option>
          <option value="Option 2">Engineering</option>
          <option value="Option 3">Design</option>
          </select>
        </div>
        <div class="divSelect">
          <label for="choices">Select a Topic</label>
          <select id="choices">
          <option value="" disabled selected>Please select a Topic</option>
          </select>
        </div>

    </div>


      <br><br>
      <label for="courseTitle">Course Title</label>
      <input type="text" id="courseTitle" name="courseTitle" placeholder="Insert your Course's Title">
      <br><br>

      <label for="courseSubtitle">Course Subtitle</label>
      <input type="text" id="courseSubtitle" name="courseSubtitle" placeholder="Insert your Course's Subtitle">



<br><br><br>
<label for="courseTitle">What you'll Learn</label>

<div id="learnContainer">

</div>

<a class="addRequierements" id="addLearn"> + Objective </a>
<br><br>






<label for="courseTitle">Course Requirements</label>
<div id="requierementsContainer">
</div>
<a class="addRequierements" id="addRequierements"> + Requirement </a>
<br><br>
      <label for="">Type of course</label>


        <div class="liveOnlineContainer">
          <input class="liveOnlineRadio" type="radio" id="live" name="liveOnline" checked value="live">
          <label class="liveOnline" for="live">Live Training</label><br>
        </div>

        <div class="liveOnlineContainer">
          <input class="liveOnlineRadio" type="radio" id="online" name="liveOnline" value="online">
          <label class="liveOnline" for="online">Online Training</label><br>
        </div>


        <br><br>

<div id="divLinkZoom" class="divZoom">
  <label for="linkZoom">Link zoom</label>
  <input type="text" id="linkZoom" name="linkZoom" placeholder="Insert zoom link">
</div>
<br><br>





<div id="timeCourse" class="">
  <div  class="time">
    <label for="courseTimeStart">Start Course</label>
    <input id="timeCourseStart" class="timeCourse" type="date"  />
  </div>

  <div class="time">
    <label for="courseTimeStart">End Course</label>
    <input id="timeCourseFinish" class="timeCourse" type="date" />
  </div>
</div>






<br><br>

<div id="ScheduleDays" class="ScheduleDays">

  <div class="Schedule">

    <label for="1">
      <input type="checkbox" id="1" name="Monday" value="Monday">  Monday  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="start1" class="" type="time" />
      <input id="finish1" class="" type="time" />
    </label>
  </div>

  <div class="Schedule"><label for="2">
    <input type="checkbox" id="2" name="Tuesday" value="Tuesday">  Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input id="start2" class="" type="time" />
    <input id="finish2" class="" type="time" />
  </label>
  </div>

  <div class="Schedule"><label for="3">
    <input type="checkbox" id="3" name="Wednesday" value="Wednesday">  Wednesday
    <input id="start3" class="" type="time" />
    <input id="finish3" class="" type="time" />
  </label>
  </div>

  <div class="Schedule"><label for="4">
    <input type="checkbox" id="4" name="Thursday" value="Thursday">  Thursday &nbsp;&nbsp;&nbsp;
    <input id="start4" class="" type="time" />
    <input id="finish4" class="" type="time" />
  </label>
  </div>

  <div class="Schedule"><label for="5">
    <input type="checkbox" id="5" name="Friday" value="Friday">  Friday   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <input id="start5" class="" type="time" />
    <input id="finish5" class="" type="time" />
  </label>
  </div>

  <div class="Schedule"><label for="6">
    <input type="checkbox" id="6" name="Saturday" value="Saturday">  Saturday &nbsp;&nbsp;&nbsp;&nbsp;
    <input id="start6" class="" type="time" />
    <input id="finish6" class="" type="time" />
  </label>
  </div>

  <div class="Schedule">
    <label for="7">
      <input type="checkbox" id="7" name="Sunday" value="Sunday">  Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input id="start7" class="" type="time" />
      <input id="finish7" class="" type="time" />
    </label>
  </div>


</div>





<br><br>


<label for="courseDescription">Course Description</label>



        <?php //include ("Description.php"); ?>


<!--  <div id="openTextEditDescription" class="">
  </div>


  <div id="courseDescription" class="textarea">
  </div> -->



  <input class="textarea"  id="textAreaDescription" type="textarea" name="" value="" rows="10">



      <!-- Two Cols -->
      <div class="TwoCol clearfix">

          <div class="Col1">

            <label class="fileImage"for="fileImage">Course image</label>
            <br>
            <div class="imageContainer">
              <div class="image">
                <img class="imageCourse" id="image" for="fileImage" src='../../Public/images/02-Course/02-01-CourseLandingPage/image.png'>
              </div>
              <div class="uploadImage">
                <input type="file" class="fileImage" name="fileImage" id="file">
              </div>
            </div>

          </div>

          <div class="Col2">


                  <!-- Pricing Container -->
                  <div class="pricing-container">
                    <div class="header">
                      Course Price
                    </div>
                  <div class="itemsWrapper">
                    <ul class="items">
                      <li class='item'>Full Online Access</li>
                      <li class="item"><b>Fast</b> upload </li>
                      <li class="item"><b>Online</b> Lectures </li>
                      <li class="item"><b>MIN</b> 2 USD,   <b>MAX:</b>1200 </li>
                    </ul>
                  </div>
                    <input class="price pricetag" id="price" type="text"  placeholder="Price" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Price'">
                  </div>
                  <!-- END Pricing Container -->



          </div>


      </div>
      <!-- END Two Cols -->


      <a class="save" id="updateCourse" href="#">Save</a>

    </div>


  </div>



</div>
</div>
