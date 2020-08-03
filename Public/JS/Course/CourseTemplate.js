var verify = verifySession();
showHideMenu(verify)
/*---------------------------- Show and hide menus ---------------------------*/
function verifySession(){
  var data2 = "";
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "verifySession"
    },
    success: function(data){
       data2 = jQuery.parseJSON(data);
    }
  }
)
return data2;
}

function showHideMenu(data){
  if (data[2]==false||data[3]!="Trainee") {//
    document.getElementById('menuNoRegister').style.display = 'block';
    document.getElementById('menuTrainee').style.display = 'none';
  }
  else {
    document.getElementById('menuNoRegister').style.display = 'none';
    document.getElementById('menuTrainee').style.display = 'block';
    verifyPayment();
  }
}

















/*----------------- Show and hide modal login signup ------------------------*/


/*  Trainee sign up  */
    document.getElementById('btn-signup').onclick = function(e){
      document.getElementById("AdressAnduserType").value = "../../App/controller/create.php&Trainee";

    document.getElementById('modal-signup').style.display = 'block';
    document.getElementById('bg-modal').style.display = 'block';
  }
    document.getElementById('btn-login').onclick = function(e){
    document.getElementById('modal-login').style.display = 'block';
    document.getElementById('bg-modal').style.display = 'block';
  }
  /*  Trainee sign up  */
    document.getElementById('close-signup').onclick = function(e){
    document.getElementById('modal-signup').style.display = 'none';
    document.getElementById('bg-modal').style.display = 'none';
  }
    document.getElementById('close-login').onclick = function(e){
    document.getElementById('modal-login').style.display = 'none';
    document.getElementById('bg-modal').style.display = 'none';
  }

  document.getElementById('MyCourses').onclick = function(e){
   window.open("../../Pages/Trainee/Trainee.php","_self");
  }


document.getElementById('ShoppingCart').onclick = function(e){
 window.open("../../Pages/Cart/ShoppingCart.php","_self");
}

/*-------------------------------- upload imgs -----------------------------------*/

document.getElementById('indexAdress').href= "../../index.php";
document.getElementById("imgLogo").src="../../Public/images/logo.png";
document.getElementById("close-login").src="../../Public/images/close.png";
document.getElementById("close-signup").src="../../Public/images/close.png";
document.getElementById("trainerWebpage").href="../../Pages/Trainer/RegisterTrainer.php";





/*-------------------------------- Log out -----------------------------------*/
document.getElementById('logOut').onclick = function(e){
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "logOut"
    },
    success: function(data){
        window.open("../../index.php","_self");
   }
  }
 )
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
}
);


document.getElementById('user-div').addEventListener('mouseleave', e => {
  document.getElementById('user-div').style.visibility = 'hidden';
  document.getElementById('userName').style.visibility = 'hidden';
  document.getElementById('userEmail').style.visibility = 'hidden';
  document.getElementById('userImg').style.visibility = 'hidden';
}
);





























/*------------------------------ buy course  ----------------------------------*/

function verifyPayment(){
  $.ajax("../../App/controller/read.php",{
    type: 'post',
    async: false,
    data: {
      type: "verifyBuyCourse",
    },
    success: function(data){
       data = jQuery.parseJSON(data);
      if (data["userCourses"]=="buyCourse") {
        document.getElementById("addToCard").style.display = "none";
        document.getElementById("buyCourse").style.display = "none";
      //  window.open("../../Pages/Courses/CourseMain.php","_self");
    }
   }
  }
 )
}


/*------------------------------ buy course  ----------------------------------*/

document.getElementById('buyCourse').onclick = function(e){
  var verifyUser = verifySession();
  if (verifyUser[2]==true) {
  //  destroySessionShoppingCard();
  //  addToCard();
  //  seeShoppingCard();


    $.ajax("../../App/controller/Session.php", {
      type: 'post',
      async: false,
      data: {
        type: "setBuyCourseOrCourses",
        value: "BuyCourse"
      },
      success: function (data){
      }
    }
  )
    window.open("../../Pages/Cart/Checkout.php","_self");

}else {
  alert("Please login");
 }
}



document.getElementById('addToCard').onclick = function(e){
  var verifyUser = verifySession();
  if (verifyUser[2]==true) {
  if (addToCard()) {
    alert("Course has been added to cart");
  }
  else {
    alert("Course has already been added to cart");
  }
}  else {
    alert("Please login");
  }
}



function addToCard(){
  var addToCard = false;
  $.ajax("../../App/controller/create.php", {
    type: 'post',
    async: false,
    data: {
      type: "addToCard",
    },
    success: function(data){
        if (data==true) {
          addToCard = true;
        }
        else {
          addToCard = false;

        }
      }
    }
  )
return addToCard;
}








/*----------------------------- Read courses ---------------------------------*/
$.ajax("../../App/controller/read.php", {
  type: 'post',
  async: false,
  data: {
    type: "readCourses"
  },
  success: function(data) {
    console.log(data);
    data = JSON.parse(data);
    updateStudentsLike(data);
  }
 }
)

function updateStudentsLike(data){
  for (var i = 0; i < 4; i++) {
    $('#liked').append(
      '<div id="selectCourses'   + i+     '" class="Liked-Row">'+
      '<img class="Liked-Row-Pic" src="../../Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
      //  '<div class="Liked-Row-Pic">        </div>'+
        '<div class="Liked-Row-Title">   ' + data[i]["courseTitle"] + ': <br/>'+
          '<span class="Liked-Row-Subtitle">' + data[i]["courseSubtitle"] + '</span>'+
        '</div>'+
        '<div class="Liked-Row-Price"> $' + data[i]["price"] + '</div>'+
        '<div class="Liked-Row-Like"> <!-- <i class="far fa-heart"></i></div> -->'+
      '</div>'+
      '<script type="text/javascript">'+
        'document.getElementById("selectCourses'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
      '</script>'
    )
  }
}


/*----------------------------- set Id courses  -------------------------------*/

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
/*----------------------------- Section course ---------------------------------*/
$.ajax("../../App/controller/read.php", {
  type: 'post',
  async: false,
  data: {
    type: "readSectionsByCourseId"
  },
  success: function(data) {
    data = JSON.parse(data);
    updateSection(data);
  }
 }
)

function updateSection(data){
  for (var i = 0; i < data.length; i++) {
    $('#content').append(
      '<button id="sectionName' + data[i]["idSection"] + '" class="accordion">Sec 0'+(i+1) +' - ' + data[i]["nameSection"] +
      '<div class="numberLectures " id="numberLectures' + data[i]["idSection"] + '" >     </div>'+
      ' </button>'+
      '<div id = "panel' + data[i]["idSection"] + '" class="panel">'+ //3
      '</div>'+
      '<script type="text/javascript">' +

      //lectures
      'document.getElementById("sectionName' + data[i]["idSection"] + '").onclick =function(e){showHideLectures(' + data[i]["idSection"] + ');};' +
      '</script>'

     );
     updateLecture(data[i]["idSection"]);
  }
}

function showHideLectures(idSection){
  if (document.getElementById('panel'+idSection).style.display == 'block') {
    document.getElementById('panel'+idSection).style.display = "none";
  } else {
    document.getElementById('panel'+idSection).style.display = "block";
  }
}



function updateLecture(idSection) {
  var lecture = readLecture(idSection);
  $('#panel' + idSection).empty();
  var numberLecture = 0;
  for (var i = 0; i < lecture.length; i++) {
    numberLecture = numberLecture +1;
    $('#panel' + idSection).append(
      '<div class="panel-item"><b>Lecture No. '+(i+1)+ ':</b>&nbsp;' +
       lecture[i]["nameLecture"] +
        ' <span class="Time">     ' + Math.trunc(lecture[i]["duracion"]) + 'm ' +Math.trunc((lecture[i]["duracion"]- Math.trunc(lecture[i]["duracion"]) )*60)+ 's</span></div>'
    );
  }
  updateNumberLecture(idSection,numberLecture);
}

function updateNumberLecture(idSection,numberLecture){
  $('#numberLectures'+idSection).append(
    '<span  class="Acc-Right">' + numberLecture +' Lectures' +'</span>'
 );
}

function readLecture(idSection) {
  var lecture = "";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      idSection: idSection,
      type: "readLecturesBySectionId"
    },
    success: function(data) {
      lecture = JSON.parse(data);
   }
  }
 )
  return lecture;
}


  /*---------------------------- Query course --------------------------------*/
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourseById"
    },
    success: function(data){
      data = JSON.parse(data);
      updateCourseTemplate(data);
      updateUserTrainer(data["idUsers"]);
    }
  }
)
/*---------------------------- Query course --------------------------------*/
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readLearnRequirementByCourseId"
    },
    success: function(data){
      data = JSON.parse(data);
      updateLearn(data);
      updateRequirement(data);
    }
  }
)
  function updateLearn(data){
    for (var i = 0; i < data.length; i++) {
      if (data[i]["requirementOrLearn"] ==  "learn") {
        $('#learn' ).append(
          '<li> <div class="ToLearn-Item">'+
            '<i class="fas fa-check"></i> ' + data[i]["text"] + ''+
          '</div>'+
          '</li>'
        );
      }
    }
  }

  function updateRequirement(data){
    for (var i = 0; i < data.length; i++) {
      if (data[i]["requirementOrLearn"] ==  "requirement") {
        $('#requirement').append(
          '<li>  ' + data[i]["text"] + '</li><br>'
        );
      }
    }
  }

  function updateCourseTemplate(data){
    document.getElementById("courseTitle").innerHTML = data["courseTitle"] + ":";
    document.getElementById("description").innerHTML = data["courseDescription"] ;
  $('#price').append(
    ' <h1>  $' + data["price"] + ' </h1>'
  );

  if (data["liveOnline"]=="live") {
    $('#textOpenLiveOnlineCourse').append(
      'Live Course'
    );

        document.getElementById('timeCourse').style.display = 'block';
    //



  }
  else if (data["liveOnline"]=="online") {
    $('#textOpenLiveOnlineCourse').append(
      'Course'
    );
    document.getElementById('timeCourse').style.display = 'none';

  }




    document.getElementById("courseSubtitle").innerHTML =  data["courseSubtitle"];
    document.getElementById("image").src = "../../Public/images/02-Course/Img-Course/"+ data["imageCourse"];
  }

  function updateUserTrainer(idUser){
    $.ajax("../../App/controller/read.php",{
      type: 'post',
      async: false,
      data: {
        type: "readUserById",
        idUser: idUser
      },
      success: function(data){
        data = JSON.parse(data);
        var createBy = "Course Created by: " + data["firstName"] + " " + data["lastName"];
       document.getElementById("courseCreateBy").innerHTML = createBy;
     }
    }
   )
  };




//

document.getElementById('openLiveOnlineCourse').onclick = function(e){
  if (verifyBuyCourse()['userCourses']=='buyCourse') {
    if (readCourseByIdSession()["liveOnline"]=="live") {
      alert("Zoom's Password: 651338, Please copy the password");
      window.open("https://us02web.zoom.us/s/85002163246?pwd=K0N2R1hoR0hQTmUvQitjck90dmxCdz09");
    }
    else if (readCourseByIdSession()["liveOnline"]=="online") {
      window.open("../../Pages/Courses/CourseMain.php","_self");
    }
  }
  else {
    alert("Please buy the course first");
  }
}

function verifyBuyCourse () {
  var userCourse  = "";
  $.ajax("../../App/controller/read.php",{
    type: 'post',
    async: false,
    data: {
      type: "verifyBuyCourse",
    },
    success: function(data){
       userCourse = jQuery.parseJSON(data);
   }
 }
)
return userCourse;
}

function readCourseByIdSession () {
  var data2= "";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourseById"
    },
    success: function(data){
      data2 = JSON.parse(data);

   }
  }
 )
 return data2;
}




/**/
