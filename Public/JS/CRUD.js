$(document).ready(function(){

/*----------------------------------------------------------------------------*/
/*--------------------------------- USERS ------------------------------------*/
/*----------------------------------------------------------------------------*/

/*-------  ----------------------- Save users ----------------------------------*/
$("#save").click(function(){

  var address = $( "#AdressAnduserType" ).val().split("&")[0];
  var userType = $("#AdressAnduserType").val().split("&")[1];

    $.ajax(address,{
      type: 'post',
      async: false,
      data: {
        type: "saveUsers",
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        email: $("#email").val(),
        phoneNumber: $("#phoneNumber").val(),
        education: $("#education").val(),
        password: $("#password").val(),
        userType: userType
      },
      success: function(data){
        alert(data);
      }
    }
  )
    document.getElementById('modal-login').style.display = 'block';
    document.getElementById('modal-signup').style.display = 'none';
 }
);

/*------------------------------ Read users ----------------------------------*/
$("#read").click(function(){
   $.ajax($( "#logIn2").val() + "App/controller/read.php", {
     type: 'post',
     async: false,
     data: {
       type: "loginForm",
       email: $("#emailLogin").val(),
       password: $("#passwordLogin").val()
     },
     success: function(data){
       var obj = jQuery.parseJSON(data);

      if (obj[1] == "Trainer" ){
        var userWeb =$("#logIn2").val()+"Pages/"+obj[1]+"/"+ obj[1] + ".php";
        window.open(userWeb,"_self");
       }

       else if (obj[0]==1 && obj[1] != "null") {
         location.reload();
       }
       else {
         alert('There was a problem logging in. Check your email and password or create an account.');
       }
     }
   })
})
;


/*----------------------------------------------------------------------------*/
/*--------------------------------- COURSE ------------------------------------*/
/*----------------------------------------------------------------------------*/


/*------------------------------- Save Course --------------------------------*/
$("#saveCourse").click(function(){

var moduleOption = document.getElementById("options").options[document.getElementById("options").selectedIndex].value;
var topicOption = document.getElementById("choices").options[document.getElementById("choices").selectedIndex].value;

    $.ajax("../../App/controller/create.php", {
      type: 'post',
      async: false,
      data: {
        type2: "saveCourse",
        courseTitle: $("#courseTitle").val(),
        moduleOption: moduleOption,
        topicOption: topicOption,
        levelCourse: " "
      },
      success: function(data){
        alert(data);
        window.open("../../Pages/Trainer/Trainer.php","_self");
      }
    }
   )
 });


/*------------------------------- Update Course --------------------------------*/
$("#updateCourse").click(function(){//

  var day=[];
  var timeStart = [];
  var timeFinish = [];

  var indice = 0;
    for (var i = 1; i < 8; i++){
      if ($('#'+i).is(":checked")){
      //if ($('#start'+i).val()!=='' && ('#finish'+i).val()!=='') {//$('#start'+i).val()!=undefined && ('#finish'+i).val()!=undefined
      //  day[i] = {day:$('#'+i).val(),timeStart:$('#start'+i).val(),timeFinish:$('#finish'+i).val()  };
        day[indice] =  document.getElementById(i).value;//
        timeStart[indice] = document.getElementById("start"+i).value;
        timeFinish[indice] = document.getElementById("start"+i).value;
        //alert(timeFinish[indice]);
        indice = indice + 1;

      //}
    /*  else {
        alert("Please add all times in the schedule");
      }*/
     }
    }

     day = JSON.stringify(day);
     timeStart = JSON.stringify(timeStart);
     timeFinish = JSON.stringify(timeFinish);

//var description =document.getElementById('editor-richText-box').contentWindow.document.body.innerHTML;
  var description = document.getElementById("textAreaDescription").value
  var moduleOption = document.getElementById("options").options[document.getElementById("options").selectedIndex].value;
  var topicOption = document.getElementById("choices").options[document.getElementById("choices").selectedIndex].value;
  var data = new FormData();
  data.append('type', 'updateCourse');
  data.append('courseTitle', $("#courseTitle").val());
  data.append('courseSubtitle', $("#courseSubtitle").val());
  data.append('courseDescription', description);
  data.append('levelOption', "   ");
  data.append('moduleOption', moduleOption);
  data.append('linkZoom', $("#linkZoom").val());



    data.append('day', day);
    data.append('timeStart', timeStart);
    data.append('timeFinish', timeFinish);




  data.append('price', $("#price").val());
  data.append('topicOption', topicOption);
  data.append('courseTaught',"" );
  data.append('file', $('#file')[0].files[0]);
  data.append('timeCourseStart',document.getElementById("timeCourseStart").value);
  data.append('timeCourseFinish',document.getElementById("timeCourseFinish").value);
  data.append('liveOnline',document.querySelector('input[name="liveOnline"]:checked').value);


   $.ajax("../../App/controller/Update.php", {
     type: 'post',
     processData: false,
     contentType: false,
     async: false,
     data: data,
     success: function(data){
       alert(data);
       window.open("../../Pages/Courses/Courses.php","_self");
     }
   })

});

/*----------------------------------------------------------------------------*/
/*-------------------------------- SECTIONS ----------------------------------*/
/*----------------------------------------------------------------------------*/










  });
