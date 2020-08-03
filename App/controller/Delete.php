<?php
    require_once('../config/database.php');
    require_once('../model/users.php');
    require_once('../model/Course.php');
    require_once('../model/Lectures.php');
    require_once('../model/RecWWYL.php');
    require_once('../model/PDF.php');
    require_once('read.php');
    require_once('../model/Section.php');
    require_once('../model/UserCourse.php');



/*-------------------------------  SECTION  ---------------------------------*/
     if ($_POST['type'] == 'deleteSection'){

        $readLectures = new Read();
        $readLectures->queryLecture();
        $readLectures->setIdSectionLecture($_POST['idSection']);
        $lectures =  $readLectures->getLecturesByIdSection2();

        foreach ($lectures   as $row ) {
          deleteLecture($row->idLecture);
        }

     $deleteSection = new Delete();
     $deleteSection->querySection();
     $deleteSection->setIdSection($_POST['idSection']);
     $deleteSection->deleteSectionSection();
    }


    /*-------------------------------  PDF  ---------------------------------*/
      elseif ($_POST['type'] == 'deletePDF'){

      $readPDF = new Read();
      $readPDF->queryPDF();
      $readPDF->setIdPDF($_POST['idPDF']);
      $readPDF->getPDFByIdPDF();

    $deletePDF = new Delete();
    $deletePDF->queryPDF();
    $deletePDF->setIdPDF($_POST['idPDF']);
    $deletePDF->deletePDF();

    }

    /*-------------------------------  REQUIREMENT LEARN  ---------------------------------*/
      elseif ($_POST['type'] == 'deleteRequirementLearn'){

        $deleteRequirementLearn = new Delete();
        $deleteRequirementLearn->queryRequirementsLearn();
        $deleteRequirementLearn->setIdRequirementOrLearn($_POST['idRequirementLearn']);
        $deleteRequirementLearn->deleteRequirementOrLearn();



     }

     /*-------------------------------  REQUIREMENT LEARN  ---------------------------------*/
       elseif ($_POST['type'] == 'removeUserCourse'){
        session_start();
        $removeCourseFromShoppingCart = new Delete();
        $removeCourseFromShoppingCart->queryUserCourse();
        $removeCourseFromShoppingCart->setDataUserCourse($_SESSION['idUser'],$_POST['idCourse'],$_POST['userCourse']);
        $removeCourseFromShoppingCart->deleteUserCourse();

       }
/*-------------------------------  LECTURE  ---------------------------------*/
    elseif ($_POST['type'] == 'deleteLecture'){
      deleteLecture($_POST['idLecture']);

   }
   function deleteLecture($idLecture){
     $readLectures = new Read();
     $readLectures->queryLecture();
     $readLectures->setIdLecture($idLecture);
     $readLectures->getLecture();



     $deletePDF = new Delete();
     $deletePDF->queryPDF();
     $deletePDF->setIdLectureToPDF($idLecture);
     $deletePDF->deletePDFByidLecture();

     $deleteSection = new Delete();
     $deleteSection->queryLecture();
     $deleteSection->setIdLecture($idLecture);
     $deleteSection->deleteLecture();
   }




  class Delete{

/*----------------------------------------------------------------------------*/
/*-------------------------------  USER COURSES  ---------------------------------*/
/*----------------------------------------------------------------------------*/
private $userCourse;
function queryUserCourse(){
  $db = new Database();
  $this->$userCourse = new UserCourse($db);
}
function setDataUserCourse($idUser, $idCourse,$typeInsert){
  $this->$userCourse->setIdCourse($idCourse);
  $this->$userCourse->setIdUser($idUser);
  $this->$userCourse->setUserCourse($typeInsert);
}//
function deleteUserCourse(){
  $this->$userCourse->delete();

}
/*----------------------------------------------------------------------------*/
/*-------------------------------  SECTION  ---------------------------------*/
/*----------------------------------------------------------------------------*/
private $section;
function querySection(){
  $db = new Database();
  $section = new Section($db);
  $this->section = $section;
}
function setIdSection($idSection){
  $this->section->setIdSection($idSection);
}
function deleteSectionSection(){
  $this->section->deleteSection();
}

/*----------------------------------------------------------------------------*/
/*-------------------------------  LECTURES  ---------------------------------*/
/*----------------------------------------------------------------------------*/
    private $lecture;
    function queryLecture(){
      $db = new Database();
      $lecture = new Lectures($db);
      $this->lecture = $lecture;
    }
    function setIdLecture($idLecture){
      $this->lecture->setIdLecture($idLecture);
    }
    function setIdCourseLecture($idCourse){
      $this->lecture->setIdCourse($idCourse);
    }
    function setSectionName($sectionName){
      $this->lecture->setSectionName($sectionName);

    }
    function deleteSection(){
      $this->lecture->deleteSection();

    }
    function deleteLecture(){
      $this->lecture->deleteLecture();

    }

/*----------------------------------------------------------------------------*/
/*-----------------------------------  PDF  ----------------------------------*/
/*----------------------------------------------------------------------------*/
    private $PDF;
    function queryPDF(){
      $db = new Database();
      $this->PDF = new PDF($db);
    }
    function setIdPDF($idPDF){
      $this->PDF->setIdPDF($idPDF);
    }
    function deletePDF(){
      $this->PDF->deletePDF();
    }
    function setIdLectureToPDF($idLecture){
      $this->PDF->setIdLecture($idLecture);

    }
    function deletePDFByidLecture(){
      $this->PDF->deletePDFByidLecture();
    }
/*----------------------------------------------------------------------------*/
/*---------------------------  REQUIREMETN LEARN  ----------------------------*/
/*----------------------------------------------------------------------------*/
private $queryRequirementsLearn;
function queryRequirementsLearn(){
  $db = new Database();
  $this->queryRequirementsLearn = new ReqWWYL($db);
}
function setIdRequirementOrLearn($idRequirementOrLearn){
  $this->queryRequirementsLearn -> setIdRequirementOrLearn($idRequirementOrLearn);
}
function deleteRequirementOrLearn(){
  $this->queryRequirementsLearn -> deleteById();
}





/*----------------------------------------------------------------------------*/
/*--------------------------------  COURSES  ---------------------------------*/
/*----------------------------------------------------------------------------*/
/*private $course;
function queryCourse(){
  $db = new Database();
  $course = new Courses($db);
  $this->course = $course;
}
function getCourses(){
  return json_encode($this->course->getCourses());
}
function setIdCourse($idCourse){
  $this->course->setIdCourse($idCourse);
}
function getCourseById(){
  echo json_encode($this->course->getCourseById());
}*/
/*----------------------------------------------------------------------------*/
/*----------------------------------  USER  ----------------------------------*/
/*----------------------------------------------------------------------------*/
  /*    private $user;
      private $idUser;
      private $email;
      private $userType;
      private $password;

      function queryUser(){
        $db = new Database();
        $user = new Users($db);
        $this->user = $user;
      }
      function setIdUser($idUser){
        $this->user->setIdUser($idUser);
      }
      function setEmail($email){
        $this->email = $email;
      }
      function setPassword($password){
        $this->password = $password;
      }
      function loginForm(){//1 positivo y falso es 0
        $login=0;
        if ($this->userExistence()==1){
          $login = 1;
        }
        if ($this->emptyFields()==1){
          $login = 0;
        }
        if ($login == 1){
          session_start();
          $_SESSION["idUser"] = $this->idUser;
        }
        $var = array();
        array_push($var,$login);
        array_push($var,$this->userType);
        return json_encode($var);
      }
      function userExistence(){
        $userExistence=0;
        foreach ($this->user-> get() as  $row){
          if ($row->email == $this->email && $row->password == $this->password){
            $userExistence=1;
            $this->userType = $row->userType;
            $this->idUser = $row->idUsers;
          }
        }
        return $userExistence;
      }
      function emptyFields(){
        $emptyFields = 0;
          if ($this->email== "" || $this->password=="") {
            $emptyFields = 1;
          }
          return $emptyFields;
        }
      function getUser(){
      echo  json_encode($this->user->getById());
    }*/
  }



?>
