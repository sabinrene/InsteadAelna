
/*---------------------------------- log in ----------------------------------*/
  $.ajax("../../App/controller/Session.php", {
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
      else {

        document.getElementById('courseLandingPage').style.display = data[0];
        document.getElementById('curriculum').style.display = data[1];
      }
    }
  }
)


  /*---------------------------- Query course --------------------------------*/
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourseById"
    },
    success: function(data){
      data = JSON.parse(data);

      updateCourseLandingPage(data);
    }
  })


document.getElementById('linkCourseLandingPage').onclick = function(e){
  setCurriculumCourseLandingPage('block', 'none');
document.getElementById('courseLandingPage').style.display = 'block';
document.getElementById('curriculum').style.display = 'none';
}
document.getElementById('linkCurriculum').onclick = function(e){
  setCurriculumCourseLandingPage('none', 'block');
document.getElementById('courseLandingPage').style.display = 'none';
document.getElementById('curriculum').style.display = 'block';
}



function setCurriculumCourseLandingPage( courseLandingPage,curriculum){
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "setCurriculumCourseLandingPage",
      courseLandingPage: courseLandingPage,
      curriculum: curriculum
    }
  })
}







/**/
