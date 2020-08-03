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
// ACA VA LA VERIFICACION buyCourses[i]["USERCOURSE"] === BUYCOURSE, VA DENTRO DEL FOR.

var course = "";
for (var i = 0; i < buyCourses.length; i++) {


if (buyCourses[i]["userCourses"]=='buyCourse') {
var topic = "";

if (course["topic"]=="Option 1") {
  topic = "Technology"
}
if (course["topic"]=="Option 2") {
  topic = "Engineering"
}
if (course["topic"]=="Option 3") {
  topic = "3D Modeling"
}


  course = readCourseByIdCourse(buyCourses[i]["idCourse"]);
//  alert(course["imageCourse"]);
  $('#traineeCourses').append(//Public/images/02-Course/Img-Course/5ed2fc62908a79.45197522.jpg
    '<div id="selectMyCourses'   + i+     '" class="CardA">'+
        '<div class="CardA-PicFrame">'+
          '<img class="CardA-Pic" src="../../Public/images/02-Course/Img-Course/'   + course["idCourse"]+     '">'+
        '</div>'+
        '<div class="CardA-Cat">'+
            '<p> '+topic+' </p>'+
        '</div>'+
        '<div class="CardA-Bot">'+
          '<p> '   + course["courseTitle"]+     '</p>'+
          '<p class="CardRibbon"> '   + course["liveOnline"].charAt(0).toUpperCase() + course["liveOnline"].slice(1)+     ' Course</p>'+
        '</div>'+
    '</div>'+
    '<script type="text/javascript">'+
      'document.getElementById("selectMyCourses'   + i+     '").onclick = function(e){setIdCourse('   + course["idCourse"]+     ')}'+
    '</script>'
)
}

}
}



/*------------------------------- Read Course --------------------------------*/
  /*  $.ajax("../../App/controller/read.php", {
      type: 'post',
      async: false,
      data: {
        type: "readCourses"
      },
      success: function(data){
        //alert(data);
        data = JSON.parse(data);
        addCoursesForBuy(data);
      //  window.open("../../Pages/Trainer/Trainer.php","_self");
      }
    }
  ) */
/*



















  function addCoursesForBuy(data){
    for (var i = 0; i < data.length; i++) {
      if (data[i]["module"]== "Option 1") {
        addCourses(data, '#courseDesign',i);
      }
      if (data[i]["module"]== "Option 2") {
        addCourses(data, '#courseTechnology',i);
      }
      if (data[i]["module"]== "Option 3") {
        addCourses(data, '#courseEngineering',i);
      }
    }
  }
*/

/*  function addCoursesForBuy(data){
    for (var i = 0; i < data.length; i++) {
        addCourses(data, '#courseDesign',i);


    }
  }  */
  /*----------------------------- Update courses -------------------------------*/
/*
function addCourses(data,moduleCourses,i){
  $(moduleCourses).append(
    '<div id="selectCourse'   + i+     '">'+
      '<div class="Horizontal-inner">'+

          '<div id="InsTabs-Card" class="InsTabs-Card">'+
            '<img class="InsTab-CardA" src="../../Public/images/02-Course/Img-Course/'+data[i]["imageCourse"]+'" alt="">'+
            '<div class="InsTab-CardA-Titles">'+
              '<h4> '+data[i]["courseTitle"]+' </h4>'+
              '<h5> '+data[i]["courseSubtitle"]+' </h5>'+
            '</div>'+
            '<div class="InsTab-CardA-Price"> <h4>$'+data[i]["price"]+'</h4> </div>'+
          '</div>'+
      '</div>'+
    '</div>'+
    '<script type="text/javascript">'+
      'document.getElementById("selectCourse'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
    '</script>'
   );
}*/
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
  }
 )
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
      //updateCourse(data);
  //    updateUserTrainer(data["idUsers"]);
    }
  })
  return course;
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
})

function updateTrainer(data){
  document.getElementById("welcome").innerHTML ='Welcome back, ' + data["firstName"];

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
