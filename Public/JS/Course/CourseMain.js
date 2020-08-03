

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

document.getElementById('ShoppingCart').onclick = function(e){
 window.open("../../Pages/Cart/ShoppingCart.php","_self");
}


































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
        window.open("../../Pages/Courses/CourseTemplate.php","_self");
      }
      else {
        verifyPayment();
      }
    }
  }
)
/*------------------------------ buy course  ----------------------------------*/

function verifyPayment(){
  $.ajax("../../App/controller/read.php",{
    type: 'post',
    async: false,
    data: {
      type: "verifyBuyCourse",
    },
    success: function(data){
      var data = jQuery.parseJSON(data);
      if (data["userCourses"]=="buyCourse") {
      }
      else {
        window.open("../../Pages/Courses/CourseTemplate.php","_self");
      }
    }
  }
 )
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
    updateCourse(data);
//    updateUserTrainer(data["idUsers"]);
  }
}
)
/*---------------------------- Update course --------------------------------*/
function updateCourse(data){
  document.getElementById("courseTitle").innerHTML = data["courseTitle"] + ":";
  document.getElementById("courseSubtitle").innerHTML =  data["courseSubtitle"] ;
  document.getElementById("courseDescription").innerHTML =  data["courseDescription"] ;
}

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
/*---------------------------- Update learn --------------------------------*/

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
/*---------------------------- Update requirement --------------------------------*/
function updateRequirement(data){
  for (var i = 0; i < data.length; i++) {
    if (data[i]["requirementOrLearn"] ==  "requirement") {
      $('#requirement').append(
        '<li>  ' + data[i]["text"] + '</li><br>'
      );
    }
  }
}

/*----------------------------- Read courses ---------------------------------*/
$.ajax("../../App/controller/read.php", {
  type: 'post',
  async: false,
  data: {
    type: "readCourses"
  },
  success: function(data) {
    data = JSON.parse(data);
    updateStudentsLike(data);
  }
})
/*----------------------------- Update other courses --------------------------*/

function updateStudentsLike(data){
  if ( data.length<5) {
    for (var i = 0; i < data.length; i++) {
      $('#liked').append(
        '<div class="Liked-Row">'+
        '<img class="Liked-Row-Pic" src="../../Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
        //  '<div class="Liked-Row-Pic">        </div>'+
          '<div class="Liked-Row-Title">   ' + data[i]["courseTitle"] + ': <br/>'+
            '<span class="Liked-Row-Subtitle">' + data[i]["courseSubtitle"] + '</span>'+
          '</div>'+
          '<div class="Liked-Row-Price"> $' + data[i]["price"] + '</div>'+
          '<div class="Liked-Row-Like">  <i class="far fa-heart"></i></div>'+
        '</div>'
      )
    }
  }
  else {
    for (var i = 0; i < 4; i++) {
      $('#liked').append(
        '<div class="Liked-Row">'+
        '<img class="Liked-Row-Pic" src="../../Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
        //  '<div class="Liked-Row-Pic">        </div>'+
          '<div class="Liked-Row-Title">   ' + data[i]["courseTitle"] + ': <br/>'+
            '<span class="Liked-Row-Subtitle">' + data[i]["courseSubtitle"] + '</span>'+
          '</div>'+
          '<div class="Liked-Row-Price"> $' + data[i]["price"] + '</div>'+
          '<div class="Liked-Row-Like">  <i class="far fa-heart"></i></div>'+
        '</div>'
      )
    }
  }
}
/*----------------------------- Read Sections  --------------------------*/
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

/*----------------------------- Read Sections  --------------------------*/
function updateSection(data){
  for (var i = 0; i < data.length; i++){
    $('#content').append(
      '<button class="accordion">'+(i+1) +' - ' + data[i]["nameSection"] +
      '<div class="numberLectures" id="numberLectures' + data[i]["idSection"] + '" >     </div>'+
      ' </button>'+
      '<div id = "panel' + data[i]["idSection"] + '" class="panel">'+ //3
      '</div>'
     );
     updateLecture(data[i]["idSection"]);
  }
}

/*----------------------------- Update Lecture  --------------------------*/
function updateLecture(idSection) {
  var lecture = readLecture(idSection);
  $('#panel' + idSection).empty();
  var numberLecture = 0;
  for (var i = 0; i < lecture.length; i++) {
    numberLecture = numberLecture +1;
    $('#panel' + idSection).append(
      '<div id = "panelItem' + lecture[i]["idLecture"] + '" class="panel-item"    ><b>Lecture No. '+(i+1)+ ':</b>&nbsp;' +
       lecture[i]["nameLecture"] +
        ' <span class="Time">' + Math.trunc(lecture[i]["duracion"]) + 'm ' +Math.trunc((lecture[i]["duracion"]- Math.trunc(lecture[i]["duracion"]) )*60)+ 's</span></div>'+


        '<script type="text/javascript">' +

        //lectures
        'document.getElementById("panelItem' + lecture[i]["idLecture"] + '").onclick =function(e){updateData(' + lecture[i]["idLecture"] + ');};' +
        '</script>'
    );
  }
  updateNumberLecture(idSection,numberLecture);
}

/*----------------------------- Update Data  --------------------------*/
function updateData(idLecture){
  var lecture = readLectureByIdLecture(idLecture)
  updataPDF(idLecture);
  watchVideo(lecture);
}
function readLectureByIdLecture(idLecture){
  var lecture = "";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      idLecture: idLecture,
      type: "readLectureByIdLecture"
    },
    success: function(data) {
      lecture = JSON.parse(data);
    }
  }
 )
 return lecture;
}


/*----------------------------- watch video  --------------------------*/
function watchVideo(lecture){
  document.getElementById("courseVideo").src = lecture["video"];
}

/*-------------------------- Update PDF by idLecture  ------------------------*/
function updataPDF(idLecture){
  var pdf =  readPDFByIdLecture(idLecture);
  $('#panelPDF').empty();
  $('#panelPDF').append(
    '<thead>'+
        '<tr>'+
            '<th>Class</th>'+
            '<th>Filename</th>'+
            '<th>Download</th>'+
        '</tr>'+
    '</thead>'
  )
  for (var i = 0; i < pdf.length; i++) {
    $('#panelPDF').append(
      '<tr>'+
          '<td> Lec '+idLecture+ ' </td>'+
          '<td>' + pdf[i]["namePDF"] + '</td>'+
          '<td>'+
              '<a href="' + pdf[i]["linkPDF"] + '">'+
              '<img src="../../Public/images/02-Course/PDF-icon.png" class="Mat-icon" alt="Course Material">'+
              '</a>'+
          '</td>'  +
      '</tr>'
  )
  }
}



readPDFByIdCourse();
/*-------------------------- Update PDF by idCourse --------------------------*/
function readPDFByIdCourse(){
  var pdf = "";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readPDFByIdCourse"
    },
    success: function(data) {
      pdf = JSON.parse(data);
    }
   }
  )
  updatePDFByIdCourse(pdf);
}


function updatePDFByIdCourse(pdf){
  $('#panelPDF').empty();
  $('#panelPDF').append(
    '<thead>'+
        '<tr>'+
            '<th>Class</th>'+
            '<th>Filename</th>'+
            '<th>Download</th>'+
        '</tr>'+
    '</thead>'
  )
  for (var i = 0; i < pdf.length; i++) {
    $('#panelPDF').append(
      '<tr>'+
          '<td> Lec ' + pdf[i]["idLecture"] + ' </td>'+
          '<td>' + pdf[i]["namePDF"] + '</td>'+
          '<td>'+
              '<a href="' + pdf[i]["linkPDF"] + '">'+
              '<img src="../../Public/images/02-Course/PDF-icon.png" class="Mat-icon" alt="Course Material">'+
              '</a>'+
          '</td>'  +
      '</tr>'
  )
 }
}

/*----------------------------- read pdf  --------------------------*/
function readPDFByIdLecture(idLecture){
  var pdf = "";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      idLecture: idLecture,
      type: "readPDFByLectureId"
    },
    success: function(data) {
      pdf = JSON.parse(data);
    }
  }
)
return pdf;
}

/*----------------------------- Read Lecture  --------------------------*/
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

/*-------------------------- Update NumberLecture  --------------------------*/
function updateNumberLecture(idSection,numberLecture){
  $('#numberLectures'+idSection).append(
    '<span  class="Acc-Right">' + numberLecture +' Lectures' +'</span>'
  );
}

















/**/
