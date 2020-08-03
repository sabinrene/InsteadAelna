<?php
    require_once('../config/database.php');
    require_once('../model/users.php');
    require_once('../model/Course.php');
    require_once('../model/Lectures.php');
    require_once('../model/Section.php');
    require_once('../model/RecWWYL.php');
    require_once('../model/PDF.php');
    require_once('../model/UserCourse.php');

/*-------------------------------  USERS  ------------------------------------*/
    if ($_POST['type'] == 'loginForm'){
      $registerForm = new Read();
      $registerForm->queryUser();
      $registerForm->setEmail($_POST['email']);
      $registerForm->setPassword($_POST['password']);
      echo  $registerForm->loginForm();
    }
     else if ($_POST['type'] == 'readTrainerById'){
      session_start();
      $readTrainer = new Read();
      $readTrainer->queryUser();
      $readTrainer->setIdUser($_SESSION["idUser"]);
      $readTrainer->getUser();
    }
    else if ($_POST['type'] == 'readTraineeById'){
     session_start();
     $readTrainee = new Read();
     $readTrainee->queryUser();
     $readTrainee->setIdUser($_SESSION["idUser"]);
     $readTrainee->getUser();
   }
    else if ($_POST['type'] == 'readidUser'){
      session_start();
      echo $_SESSION["idUser"];
    }
    else if ($_POST['type'] == 'readUserById'){
     $readTrainee = new Read();
     $readTrainee->queryUser();
     $readTrainee->setIdUser($_POST['idUser']);
     $readTrainee->getUser();
   }





/*-------------------------------  SECTIONS  ---------------------------------*/
    else if ($_POST['type'] == 'readSectionsByCourseId'){
     session_start();
     $readSections = new Read();

     $readSections->querySection();
     $readSections->setIdCourseBySection($_SESSION["idCourse"]);
      echo json_encode ($readSections->getSectionsByIdCourse());
    }


/*---------------------------  LEARN REQUIREMETNS  ---------------------------*/
  else if ($_POST['type'] == 'readLearnRequirementByCourseId'){
   session_start();
   $learnRequierement = new Read();
   $learnRequierement->queryRequirementsLearn();
   $learnRequierement->setIdCourseRequirementsLearn($_SESSION["idCourse"]);
   $learnRequierement->getRequirementsLearn();
  }




/*--------------------------------  LECTURE  ---------------------------------*/
    else if ($_POST['type'] == 'readLecturesBySectionId'){
     $readLectures = new Read();
     $readLectures->queryLecture();
     $readLectures->setIdSectionLecture($_POST['idSection']);
     $readLectures->getLecturesByIdSection();
    }
    else if ($_POST['type'] == 'readLectureByIdLecture'){

     $readLectureByIdLecture = new Read();
     $readLectureByIdLecture->queryLecture();
     $readLectureByIdLecture->setIdLecture($_POST['idLecture']);
     $readLectureByIdLecture->getLectureByIdLecture();
    }


/*--------------------------------  COURSES  ---------------------------------*/
         else if ($_POST['type'] == 'readCourses'){
          $readCourses = new Read();
          $readCourses->queryCourse();
         echo $readCourses->getCourses();
        }
         else if ($_POST['type'] == 'readCourseById'){
          session_start();
          $readCourse = new Read();
          $readCourse->queryCourse();
          $readCourse->setIdCourse($_SESSION["idCourse"] );
          $readCourse->getCourseById();
        }
        else if ($_POST['type'] == 'readCourseByIdCourse'){
         session_start();
         $readCourse = new Read();
         $readCourse->queryCourse();
         $readCourse->setIdCourse($_POST["idCourse"] );
         $readCourse->getCourseById();
       }


/*-----------------------------------  PDF  ----------------------------------*/
       else if ($_POST['type'] == 'readPDFByLectureId'){
         $readPDF = new Read();
         $readPDF->queryPDF();
         $readPDF->setIdLectureToPDF($_POST['idLecture']);
         $readPDF->getPDFByIdLecture();
       }
       else if ($_POST['type'] == 'readPDFByIdCourse'){
         session_start();
         $readPDFByIdCourse = new Read();
         $readPDFByIdCourse->queryPDF();
         $readPDFByIdCourse->setIdCourseToPDF($_SESSION["idCourse"]);
         $readPDFByIdCourse->getPDFByIdCourse();
       }




       /*-------------------------------  buy course  -------------------------------*/
       else if ($_POST['type'] == 'verifyBuyCourse'){
         session_start();
         $verifyBuyCourse = new Read();
         $verifyBuyCourse->queryBuy();
         $verifyBuyCourse->setData($_SESSION['idUser'],$_SESSION['idCourse'],$_POST['type']);
         $verifyBuyCourse->getUserCourse();
       }

       else if ($_POST['type'] == 'getCoursesByIdUser'){
         session_start();
         $getCoursesByIdUser = new Read();
         $getCoursesByIdUser->queryBuy();
         $getCoursesByIdUser->setIdUserToUserCourse($_SESSION['idUser']);
         $getCoursesByIdUser->getUserCourseByIdUser();
       }
       /*--------------------------------  readBuyCoursesByIdUser  ---------------------------------*/
        else if ($_POST['type'] == 'readBuyCoursesByIdUser'){
         session_start();
         $readBuyCoursesByIdUser = new Read();
         $readBuyCoursesByIdUser->queryBuy();
         $readBuyCoursesByIdUser->setIdUserToUserCourse($_SESSION["idUser"]);
         $readBuyCoursesByIdUser->getUserCourseByIdUser();
       }
       /*-------------------------------  buy course  -------------------------------*/
       else if ($_POST['type'] == 'verifyBuyCourseByPost'){
         session_start();
         $verifyBuyCourse = new Read();
         $verifyBuyCourse->queryBuy();
         $verifyBuyCourse->setData($_SESSION['idUser'],$_POST['idCourse'],$_POST['type']);
         $verifyBuyCourse->getUserCourse();
       }




class Read{
  /*----------------------------------------------------------------------------*/
  /*-------------------------------- USER COURSE -------------------------------*/
  /*----------------------------------------------------------------------------*/
        private $buy;

        function queryBuy(){
          $db = new Database();
          $this->buy = new UserCourse($db);
        }

        function setData($idUser, $idCourse,$typeInsert){
          $this->buy->setIdCourse($idCourse);
          $this->buy->setIdUser($idUser);
          $this->buy->setUserCourse($typeInsert);
        }
        function setIdUserToUserCourse($idUser){
          $this->buy->setIdUser($idUser);
        }


        function getUserCourse(){
          echo  json_encode($this->buy->getUserCourse());
        }
        function getUserCourseByIdUser(){
          echo  json_encode($this->buy->getUserCourseByIdUser());
        }



/*----------------------------------------------------------------------------*/
/*-------------------------------- PDF -----------------------------------*/
/*----------------------------------------------------------------------------*/
      private $PDF;

      function queryPDF(){
        $db = new Database();
        $this->PDF = new PDF($db);
      }
      function setIdLectureToPDF($idLecture){
        $this->PDF->setIdLecture($idLecture);
      }
      function getPDFByIdLecture(){
    echo  json_encode(  $this->PDF->getPDFByIdLecture());
      }
      function setIdPDF($idPDF){
        $this->PDF->setIdPDF($idPDF);
      }
      function setIdCourseToPDF($idCourse){
        $this->PDF->setIdCourse($idCourse);
      }
      function getPDFByIdPDF(){
    echo  json_encode(  $this->PDF->getPDFByIdPDF());
      }
      function getPDFByIdCourse(){
    echo  json_encode(  $this->PDF->getPDFByIdCourse());
      }


/*----------------------------------------------------------------------------*/
/*--------------------------------  COURSES  ---------------------------------*/
/*----------------------------------------------------------------------------*/
  private $course;
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

  function setIdUserToCourse($idUser){
    $this->course->setIdUser($idUser);
  }

  function getCourseById(){
    echo json_encode($this->course->getCourseById());
  }

  function getLastIdCourse(){
   return $this->course-> getLastIdCourse();
  }

  function getCourseByIdUser(){
   echo json_encode( $this->course-> getCourseByIdUser());
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
      function setIdSectionLecture($idSection){
        $this->lecture->setIdSection($idSection);
      }
      function getLecturesByIdSection(){
      echo  json_encode($this->lecture->getLecturesByIdSection());
      }
      function getLecturesByIdSection2(){
      return  $this->lecture->getLecturesByIdSection();
      }
      function getLecture(){
      echo  json_encode($this->lecture->getLecture());
      }
      function getLectureByIdLecture(){
      echo  json_encode($this->lecture->getLectureByIdLecture());
      }


/*----------------------------------------------------------------------------*/
/*-------------------------- REQ learnRequierement ---------------------------*/
/*----------------------------------------------------------------------------*/
private $queryRequirementsLearn;
function queryRequirementsLearn(){
  $db = new Database();
  $this->queryRequirementsLearn = new ReqWWYL($db);
}
function setIdCourseRequirementsLearn($idCourse){
  $this->queryRequirementsLearn -> setIdCourse($idCourse);
}
function getRequirementsLearn(){
  echo json_encode ($this->queryRequirementsLearn -> getRequirementsLearn());
}



/*----------------------------------------------------------------------------*/
/*-------------------------------  SECTIONS  ---------------------------------*/
/*----------------------------------------------------------------------------*/
private $section;
function querySection(){
  $db = new Database();
  $section = new Section($db);
  $this->section = $section;
}
function setIdCourseBySection($idCourse){
  $this->section->setIdCourse($idCourse);
}
function getSectionsByIdCourse(){
  return ($this->section->getSectionsByIdCourse());
}


/*----------------------------------------------------------------------------*/
/*----------------------------------  USER  ----------------------------------*/
/*----------------------------------------------------------------------------*/
      private $user;
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
      function loginForm(){/*1 positivo y falso es 0*/
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
          $_SESSION["userType"] = $this->userType;
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
      }
  }



?>
