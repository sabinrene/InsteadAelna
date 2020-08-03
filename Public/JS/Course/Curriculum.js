/*----------------------------- Query course ---------------------------------*/
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
})


function updateSection(data) {
  for (var i = 0; i < data.length; i++) {

    $('#section-editSection').append(

      //container  section
      '<div id="ContainerSection' + data[i]["idSection"] + '" class="section">' +
      '<h2 id="sectionName' + data[i]["idSection"] + '"> Section:  ' + data[i]["nameSection"] + '   </h2>' +
      '<img id="iconEditSection' + data[i]["idSection"] + '" class="editSectionIcon img-2" src="../../Public/images/02-Course/Edit.png">' +
      '<img id="iconDeleteSection' + data[i]["idSection"] + '" class="" src="../../Public/images/02-Course/Delete.png">' +
      '<img id="addLecture' + data[i]["idSection"] + '" class="img-4" src="../../Public/images/02-Course/Plus.png">' +
      '</div>' +

      //container edit section
      '<div id="containerEditSection' + data[i]["idSection"] + '" class="editSection">' +
      '<label for="sectionName">Section name:</label>' +
      '<input id="inputSectionName' + data[i]["idSection"] + '" type="text" placeholder="type the name of the section">' +
      '<h4 id="closeEditSection' + data[i]["idSection"] + '" class="closeEditSection">X</h4>' +
      '<img id="updateSectionName' + data[i]["idSection"] + '"  class="iconUpdateSectionName" src="../../Public/images/02-Course/save.png" alt="">' +
      '</div>' +

      //container Lecture and edit lecture
      '<div id="containerLectureEditLecture' + data[i]["idSection"] + '" class="lectures-container">' +
      '</div>' +

      //scripts
      '<script type="text/javascript">' +
      //hide Edit section name
      'document.getElementById("containerEditSection' + data[i]["idSection"] + '").style.display = "none";' +

      //section
      'document.getElementById("iconDeleteSection' + data[i]["idSection"] + '").onclick =function(e){deleteSection(' + data[i]["idSection"] + ');};' +

      'document.getElementById("iconEditSection' + data[i]["idSection"] + '").onclick =function(e){iconEditSection("ContainerSection' + data[i]["idSection"] + '","containerEditSection' + data[i]["idSection"] + '")};' +
      'document.getElementById("closeEditSection' + data[i]["idSection"] + '").onclick =function(e){closeEditSection("containerEditSection' + data[i]["idSection"] + '")};' +
      'document.getElementById("updateSectionName' + data[i]["idSection"] + '").onclick =function(e){closeEditSection("containerEditSection' + data[i]["idSection"] + '")};' +
      'document.getElementById("sectionName' + data[i]["idSection"] + '").onclick =function(e){openLecture("containerLecture' + data[i]["idSection"] + '", "containerEditLecture' + data[i]["idSection"] + '")};' +
      'document.getElementById("inputSectionName' + data[i]["idSection"] + '").onkeyup =function(e){updateSectionName($("#inputSectionName' + data[i]["idSection"] + '").val() ,' + data[i]["idSection"] + ',"containerEditSection' + data[i]["idSection"] + '", "sectionName' + data[i]["idSection"] + '")};' +

      //lectures
      'document.getElementById("addLecture' + data[i]["idSection"] + '").onclick =function(e){addLecture(' + data[i]["idSection"] + ');};' +
      'document.getElementById("sectionName' + data[i]["idSection"] + '").onclick =function(e){showLecture(' + data[i]["idSection"] + ');};' +

      '</script>'
    );
    updateLecture(data[i]["idSection"]);
  }
}


/*------------------------------- Save Course --------------------------------*/
document.getElementById('addSection').onclick = function(e){
   $.ajax("../../App/controller/create.php", {
     type: 'post',
     async: false,
     data: {
       type2: "saveSection",
     },
     success: function(data){
       window.open("../../Pages/Courses/Courses.php","_self");

     }
   })
}










function deleteSection(idSection){
  var section = "";
  $.ajax("../../App/controller/Delete.php", {
    type: 'post',
    async: false,
    data: {
      idSection: idSection,
      type: "deleteSection"
    },
    success: function(data) {

    }
  })
  window.open('../../Pages/Courses/Courses.php',"_self");
}

/*------------------------------- Read Lecture -------------------------------*/
function updateLectureData(idLecture,insertNameLecture,insertiVideoLecture,
  durationLectureMin,durationLectureSec,dateLectureStart,timeLectureStart,
  dateLectureFinish,timeLectureFinish) {
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      type: "updateLecture",
      idLecture: idLecture,
      insertNameLecture:insertNameLecture,
      insertiVideoLecture:insertiVideoLecture,
      durationLectureMin:durationLectureMin,
      durationLectureSec:durationLectureSec,
      startTime: dateLectureStart+' '+timeLectureStart+':00',
      endTime:  dateLectureFinish+' '+timeLectureFinish+':00'
    },
    success: function(data) {
      alert("Lecture has been saved");
    }
  })


  window.open('../../Pages/Courses/Courses.php',"_self");

}
/*------------------------------- Read Lecture -------------------------------*/
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
  })
  return lecture;
}
/*------------------------------ Show hide Lecture ---------------------------*/
function showLecture(idSection) {
  var lecture = readLecture(idSection);
  for (var i = 0; i < lecture.length; i++) {

    $('#containerLectureEditLecture' + idSection).append(
      '<script type="text/javascript">' +
      'if (document.getElementById("containerLecture' + lecture[i]["idLecture"] + '").style.display == "block") {' +

      'document.getElementById("containerLectureEditLecture' + idSection + '").style.display = "none";' +
      'document.getElementById("containerLecture' + lecture[i]["idLecture"] + '").style.display = "none";' +
      '} else {' +
      'document.getElementById("containerLectureEditLecture' + idSection + '").style.display = "block";' +
      'document.getElementById("containerLecture' + lecture[i]["idLecture"] + '").style.display = "block";' +

      '}' +
      '</script>'
    );
  }
}
/*------------------------------ Show hide Lecture ---------------------------*/
function showHideEditLecture(idLecture) {
  if (document.getElementById("containerEditLecture" + idLecture).style.display == "block") {
    document.getElementById("containerEditLecture" + idLecture).style.display = "none";

  } else {
    document.getElementById("containerEditLecture" + idLecture).style.display = "block";
  }
}
/*------------------------------ Show  Lecture ---------------------------*/
function showEditLecture(idLecture) {
    document.getElementById("containerEditLecture" + idLecture).style.display = "block";
}
/*------------------------------ Hide  Lecture ---------------------------*/
function hideEditLecture(idLecture) {
    document.getElementById("containerEditLecture" + idLecture).style.display = "none";
}

/*------------------------------- Save Lecture --------------------------------*/
function addLecture(idSection) {

  $.ajax("../../App/controller/create.php", {
    type: 'post',
    async: false,
    data: {
      idSection: idSection,
      type: "saveLectures"
    },
    success: function(data) {
    }
  })
  updateLecture(idSection);
  showLecture2(idSection);
}

function showLecture2(idSection) {
  var lecture = readLecture(idSection);
  for (var i = 0; i < lecture.length; i++) {

    $('#containerLectureEditLecture' + idSection).append(
      '<script type="text/javascript">' +

      'document.getElementById("containerLectureEditLecture' + idSection + '").style.display = "block";' +
      'document.getElementById("containerLecture' + lecture[i]["idLecture"] + '").style.display = "block";' +
      '</script>'
    );
  }
}


function updateLecture(idSection) {
  var lecture = readLecture(idSection);
  $('#containerLectureEditLecture' + idSection).empty();
  for (var i = 0; i < lecture.length; i++) {
    $('#containerLectureEditLecture' + idSection).append(
        '<div id="containerLecture' + lecture[i]["idLecture"] + '" class="lecture">' +
        '<h5 id="lectureName' + lecture[i]["idLecture"] + '">Lecture:  ' + lecture[i]["nameLecture"] + ' </h5>' +
        '<img id="iconDeleteLecture' + lecture[i]["idLecture"] + '" src="../../Public/images/02-Course/Delete.png">' +
        '<img id="iconEditLecture' + lecture[i]["idLecture"] + '" class="editSectionIcon img-2" src="../../Public/images/02-Course/Edit.png">' +
        '</div>' +

        '<div id="containerEditLecture' + lecture[i]["idLecture"] + '" class="editLecture BoxTwo">' +


        '<h4 id="closeEditLecture' + lecture[i]["idLecture"] + '" class="closeEditLecture">X</h4>' +

        '<label for="nameLecture"> Lecture name: </label>' +
        '<input class="" id="inserNameLecture' + lecture[i]["idLecture"] + '" type="text" name="" value="' + lecture[i]["nameLecture"] + '">' +

        '<label for="videoLecture"> Video link: </label>' +
        '<input class="" id="insertiVideoLecture' + lecture[i]["idLecture"] + '" type="text" name="" value="' + lecture[i]["video"] + '">' +

        '<div class="VidBox BoxOne">' +
        '<p> Video Length </p>' +
        'Minutes: <input class="durationLectureMin" id="durationLectureMin' + lecture[i]["idLecture"] + '" type="text" name="" value="' + Math.trunc(lecture[i]["duracion"]) + '">' +
        'Seconds: <input class="durationLectureSec" id="durationLectureSec' + lecture[i]["idLecture"] + '" type="text" name="" value="' +Math.trunc((lecture[i]["duracion"]- Math.trunc(lecture[i]["duracion"]) )*60)+ '">' +
        '</div>' +



        '<div id="timeCurriculumStart" class="timeCurriculum">'+
          '<!-- <label for="courseTimeStart">Start Lecture</label>-->'+
          '<input id="dateLectureStart' + lecture[i]["idLecture"] + '" class="timeCourse" type="date" />'+
          '<input id="timeLectureStart' + lecture[i]["idLecture"] + '" class="timeCourse" type="time" />'+
        '</div>'+


        '<div id="timeCurriculumFinish"  class="timeCurriculum">'+
          '<!--<label for="courseTimeStart">End Lecture</label>-->'+
          '<input id="dateLectureFinish' + lecture[i]["idLecture"] + '" class="timeCourse" type="date" />'+
          '<input id="timeLectureFinish' + lecture[i]["idLecture"] + '" class="timeCourse" type="time" />'+
        '</div>'+






        '<div id="containerPDF' + lecture[i]["idLecture"] + '" class="PDF-container">' +

        '</div>' +
        '<p  class="morePDF"> <a id="addPDF' + lecture[i]["idLecture"] + '" > + add PDF </a></label> <br><br><br>  ' +
        '<div id="updateLectureData' + lecture[i]["idLecture"] + '" class="updateLectureData">'+
          'Save Lecture'+
        '</div><br><br> '+

        '</div>' +
        '<br>' +
        '<script type="text/javascript">' +

        //para que no quede espacios raros entre lectures











        'document.getElementById("dateLectureStart' + lecture[i]["idLecture"] + '").value = "2020-01-01";'+
        'document.getElementById("dateLectureFinish' + lecture[i]["idLecture"] + '").value = "2020-01-01";'+

        'document.getElementById("timeLectureStart' + lecture[i]["idLecture"] + '").value = "00:01:00";'+
        'document.getElementById("timeLectureFinish' + lecture[i]["idLecture"] + '").value = "00:01:00";'+







        'document.getElementById("dateLectureStart' + lecture[i]["idLecture"] + '").style.display = "none";'+
        'document.getElementById("dateLectureFinish' + lecture[i]["idLecture"] + '").style.display = "none";'+

        'document.getElementById("timeLectureStart' + lecture[i]["idLecture"] + '").style.display = "none";'+
        'document.getElementById("timeLectureFinish' + lecture[i]["idLecture"] + '").style.display = "none";'+
      //  'document.getElementById(dateLectureStart' + lecture[i]["idLecture"] + ').style.display = "none";'+

//


        'document.getElementById("containerPDF' + lecture[i]["idLecture"] + '").style.display = "none";' +









        'document.getElementById("containerLectureEditLecture' + idSection + '").style.display = "none";' +
        'document.getElementById("containerEditLecture' + lecture[i]["idLecture"] + '").style.display = "none";' +
        'document.getElementById("containerLecture' + lecture[i]["idLecture"] + '").style.display = "block";' +

        //functions
        'document.getElementById("lectureName' + lecture[i]["idLecture"] + '").onclick =function(e){showHideEditLecture(' + lecture[i]["idLecture"] + ');};' +
        'document.getElementById("iconEditLecture' + lecture[i]["idLecture"] + '").onclick =function(e){showEditLecture(' + lecture[i]["idLecture"] + ');};' +
        'document.getElementById("closeEditLecture' + lecture[i]["idLecture"] + '").onclick =function(e){hideEditLecture(' + lecture[i]["idLecture"] + ');};' +//
        'document.getElementById("updateLectureData' + lecture[i]["idLecture"] + '").onclick =function(e){updateLectureData(' + lecture[i]["idLecture"] + '    ,'+'       $("#inserNameLecture' + lecture[i]["idLecture"] + '").val()     ,'
        +'       $("#insertiVideoLecture' + lecture[i]["idLecture"] + '").val()  ,'+'       $("#durationLectureMin' + lecture[i]["idLecture"] + '").val()   ,'+'       $("#durationLectureSec' + lecture[i]["idLecture"] + '").val()              ,'+'       $("#dateLectureStart' + lecture[i]["idLecture"] + '").val()         ,'+'       $("#timeLectureStart' + lecture[i]["idLecture"] + '").val()      ,'+'       $("#dateLectureFinish' + lecture[i]["idLecture"] + '").val()        ,'+'       $("#timeLectureFinish' + lecture[i]["idLecture"] + '").val()               )      ;};' +
        'document.getElementById("inserNameLecture' + lecture[i]["idLecture"] + '").onkeyup =function(e){updateLectureName($("#inserNameLecture' + lecture[i]["idLecture"] + '").val() ,' + lecture[i]["idLecture"] + ',"containerEditLecture' + lecture[i]["idLecture"] + '", "lectureName' + lecture[i]["idLecture"] + '")};' +


        'document.getElementById("iconDeleteLecture' + lecture[i]["idLecture"] + '").onclick =function(e){deleteLecture(' + lecture[i]["idLecture"] + ');};' +

        //PDF
        'document.getElementById("addPDF' + lecture[i]["idLecture"] + '").onclick =function(e){addPDF(' + lecture[i]["idLecture"] + ');};' +

        '</script>'
    );
    updatePDF(lecture[i]["idLecture"]);
  }
}

function deleteLecture(idLecture){
  var lecture = "";
  $.ajax("../../App/controller/Delete.php", {
    type: 'post',
    async: false,
    data: {
      idLecture: idLecture,
      type: "deleteLecture"
    },
    success: function(data) {
      lecture = JSON.parse(data);
    }
  })
  updateLecture(lecture["idSection"]);
  showLecture2(lecture["idSection"]);

}

function updateLectureName(inserNameLecture, idLecture, containerEditLecture, lectureName) {
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      type: "updateLectureName",
      inserNameLecture: inserNameLecture,
      idLecture: idLecture
    },
    success: function(data) {
      $("#" + lectureName).empty();
      $("#" + lectureName).append('Lecture:  ' + inserNameLecture);

    }
  })
}

function addPDF(idLecture){
  $.ajax("../../App/controller/create.php", {
    type: 'post',
    async: false,
    data: {
      type: "savePDF",
      idLecture:idLecture
    },
    success: function(data) {
    }
  })
  updatePDF(idLecture);
}
function updatePDF(idLecture){
  var pdf =readPDF(idLecture);
  document.getElementById('containerPDF' + idLecture ).style.display = "block";

  $('#containerPDF' + idLecture).empty();
  for (var i = 0; i < pdf.length; i++) {
    $('#containerPDF' + idLecture).append(
      '<div id="PDFContainer' + pdf[i]["idPDF"] + '" class="border PDF PDFContainer">' +
       '<h5 class="titlePHP" id="PDFname' + pdf[i]["idPDF"] + '">PDF:  ' + pdf[i]["namePDF"] + '</h5>' +
       '<img id="deletePDF' + pdf[i]["idPDF"] + '" class="imgPDF" src="../../Public/images/02-Course/Delete.png">' +
       '<img id="editPDF' + pdf[i]["idPDF"] + '"  class="imgPDF img-3" src="../../Public/images/02-Course/Edit.png">' +
       '</div>' +

       '<div id="PDFEditContainer' + pdf[i]["idPDF"] + '" class=" border PDFEdit">' +
       '<h4 id="closeEditPDF' + pdf[i]["idPDF"] + '" class="closeEditLecture">X</h4>' +
       '<label for="pdfName"> PDF name: </label>' +
       '<input class="" id="insertPDFName' + pdf[i]["idPDF"] + '" type="text" name="" value="' + pdf[i]["namePDF"] + '">' +
       '<label for="pdfLink"> PDF link: </label>' +
       '<input class="" id="insertPDFLink' + pdf[i]["idPDF"] + '" type="text" name="" value="' + pdf[i]["linkPDF"] + '">' +
       '</div><br><br>'+
       '<script type="text/javascript">' +
       'document.getElementById("PDFEditContainer' + pdf[i]["idPDF"] + '").style.display = "none";'+
       //PDF

       'document.getElementById("insertPDFName' + pdf[i]["idPDF"] + '").onkeyup =function(e){insertPDFName(' +'        $("#insertPDFName' + pdf[i]["idPDF"] + '").val()  '+  ',' + pdf[i]["idPDF"]    +',"PDFEditContainer' + pdf[i]["idPDF"] + '", "PDFname' + pdf[i]["idPDF"] + '")};' +

       'document.getElementById("insertPDFLink' + pdf[i]["idPDF"] + '").onkeyup =function(e){insertPDFLink(' +'        $("#insertPDFLink' + pdf[i]["idPDF"] + '").val()  '+  ',' + pdf[i]["idPDF"]   +');};' +


       'document.getElementById("closeEditPDF' + pdf[i]["idPDF"] + '").onclick =function(e){hideEditPDF(' + pdf[i]["idPDF"] + ');};' +
       'document.getElementById("editPDF' + pdf[i]["idPDF"] + '").onclick =function(e){showEditPDF(' + pdf[i]["idPDF"] + ');};' +
       'document.getElementById("deletePDF' + pdf[i]["idPDF"] + '").onclick =function(e){deletePDF(' + pdf[i]["idPDF"] + ');};' +
       'document.getElementById("PDFname' + pdf[i]["idPDF"] + '").onclick =function(e){showHideEditPDF(' + pdf[i]["idPDF"] + ');};' +
       '</script>'
    );
  }

}


function insertPDFName(insertPDF, idPDF,PDFEditContainer,namePDF){
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      idPDF: idPDF,
      type: "updateNamePDF",
      namePDF:insertPDF
    },
    success: function(data) {
    }
  })
  $("#" + namePDF).empty();
  $("#" + namePDF).append('PDF:  ' + insertPDF);
}



/*
function updateLectureName(inserNameLecture, idLecture, containerEditLecture, lectureName) {
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      type: "updateLectureName",
      inserNameLecture: inserNameLecture,
      idLecture: idLecture
    },
    success: function(data) {
      $("#" + lectureName).empty();
      $("#" + lectureName).append('Lecture:  ' + inserNameLecture);

    }
  })
}

*/


function insertPDFLink(linkPDF, idPDF){
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      idPDF: idPDF,
      type: "updateLinkPDF",
      linkPDF:linkPDF
    },
    success: function(data) {
    }
  })
}



function hideEditPDF(idPDF) {
    document.getElementById("PDFEditContainer" + idPDF).style.display = "none";
}
function showEditPDF(idPDF) {
    document.getElementById("PDFEditContainer" + idPDF).style.display = "block";
}
function showHideEditPDF(idPDF) {
  if (document.getElementById("PDFEditContainer" + idPDF).style.display == "block") {
    document.getElementById("PDFEditContainer" + idPDF).style.display = "none";

  } else {
    document.getElementById("PDFEditContainer" + idPDF).style.display = "block";
  }
}


function deletePDF(idPDF){
  var pdf = "";
  $.ajax("../../App/controller/Delete.php", {
    type: 'post',
    async: false,
    data: {
      idPDF: idPDF,
      type: "deletePDF"
    },
    success: function(data) {
      pdf = JSON.parse(data);
    }
  })
  updatePDF(pdf["idLecture"]);
}
function readPDF(idLecture){
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
  })
  return pdf;
}

/*Muestra section edit*/
function iconEditSection(containerSection, containerEditSection) {
  document.getElementById(containerEditSection).style.display = 'block';
}
/*closeEditSection*/
function closeEditSection(containerEditSection) {
  document.getElementById(containerEditSection).style.display = 'none';
}
/*updateSectionName*/
function updateSectionName(inputSectionName, idSection, containerEditSection, sectionName) {
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      type: "updateSectionName",
      inputSectionName: inputSectionName,
      idSection: idSection
    },
    success: function(data) {
      $("#" + sectionName).empty();
      $("#" + sectionName).append('Section:  ' + inputSectionName);

    }
  })
}

/*Show and hide lecture content*/
function openLecture(containerLecture, containerEditLecture) {
  if (document.getElementById(containerLecture).style.display == 'block') {
    document.getElementById(containerEditLecture).style.display = "none";
    document.getElementById(containerLecture).style.display = "none";
  } else {
    document.getElementById(containerLecture).style.display = "block";
  }
}

/*editLecture*/
function editLecture(containerEditLecture) {
  document.getElementById(containerEditLecture).style.display = "block";
}


/*closeEditLecture*/
function closeEditLecture(containerEditLecture) {
  document.getElementById(containerEditLecture).style.display = "none";
}





/**/
