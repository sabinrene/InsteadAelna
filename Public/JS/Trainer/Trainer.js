
document.getElementById('ShoppingCart').style.display = 'none';

/*---------------------------------- log in ----------------------------------*/
  $.ajax( "../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "verifySession"
    },
    success: function(data){
      var data = jQuery.parseJSON(data);
      if (data[2]==false||data[3]!="Trainer") {
        window.open('../../index.php',"_self");
      }
    }
  })

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
  document.getElementById("userName").innerHTML = data["firstName"];
  document.getElementById("userEmail").innerHTML = data["email"];
}

/*----------------------------- Query courses --------------------------------*/
$.ajax( "../../App/controller/read.php", {
  type: 'post',
  async: false,
  data: {
    type: "readCourses"
  },
  success: function(data){
    var idUser;
    $.ajax( "../../App/controller/read.php", {
      type: 'post',
      async: false,
      data: {
        type: "readidUser"
      },
      success: function(data){
        idUser = data;
      }
    })
    data = JSON.parse(data);
    updateCourses(data,idUser);
  }
})
/*----------------------------- Update courses -------------------------------*/

function updateCourses(data,idUser){
  for (var i = 0; i < data.length; i++) {
    if (data[i]["idUsers"]== idUser) {

      $('#coursePanel').append(
       '<div id="coursePanel" class="">'+

         '<div class="panel-body">'+

           '<div class="panel-img">'+
             '<img src="../../Public/images/02-Course/Img-Course/' +  data[i]["imageCourse"]+'" alt="">'+
           '</div>'+

           '<div class="courseNameList">'+
           '<strong>Course Name:</strong> ' + data[i]["courseTitle"]+
           '<input id="idCourse" class="nameIdCourse" type="text" name="" value="' +  data[i]["idCourse"]+'">'+
           '</div>'+

         '</div>'+

         '<a href="../../Pages/Courses/Courses.php">'+
           '<div id="selectCourse'   + i+     '" class="link-panel-body">'+
             'Edit Course'+
           '</div>'+
         '</a>'+



       '</div> <br>'+

       '<script type="text/javascript">'+
         'document.getElementById("selectCourse'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
       '</script>'

     );
   }

 }
}
/*----------------------------- set Id courses -------------------------------*/

function setIdCourse(idCourse){
  $.ajax( "../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "setIdCourse",
      idCourse: idCourse
    }
  })






}


/*function setCurriculumCourseLandingPage(){
  alert("Entramos aca");
}*/

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


/*------------------------- Select create course -----------------------------*/
var lookup = {
   'Option 1': ['AI', 'Block Chain', 'Big Data', 'Iot', 'Business Analytics','Machine Learning', 'Deep Learning'],
   'Option 2': ['Mechanical', 'Chemical','Civil & Structure','Electrical' ,'Instrumentation'],
   'Option 3': ['Piping Design','Process Design','Electrical Design','Instrumentation Design','Equipment Design','Civil Design','Structural Design', 'MEP Design']
};

$('#options').on('change', function() {
   var selectValue = $(this).val();
$('#choices :not(:first-child)').remove();
   for (i = 0; i < lookup[selectValue].length; i++) {
      $('#choices').append("<option value='" + lookup[selectValue][i] + "'>"
      + lookup[selectValue][i] + "</option>");
   }
});


/*----------------- Show and hide create course modal ------------------------*/
document.getElementById('modalCourse').style.visibility = 'hidden';;//hidden

document.getElementById('newCourse').onclick = function(e){
document.getElementById('modalCourse').style.visibility = 'visible';
}

document.getElementById('close-signup').onclick = function(e){
document.getElementById('modalCourse').style.visibility = 'hidden';
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
