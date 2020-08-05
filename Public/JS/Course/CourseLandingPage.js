/*---------------------------- Calendar ----------------------------------*/

webshims.setOptions('waitReady', false);
webshims.setOptions('forms-ext', {type: 'date'});
webshims.setOptions('forms-ext', {type: 'time'});
webshims.polyfill('forms forms-ext');



document.getElementById("online").onclick =function(e){//
document.getElementById('timeCourse').style.display = 'none';
document.getElementById('ScheduleDays').style.display = 'none';
document.getElementById('divLinkZoom').style.display = 'none';

/*if (document.getElementById('timeCurriculumStart')) {
  document.getElementById('timeCurriculumStart').style.display = 'none';
  document.getElementById('timeCurriculumFinish').style.display = 'none';
}*/
//document.getElementById('timeCurriculumStart').style.display = 'none';
//document.getElementById('timeCurriculumFinish').style.display = 'none';


};

document.getElementById("live").onclick =function(e){//


document.getElementById('timeCourse').style.display = 'block';
document.getElementById('ScheduleDays').style.display = 'block';
document.getElementById('divLinkZoom').style.display = 'block';

/*if (document.getElementById('timeCurriculumStart')) {
  document.getElementById('timeCurriculumStart').style.display = 'none';
  document.getElementById('timeCurriculumFinish').style.display = 'none';}*/



};






/*---------------------------- Query learn ----------------------------------*/
readLearnRequirement();

function readLearnRequirement(){
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readLearnRequirementByCourseId"
    },
    success: function(data) {
      data = JSON.parse(data);
      updateRequirements(data);
      updateLearn(data);
   }
  }
 )
}
function updateRequirements(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i]["requirementOrLearn"]=="requirement") {
      $('#requierementsContainer').append(
        '<input class="inputRequirementOrLearn" id="requirement' + data[i]["idRequirementLearn"] + '" type="text"  value="' + data[i]["text"] + '" placeholder="Req ">'+
        '<img id="deleteRequierement' + data[i]["idRequirementLearn"] + '" class="deleteRequirement" src="../../Public/images/02-Course/Delete.png" alt="">'+
        '<br><br>'+
        '<script type="text/javascript">' +
        'document.getElementById("requirement' + data[i]["idRequirementLearn"] + '").onkeyup =function(e){updateTextRequirements(' +'        $("#requirement' + data[i]["idRequirementLearn"] + '").val()  '+  ',' + data[i]["idRequirementLearn"]   +');};' +
        'document.getElementById("deleteRequierement' + data[i]["idRequirementLearn"] + '").onclick =function(e){deleteLearnRequirement(' + data[i]["idRequirementLearn"]   +');};' +

        '</script>'
      )
    }
  }
}

function deleteLearnRequirement(idRequirementLearn){
  $.ajax("../../App/controller/Delete.php", {
    type: 'post',
    async: false,
    data: {
      type: "deleteRequirementLearn",
      idRequirementLearn:idRequirementLearn,
    },
    success: function(data) {
    }
  })
  $('#requierementsContainer').empty();
  $('#learnContainer').empty();
  readLearnRequirement();

}
function updateTextRequirements( requierement,idRequirement){
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      type: "updateRequirementLearn",
      idRequirementLearn:idRequirement,
      requierementLearn:requierement
    },
    success: function(data) {
    }
  })
}

function updateLearn(data) {
  for (var i = 0; i < data.length; i++) {
    if (data[i]["requirementOrLearn"]=="learn") {
      $('#learnContainer').append(
        '<input class="inputRequirementOrLearn" id="learn' + data[i]["idRequirementLearn"] + '" type="text"  value="' + data[i]["text"] + '" placeholder="Learn ">'+
        '<img id="deleteLearn' + data[i]["idRequirementLearn"] + '" class="deleteRequirement" src="../../Public/images/02-Course/Delete.png" alt="">'+

        '<br><br>'+
        '<script type="text/javascript">' +
        'document.getElementById("learn' + data[i]["idRequirementLearn"] + '").onkeyup =function(e){updateTextLearn(' +'        $("#learn' + data[i]["idRequirementLearn"] + '").val()  '+  ',' + data[i]["idRequirementLearn"]   +');};' +
        'document.getElementById("deleteLearn' + data[i]["idRequirementLearn"] + '").onclick =function(e){deleteLearnRequirement(' + data[i]["idRequirementLearn"]   +');};' +

        '</script>'
      )
    }
  }
}
function updateTextLearn(learn, idLearn){
  $.ajax("../../App/controller/Update.php", {
    type: 'post',
    async: false,
    data: {
      type: "updateRequirementLearn",
      idRequirementLearn:idLearn,
      requierementLearn:learn
    },
    success: function(data) {
    }
  }
 )
}
document.getElementById("addRequierements").onclick =function(e){addRequierements();};
document.getElementById("addLearn").onclick =function(e){addLearn();};

function addRequierements(){
  $.ajax("../../App/controller/create.php", {
    type: 'post',
    async: false,
    data: {
      type: "createRequierment"
    },
    success: function(data) {
    }
  })
  $('#requierementsContainer').empty();
  $('#learnContainer').empty();

  readLearnRequirement();
}
function addLearn(){
  $.ajax("../../App/controller/create.php", {
    type: 'post',
    async: false,
    data: {
      type: "createLearn"
    },
    success: function(data) {

    }
  })
  $('#learnContainer').empty();
  $('#requierementsContainer').empty();

  readLearnRequirement();
}


document.getElementById("price").onkeyup =function(e){
if ( isFinite($('#price').val()) )   {

}
else {
  alert("enter a numeric value");
  $('#price').empty();
}

}

/*


*/










/*---------------------------- Query course ----------------------------------*/
function updateCourseLandingPage(data){
document.getElementById('courseTitle').value = data["courseTitle"];
document.getElementById('courseSubtitle').value = data["courseSubtitle"];
//document.getElementById("courseDescription").innerHTML = data["courseDescription"] ;


document.getElementById('textAreaDescription').value = data["courseDescription"];


document.getElementById('price').value = data["price"];
document.getElementById('options').value = data["module"];
addTopic(data["module"]);
document.getElementById('choices').value = data["topic"];


if (data["startTime"]==null&&data["endTime"]==null) {
  document.getElementById('timeCourseStart').value = "2020-01-01";
  document.getElementById('timeCourseFinish').value = "2020-01-01";
}
else {
  document.getElementById('timeCourseStart').value = data["startTime"];
  document.getElementById('timeCourseFinish').value = data["endTime"];
}


if (data["liveOnline"]=="live") {//
  document.getElementById('timeCourse').style.display = 'block';
  document.getElementById('ScheduleDays').style.display = 'block';
  document.getElementById('divLinkZoom').style.display = 'block';


  /*if (document.getElementById('timeCurriculumStart')) {
    document.getElementById('timeCurriculumStart').style.display = 'none';
    document.getElementById('timeCurriculumFinish').style.display = 'none';
  }*/


  $('#live' ).prop('checked',true);
  $('#online').prop('checked',false);
}
else if (data["liveOnline"]=="online") {//
  document.getElementById('timeCourse').style.display = 'none';
  document.getElementById('ScheduleDays').style.display = 'none';
  document.getElementById('divLinkZoom').style.display = 'none';

/*
if (document.getElementById('timeCurriculumStart')) {
  document.getElementById('timeCurriculumStart').style.display = 'none';
  document.getElementById('timeCurriculumFinish').style.display = 'none';
}*/


  $('#online').prop('checked',true);
  $('#live').prop('checked',false);

}

document.getElementById("image").src = "../../Public/images/02-Course/Img-Course/"+ data["imageCourse"];

}













//document.getElementById("openTextEditDescription").onclick =function(e){openTextEditDescription()}


/*function openTextEditDescription(){
  //Before we copy, we are going to select the text.
    var text = document.getElementById("courseDescription");
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(text);
    selection.removeAllRanges();
    selection.addRange(range);

    //add to clipboard.
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    navigator.clipboard.readText().then(
  clipText => document.getElementById("editor-text-box").innerText = clipText);
}*/


function addTopic(selectValue){
  var lookup = {
     'Option 1': ['AI', 'Block Chain', 'Big Data', 'Iot', 'Business Analytics','Machine Learning', 'Deep Learning'],
     'Option 2': ['Mechanical', 'Chemical','Civil & Structure','Electrical' ,'Instrumentation'],
     'Option 3': ['Piping Design','Process Design','Electrical Design','Instrumentation Design','Equipment Design','Civil Design','Structural Design', 'MEP Design']
  };
   selectValue = selectValue;
$('#choices :not(:first-child)').remove();
  for (i = 0; i < lookup[selectValue].length; i++) {
     $('#choices').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
  }
}

$('#options').on('change', function() {
  addTopic($(this).val());
});
