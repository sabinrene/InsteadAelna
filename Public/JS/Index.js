
document.getElementById('MyCourses').onclick = function(e){
 window.open("Pages/Trainee/Trainee.php","_self");
}




document.getElementById('ShoppingCart').onclick = function(e){
 window.open("Pages/Cart/ShoppingCart.php","_self");
}






document.getElementById("logo").src="Public/images/logo.png";
document.getElementById("openIndex").href="index.php";


document.getElementById("iconCourse").src="Public/images/01-Trainer/iconCourse.png";
document.getElementById("ImgShoppingCart").src="Public/images/shoppingCart.png";
document.getElementById("userImg").src="Public/images/01-Trainer/iconCourse.png";



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










var verify = verifySession();
showHideMenu(verify)
/*---------------------------- Show and hide menus ---------------------------*/
function verifySession(){
  var data2 = "";
  $.ajax("App/controller/Session.php", {
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



/*------------------------------ Query user ----------------------------------*/
$.ajax("App/controller/read.php", {
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
  $.ajax("App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "logOut"
    },
    success: function(data){
        window.open("index.php","_self");
   }
  }
 )
}








/*-------------------------------- set session live---------------------------*/
document.getElementById('liveCoursesButton').onclick = function(e){
liveCoursesButton ();
}

document.getElementById('onlineCoursesButton').onclick = function(e){
  onlineCoursesButton ();
}
if (document.getElementById('liveCoursesButtonLight')) {
  document.getElementById('liveCoursesButtonLight').onclick = function(e){
  liveCoursesButton ();
  }
}

if (document.getElementById('onlineCoursesButtonLight')) {
  document.getElementById('onlineCoursesButtonLight').onclick = function(e){
    onlineCoursesButton ();
  }
}


function liveCoursesButton (){
  $.ajax("App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "setliveOrOnline",
      name:"Live"
    },
    success: function(data){
   }
  }
)
   window.open("Pages/Courses/Section.php","_self");
}

/*-------------------------------- set session online-----------------------------------*/

function onlineCoursesButton (){
  $.ajax("App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "setliveOrOnline",
      name:"Online"
    },
    success: function(data){
   }
  }
  )
   window.open("Pages/Courses/Section.php","_self");
}




/*------------------------------- Read Course --------------------------------*/
    $.ajax("App/controller/read.php", {
      type: 'post',
      async: false,
      data: {
        type: "readCourses"
      },
      success: function(data){
        data = JSON.parse(data);
        functionExample(data);
      //  window.open("../../Pages/Trainer/Trainer.php","_self");
      }
    }
  )



    function functionExample(data){
      for (var i = 0; i < data.length; i++) {
        if (data[i]["module"]== "Option 1") {
          $('#course-Tech').append(
            '<div id="selectCourse'   + i+     '" > '+
              '<div id="InsTabs-Card'   + i+     '" class="InsTabs-Card">'+
                '<img class="InsTab-CardA" src="Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
                '<div class="InsTab-CardA-Titles">'+
                  '<h4> '+ data[i]["courseTitle"] + ' </h4>'+
                  '<h5> '+ data[i]["courseSubtitle"] + '</h5>'+
                '</div>'+
                '<div class="InsTab-CardA-Price"> <h4  >$ '+ data[i]["price"] + '</h4> </div>'+
              '</div>'+
            '</div>'+
            '<script type="text/javascript">'+
              'document.getElementById("selectCourse'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
            '</script>'
           );
        }

        if (data[i]["module"]== "Option 2") {
           $('#course-Engr').append(
             '<div id="selectCourse'   + i+     '" > '+
               '<div id="InsTabs-Card'   + i+     '" class="InsTabs-Card">'+
                 '<img class="InsTab-CardA" src="Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
                 '<div class="InsTab-CardA-Titles">'+
                   '<h4> '+ data[i]["courseTitle"] + ' </h4>'+
                   '<h5> '+ data[i]["courseSubtitle"] + '</h5>'+
                 '</div>'+
                 '<div class="InsTab-CardA-Price"> <h4>$ '+ data[i]["price"] + '</h4> </div>'+
               '</div>'+
             '</div>'+
             '<script type="text/javascript">'+
               'document.getElementById("selectCourse'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
             '</script>'
           );
}

        if (data[i]["module"]== "Option 3") {
            $('#course-Design').append(
              '<div id="selectCourse'   + i+     '" > '+
                '<div id="InsTabs-Card'   + i+     '" class="InsTabs-Card">'+
                  '<img class="InsTab-CardA" src="Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
                  '<div class="InsTab-CardA-Titles">'+
                    '<h4> '+ data[i]["courseTitle"] + ' </h4>'+
                    '<h5> '+ data[i]["courseSubtitle"] + '</h5>'+
                  '</div>'+
                  '<div class="InsTab-CardA-Price"> <h4>$ '+ data[i]["price"] + '</h4> </div>'+
                '</div>'+
              '</div>'+
              '<script type="text/javascript">'+
                'document.getElementById("selectCourse'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
              '</script>'
            );
          }
          if (data[i]["liveOnline"]!=null) {
            $('#course-All').append(
              '<div id="selectCourses'   + i+     '" > '+
                '<div id="InsTabs-Card2'   + i+     '" class="InsTabs-Card">'+
                '<h3 class="cardsLiveOnline"> '+ data[i]["liveOnline"].toUpperCase() + ' COURSE</h3>'+

                  '<img class="InsTab-CardA" src="Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
                  '<div class="InsTab-CardA-Titles">'+
                  '<h4> '+ data[i]["courseTitle"] + ' </h4>'+

                    '<h5> '+ data[i]["courseSubtitle"] + '</h5>'+
                  '</div>'+
                  '<div class="InsTab-CardA-Price"> <h4>$ '+ data[i]["price"] + '</h4> </div>'+
                '</div>'+
              '</div>'+
              '<script type="text/javascript">'+
                'document.getElementById("selectCourses'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
              '</script>'
            );
          }





          if (data[i]["liveOnline"]!=null) {
            $('#course-All2').append(
              '<div id="selectCourses'   + i+     '" > '+
                '<div id="InsTabs-Card2'   + i+     '" class="InsTabs-Card">'+
                '<h3 class="cardsLiveOnline"> '+ data[i]["liveOnline"].toUpperCase() + ' COURSE</h3>'+

                  '<img class="InsTab-CardA" src="Public/images/02-Course/Img-Course/'+ data[i]["imageCourse"] + '" alt="">'+
                  '<div class="InsTab-CardA-Titles">'+
                  '<h4> '+ data[i]["courseTitle"] + ' </h4>'+

                    '<h5> '+ data[i]["courseSubtitle"] + '</h5>'+
                  '</div>'+
                  '<div class="InsTab-CardA-Price"> <h4>$ '+ data[i]["price"] + '</h4> </div>'+
                '</div>'+
              '</div>'+
              '<script type="text/javascript">'+
                'document.getElementById("selectCourses'   + i+     '").onclick = function(e){setIdCourse('   + data[i]["idCourse"]+     ')}'+
              '</script>'
            );
          }





      }
    }





    /*----------------------------- set Id courses -------------------------------*/

    function setIdCourse(idCourse){
      $.ajax("App/controller/Session.php",{
        type: 'post',
        async: false,
        data: {
          type: "setIdCourse",
          idCourse: idCourse
        },
        success: function(data){
            window.open("Pages/Courses/CourseTemplate.php","_self");
       }
      }
     )
    }

/*----------------------------- Banner -------------------------------*/
    document.getElementById('Banner').onmouseenter = function(e){
      document.getElementById('right').style.display = 'inline-block';
      document.getElementById('left').style.display = 'inline-block';
    }

    document.getElementById('Banner').onmouseleave = function(e){
      document.getElementById('right').style.display = 'none';
      document.getElementById('left').style.display = 'none';
    }






    document.getElementById('right').onclick = function(e){
      document.getElementById('BannerImg').classList.add("slideInLeft");
      if (document.getElementById('BannerImg').getAttribute('src') == 'Public/images/00-Home/Banners/Ban03-Bg2.png') {
        document.getElementById("BannerImg").src = 'Public/images/00-Home/Banners/Ban01-Bg.png';
      }
      else if (document.getElementById('BannerImg').getAttribute('src') == 'Public/images/00-Home/Banners/Ban01-Bg.png') {
        document.getElementById("BannerImg").src = 'Public/images/00-Home/Banners/Ban02-Bg.png';
      }
      else if (document.getElementById('BannerImg').getAttribute('src') == 'Public/images/00-Home/Banners/Ban02-Bg.png') {
        document.getElementById("BannerImg").src = 'Public/images/00-Home/Banners/Ban03-Bg2.png';
      }
      document.getElementById("BannerImg").addEventListener( "animationend",  function() {
        document.getElementById('BannerImg').classList.remove("slideInLeft");
   } );

}



    document.getElementById('left').onclick = function(e){
      document.getElementById('BannerImg').classList.add("slideInRight");


      if (document.getElementById('BannerImg').getAttribute('src') == 'Public/images/00-Home/Ban01.jpg') {
        document.getElementById("BannerImg").src = 'Public/images/00-Home/Ban03.jpg';
      }
      else if (document.getElementById('BannerImg').getAttribute('src') == 'Public/images/00-Home/Ban02.jpg') {
        document.getElementById("BannerImg").src = 'Public/images/00-Home/Ban01.jpg';
      }
      else if (document.getElementById('BannerImg').getAttribute('src') == 'Public/images/00-Home/Ban03.jpg') {
        document.getElementById("BannerImg").src = 'Public/images/00-Home/Ban02.jpg';
      }

      document.getElementById("BannerImg").addEventListener( "animationend",  function() {
        document.getElementById('BannerImg').classList.remove("slideInRight");
   }
  );

  }





/*  Trainee sign up  */
    document.getElementById('btn-signup').onclick = function(e){


    document.getElementById("AdressAnduserType").value = "App/controller/create.php&Trainee";
    document.getElementById('modal-signup').style.display = 'block';
    document.getElementById('bg-modal').style.display = 'block';


    document.getElementById('modal-login').style.display = 'none';
    document.getElementById('bg-modal').style.display = 'none';

  }
    document.getElementById('btn-login').onclick = function(e){
      document.getElementById('modal-signup').style.display = 'none';
      document.getElementById('bg-modal').style.display = 'none';


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
