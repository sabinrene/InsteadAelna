
document.getElementById('ShoppingCart').onclick = function(e){
 window.open("../../Pages/Cart/ShoppingCart.php","_self");
}


/*---------------------------- Buy course or courses --------------------------------*/
$.ajax("../../App/controller/Session.php", {
  type: 'post',
  async: false,
  data: {
    type: "getBuyCourseOrCourses"
  },
  success: function(data){
    if (data =='BuyCourse') {
      readCoursetoBuy()
    }
    else {
      readCoursestoBuy();
    }
  }
}
)









/*---------------------------- Buy course --------------------------------*/

function readCoursetoBuy() {
  var totalPrice = 0;
  var titleCourse = "";
  var titileDescription = " ";
  $.ajax("../../App/controller/read.php", {
    type: 'post',
    async: false,
    data: {
      type: "readCourseById"
    },
    success: function(data){
    data = JSON.parse(data);

    const idCourses = [];
    idCourses[0] = data['idCourse'];
sendIdCoursesToSession(idCourses);

titleCourse = data['courseTitle'];
titileDescription = data['courseDescription'];




    totalPrice =  updateCoursesCheckout(data);
    }
   }
  )
  $('#totalPrice').empty();
  $('#totalPrice').append('$'+ totalPrice);//("style", "background-color: red;"









  $('#paymentForm').append(
    "<form>"+
        "<script src='https://checkout.epayco.co/checkout.js'"+
            "data-epayco-key='19dc45f2f08337bb051590e5cbbc8185'"+
            "class='epayco-button'"+
            "data-epayco-amount='"+totalPrice+"'"+
            "data-epayco-tax='"+(totalPrice*0.19)+"'"+
            "data-epayco-tax-base='"+(totalPrice-totalPrice*0.19)+"'"+
            "data-epayco-name='"+titleCourse+"'"+
            "data-epayco-description='"+titleCourse+"'"+
            "data-epayco-currency='usd'"+
            "data-epayco-country='CO'"+
            "data-epayco-test='false'"+
            "data-epayco-external='true'"+//App/controller/PaymentConfirmation.php
            "data-epayco-response='http://www.insteadacademy.com/PaymentResponse.html'"+
            "data-epayco-confirmation='http://www.insteadacademy.com/App/controller/PaymentConfirmation.php'"+
            "data-epayco-button='https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/btn1.png'>"+
        "</script>"+
    "</form>"
  );

//data-epayco-button
  //  document.getElementById("formulary").setAttribute('data-epayco-button',"../../Public/images/00-Home/Instead.png");
  //    alert(document.getElementById("formulary").getAttribute('data-epayco-button'));

 }


 function sendIdCoursesToSession(idCourses){

   dataString = idCourses; // array?
 var jsonString = JSON.stringify(dataString);

 $.ajax("../../App/controller/Session.php",{
   type: 'post',
   async: false,
   data: {
     type: "setIdCourses",
     idCourses: jsonString
   },
   success: function(data){
   }
  }
 )
}




 /*---------------------------- Payment --------------------------------*/
/*
 document.getElementById("formulary").onclick = function(e){
   document.getElementById("formulary").setAttribute('data-epayco-amount',"5000");
   alert(document.getElementById("formulary").getAttribute('data-epayco-amount')); }
/*

/*---------------------------- Buy courses --------------------------------*/

function readCoursestoBuy () {
  var totalPrice = 0;
  /*----------------------------- Read courses ---------------------------------*/
  $.ajax("../../App/controller/read.php",{
    type: 'post',
    async: false,
    data: {
      type: "getCoursesByIdUser"
    },
    success: function(data) {
      data = jQuery.parseJSON(data);
      const idCourses = [];


      for (var i = 0; i < data.length; i++) {


        updateCoursesCheckout(readCourse(data[i]['idCourse']));
        if (isNumber(      parseFloat(   readCourse(data[i]['idCourse'])["price"]   )      )) {
          totalPrice = totalPrice +  parseFloat(   readCourse(data[i]['idCourse'])["price"]   )   ;
        }



        idCourses[i] = data[i]['idCourse'];

        }


        sendIdCoursesToSession(idCourses);


     if (totalPrice==0) {
       alert("Please add courses to shopping cart ");
       window.open("../../Pages/Cart/ShoppingCart.php","_self");
     }


     $('#totalPrice').empty();
     $('#totalPrice').append('$'+ totalPrice);



    }
   }
  )

    $('#paymentForm').append(
      "<form>"+
          "<script src='https://checkout.epayco.co/checkout.js'"+
              "data-epayco-key='19dc45f2f08337bb051590e5cbbc8185'"+
              "class='epayco-button'"+
              "data-epayco-amount='"+totalPrice+"'"+
              "data-epayco-tax='"+(totalPrice*0.19)+"'"+
              "data-epayco-tax-base='"+(totalPrice-totalPrice*0.19)+"'"+
              "data-epayco-name='Courses Instead Academic'"+
              "data-epayco-description='Courses'"+
              "data-epayco-currency='usd'"+
              "data-epayco-country='CO'"+
              "data-epayco-test='false'"+
              "data-epayco-external='true'"+
              "data-epayco-response='http://www.insteadacademy.com/PaymentResponse.html'"+
              "data-epayco-confirmation='http://www.insteadacademy.com/App/controller/PaymentConfirmation.php'"+
              "data-epayco-button='https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/btn1.png'>"+
          "</script>"+
      "</form>"
    );

/*

<!-- =====================================================================
  ///////////   Este es su botón de Botón de pago ePayco   ///////////
 ===================================================================== -->
<form>
    <script src='https://checkout.epayco.co/checkout.js'
        data-epayco-key='19dc45f2f08337bb051590e5cbbc8185'
        class='epayco-button'
        data-epayco-amount='119'
        data-epayco-tax='19'
        data-epayco-tax-base='100'
        data-epayco-name='ciclone '
        data-epayco-description='ciclone '
        data-epayco-currency='USD'
        data-epayco-country='CO'
        data-epayco-test='false'
        data-epayco-external='true'
        data-epayco-response='www.gmail.com'
        data-epayco-confirmation='www.google.com'
        data-epayco-button='https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/btn1.png'>
    </script>
</form> <!-- ================================================================== -->

*/


}


function seeShoppingCard(){
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "seeShoppingCard"
    },
    success: function (data){
      alert(data);
   }
  }
 )
}

function destroySessionShoppingCard(){
  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "destroySessionShoppingCard"
    },
    success: function (data){
      alert(data);
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

function isNumber(n){
    return Number(n)=== n;
}
/*---------------------------- update courses --------------------------------*/

  function updateCoursesCheckout(data){
    if (isNumber(  parseFloat(  data["price"] )  )) {
      $('#Check-L').append(
        '<div class="CartL-Box">'+

                '<!-- <div class="CartL-BoxPic">'+
                  '<img class="BoxPic" src="../../Public/images/02-Course/Img-Course/'+ data["imageCourse"] + '" alt="">'+
                '</div>  -->'+

                '<div class="CartL-Titles">'+
                  '<h3> '+ data["courseTitle"] + ' </h3>'+
                '</div>'+

                '<div class="CartL-Price"> $'+ data["price"] + ' </div>'+
          '</div>'
      )
    }
    return  data["price"];
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
/*----------------------------- verify Session ---------------------------------*/

  $.ajax("../../App/controller/Session.php", {
    type: 'post',
    async: false,
    data: {
      type: "verifySession"
    },
    success: function(data){
       data2 = jQuery.parseJSON(data);
       if (data2[2]!= true) {
         window.open("../../index.php","_self");
       }
    }
  }
)

/*----------------------------- Add data in menu---------------------------------*/
$.ajax("../../App/controller/read.php", {
  type: 'post',
  async: false,
  data: {
    type: "readTrainerById"
  },
  success: function(data){
    data = JSON.parse(data);
      updateTrainee(data);
  }
}
)
function updateTrainee(data){
  document.getElementById("userName").innerHTML = data["firstName"];
  document.getElementById("userEmail").innerHTML = data["email"];
}







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


document.getElementById('MyCourses').onclick = function(e){
 window.open("../../Pages/Trainee/Trainee.php","_self");
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
