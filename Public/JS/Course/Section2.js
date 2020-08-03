
/*------------------------------- Read Course --------------------------------*/
function readCourses(){
  var data2 = "";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourses"
    },
    success: function(data){
      data2 = JSON.parse(data);
    //  updateCourses(data);
    }
  }
)
return data2;
}



/*------------------------------- Read Course --------------------------------*/
    $.ajax("../../App/controller/Session.php", {
      type: 'post',
      async: false,
      data: {
        type: "getliveOrOnline"
      },
      success: function(liveOrOnline){
      var data2 =  readCourses();
        if (liveOrOnline=="Live") {

          updateCourses(data2,liveOrOnline);
        }
        else if (liveOrOnline=="Online") {

          updateCourses(data2,liveOrOnline);
        }
      }
    }
  )



  /*------------------------------- Update Course --------------------------------*/


function updateCourses(data,liveOrOnline){
let letterCount = "";


$('#tittleOnlineOrLive').append(
  liveOrOnline+ " Courses "
)
  $('#SecWrap').append(
    ''
  )
  var date ="";
  for (var i = 0; i < data.length; i++) {
    if (liveOrOnline=="online") {
      date =data[i]["startTime"];
    }
    else {
      date = 'full time'
    }


    if (data[i]["liveOnline"]==liveOrOnline.toLowerCase()) {

      $('#SecWrap').append(
        ''
      )
    }
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
   }
  }
 )
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
    }
  }













/**/
