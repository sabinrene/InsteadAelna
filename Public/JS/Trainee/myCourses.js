/*---------------------------- Show and hide menus ---------------------------*/
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "verifySession"
    },
    success: function(data){
      var data = jQuery.parseJSON(data);
      if (data[2]==false||data[3]!="Trainee") {
        window.open("../../index.php","_self");
      }
      else {
        UpdateCourses();
      }
    }
  }
)

/*------------------------------ buy course  ----------------------------------*/

function UpdateCourses(){
var buyCourses =  readBuyCoursesByIdUser();
var course = "";
for (var i = 0; i < buyCourses.length; i++) {
  course = readCourseByIdCourse(buyCourses[i]["idCourse"]);
//  alert(course["imageCourse"]);
  $('#CourseArea').append(//Public/images/02-Course/Img-Course/5ed2fc62908a79.45197522.jpg
    '<div id="selectMyCourses'   + i+     '" class="InsTabs-Card">'+
      '<img class="InsTab-CardA" src="../../Public/images/02-Course/Img-Course/'+course["imageCourse"]+'">'+

            '<div class="InsTab-CardA-Titles">'+
              '<h4> Title: '+course["courseTitle"]+' </h4>'+
              '<h5> Subtitle: '+course["courseSubtitle"]+' </h5>'+
            //  '<h6> By: Teachers Name </h6>'+
              '<h4 class="PriceTag">$'+course["price"]+'</h4>'+
            '</div>'+

    '</div>'+
    '<script type="text/javascript">'+
      'document.getElementById("selectMyCourses'   + i+     '").onclick = function(e){setIdCourse('   + course["idCourse"]+     ')}'+
    '</script>'



/*    '<div id="selectMyCourses'   + i+     '" class="TcCard">'+
        '<img src="../../Public/images/02-Course/Img-Course/'+course["imageCourse"]+'" alt="" class="Tc-img">'+
        '<div class="ProgressBar"> </div>'+
        '<div class="Tc-Title"> <div class="Tc-TitleTxt">   '+course["courseTitle"]+'  </div> </div>'+
    '</div>'+

    '<script type="text/javascript">'+
      'document.getElementById("selectMyCourses'   + i+     '").onclick = function(e){setIdCourse('   + course["idCourse"]+     ')}'+
    '</script>'   */
)
}
}
/*----------------------------- set Id courses -------------------------------*/

function setIdCourse(idCourse){
  $.ajax("../../App/controller/Session.php",{
    type: 'post',
    async: false,
    data: {
      type: "setIdCourse",
      idCourse: idCourse
    },
    success: function(data){
        window.open("../../Pages/Courses/CourseTemplate.php","_self");

    }
  })
}







function readBuyCoursesByIdUser(){
var buyCourses = "";
  $.ajax("../../App/controller/read.php",{
    type: 'post',
    async: false,
    data: {
      type: "readBuyCoursesByIdUser",
    },
    success: function(data){
      buyCourses = JSON.parse(data);

    }
  }
 )
 return buyCourses;
}


function readCourseByIdCourse(idCourse){
  var course ="";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourseByIdCourse",
      idCourse: idCourse
    },
    success: function(data){
      course = JSON.parse(data);

    }
  })
  return course;
}













/*------------------------------ Query user ----------------------------------*/
$.ajax("../../App/controller/read.php", {
  type: 'post',
  async: false,
  data: {
    type: "readTrainerById"
  },
  success: function(data){
    data = JSON.parse(data);
      updateTrainer(data);
  }
}
)

function updateTrainer(data){
  document.getElementById("userName").innerHTML = data["firstName"];
  document.getElementById("userEmail").innerHTML = data["email"];
}

/*-------------------------------- Log out -----------------------------------*/
document.getElementById('logOut').onclick = function(e){
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "logOut"
    },
    success: function(data){
      window.open('../../index.php',"_self");
    }
  })
}


/*----------------- Show and hide modal right up user ------------------------*/

document.getElementById('user-div').style.visibility = 'hidden';
document.getElementById('userName').style.visibility = 'hidden';
document.getElementById('userEmail').style.visibility = 'hidden';
document.getElementById('userImg').style.visibility = 'hidden';


document.getElementById('user').addEventListener('mouseover', e => {
  document.getElementById('user-div').style.visibility = 'visible';
  document.getElementById('userName').style.visibility = 'visible';
  document.getElementById('userEmail').style.visibility = 'visible';
  document.getElementById('userImg').style.visibility = 'visible';
});


document.getElementById('user-div').addEventListener('mouseleave', e => {
  document.getElementById('user-div').style.visibility = 'hidden';
  document.getElementById('userName').style.visibility = 'hidden';
  document.getElementById('userEmail').style.visibility = 'hidden';
  document.getElementById('userImg').style.visibility = 'hidden';
});
