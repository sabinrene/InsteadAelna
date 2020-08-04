document.getElementById('MyCourses').onclick = function(e){
 window.open("../../Pages/Trainee/Trainee.php","_self");
}


document.getElementById('ShoppingCart').style.visibility = 'hidden';
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
/*-------------------- Remove course from shopping Cart -----------------------*/
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
document.getElementById('Checkout').onclick = function(e){

  //addToCard();
    $.ajax("../../App/controller/Session.php", {
      type: 'post',
      async: false,
      data: {
        type: "setBuyCourseOrCourses",
        value: "BuyCourses"
      },
      success: function (data){
      }
    }
  )
    window.open("../../Pages/Cart/Checkout.php","_self");


}



/*------------------------------ readTrainerById ----------------------------------*/
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

/*---------------------------------- verifySession ----------------------------------*/
  $.ajax( "../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "verifySession"
    },
    success: function(data){
      var data = jQuery.parseJSON(data);
      if (data[2]==false||data[3]!="Trainee") {
        window.open('../../index.php',"_self");
    }
   }
  }
 )



/*----------------------------- Read courses ---------------------------------*/
$.ajax("../../App/controller/read.php",{
  type: 'post',
  async: false,
  data: {
    type: "getCoursesByIdUser"
  },
  success: function(data) {
    data = jQuery.parseJSON(data);

    var totalPrice = 0;

  //  const idCourses = [];


    for (var i = 0; i < data.length; i++) {

if (data[i]['userCourses']!='buyCourse') {
  totalPrice = totalPrice +  parseFloat(   updateCardCourses(data[i]['idCourse'])   )   ;
}

  //  idCourses[i] = data[i]['idCourse'];

  //  alert(idCourses[i]);



   }


//sendIdCoursesToSession(idCourses);






   $('#totalPrice').empty();
   $('#totalPrice').append('$'+ totalPrice);
  }
 }
)




/*
function sendIdCoursesToSession(idCourses){


  dataString = idCourses ; // array?
var jsonString = JSON.stringify(dataString);


$.ajax("../../App/controller/Session.php",{
  type: 'post',
  async: false,
  data: {
    type: "setIdCourses",
    idCourses: jsonString
  },
  success: function(data){
    //  window.open("../../Pages/Courses/CourseTemplate.php","_self");
 }
}
)





}
*/









function isNumber(n){
    return Number(n)=== n;
}


/*----------------------------- update Card Courses ---------------------------------*/
function updateCardCourses(idCourse){
var course =readCourse(idCourse);

if (    isNumber( parseFloat(  course["price"]  )  )    ) {






  $('#CartL').append(
    '<div class="CartL-Box">'+
         '<div class="L-BoxIn">'+

           '<div class="CartL-BoxPic">'+
             '<img class="BoxPic" src="../../Public/images/02-Course/Img-Course/'+course["imageCourse"]+'" alt="">'+
           '</div>'+

           '<div class="CartL-Titles">'+
             '<h3> '+course["courseTitle"]  +' </h3>'+
             '<p> '+course["courseSubtitle"]  +' </p>'+
           '</div>'+

           '<div class="CartL-rem"> <a id="RemoveCourseFromShoppingCart'+course["idCourse"]  +'" href="#"> Remove </a> </div>'+
           '<div class="CartL-Price"> $'+course["price"]  +' </div>'+
         '</div>'+
     '</div>'+
     '<script type="text/javascript">'+
       'document.getElementById("RemoveCourseFromShoppingCart'+course["idCourse"]  +'").onclick = function(e){removeCourseFromShoppingCart('   + course["idCourse"]+     ')}'+
     '</script>'
 )

 return course["price"];





}
  else {
    return 0;
  }
}
/*----------------- remove Course From Shopping Cart ------------------------*/

function removeCourseFromShoppingCart(idCourse){
  $.ajax("../../App/controller/Delete.php", {
    type: 'post',
    async: false,
    data: {
      type: "removeUserCourse",
      idCourse:idCourse,
      userCourse: 'addToCard'
    },
    success: function(data){
      window.open('../../Pages/Cart/ShoppingCart.php',"_self");

   }
  }
 )
}


/*----------------- read Course By Id Course ------------------------*/
function readCourse(idCourse){
  var course ="";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourseByIdCourse",
      idCourse:idCourse
    },
    success: function(data){
      course = jQuery.parseJSON(data);

    }
  }
)
return course;
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














/**/
