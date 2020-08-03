<?php
require_once('../config/database.php');
require_once('read.php');
require_once('../model/Course.php');
require_once('../model/users.php');
require_once('../model/Lectures.php');
require_once('../model/Images.php');
require_once('../model/RecWWYL.php');
require_once('../model/PDF.php');
require_once('../model/UserCourse.php');

/*--------------------------------- COURSE -----------------------------------*/
    if ($_POST['type']=="updateCourse") {
      session_start();
      $updateCourse = new Update();
      $updateCourse->queryCourse();
      if (isset($_POST['timeCourseStart'])) {
        $timeCourseStart =$_POST['timeCourseStart'];
      }
      else {
        $timeCourseStart=2000-01-01;
      }
      if (isset($_POST['timeCourseFinish'])) {
        $timeCourseFinish =$_POST['timeCourseFinish'];
      }
      else {
        $timeCourseFinish=2000-01-01;
      }

      if (isset( $_FILES['file']['error'] )) {

          $updateCourse->queryImage();
          $updateCourse->setValuesImage($_FILES['file'],$_SESSION["idUser"],$_SESSION["idCourse"],'02-Course/Img-Course/');
          $updateCourse->uploadImage();
 

          $updateCourse->setValuesCourse(
            $_POST['courseTitle'], $_POST['courseSubtitle'], $_POST['courseDescription'],
            $_POST['levelOption'],$_POST['moduleOption'],$_POST['topicOption'],
            $_POST['courseTaught'],$_SESSION["idCourse"],$_POST['price'],
            $timeCourseStart,$timeCourseFinish,$_POST['liveOnline']
          );
          $updateCourse->upadteCourseImage();

      }

      $updateCourse->setValuesCourse(
        $_POST['courseTitle'], $_POST['courseSubtitle'], $_POST['courseDescription'],//
        $_POST['levelOption'],$_POST['moduleOption'],$_POST['topicOption'],
        $_POST['courseTaught'],$_SESSION["idCourse"],$_POST['price'],//
        $_POST['timeCourseStart'],$_POST['timeCourseFinish'],$_POST['liveOnline']
      );

      $updateCourse->upadteCourse();
      echo "course has been updated";
    }
/*--------------------------------- SECTION ----------------------------------*/
    elseif ($_POST['type']=="updateSectionName") {
      $updateSectionName = new Update();
      $updateSectionName->querySection();
      $updateSectionName->setIdSection($_POST['idSection']);
      $updateSectionName->setSectionName($_POST['inputSectionName']);
      $updateSectionName->updateSectionName();
    }
/*--------------------------------- LECTURE ----------------------------------*/
    elseif ($_POST['type']=="updateLecture") {
      $updateLecture = new Update();
      $updateLecture->queryLecture();
      $updateLecture->setIdLecture($_POST['idLecture']);

      $updateLecture->setInsertNameLecture($_POST['insertNameLecture']);
      $updateLecture->setInsertiVideoLecture($_POST['insertiVideoLecture']);
      $updateLecture->setDurationLectureMin($_POST['durationLectureMin'],$_POST['durationLectureSec']);
      $updateLecture->setTime($_POST['startTime'],$_POST['endTime']);

      $updateLecture->updateLecture();
    }


    elseif ($_POST['type']=="updateLectureName") {
      $updateLecture = new Update();
      $updateLecture->queryLecture();
      $updateLecture->setIdLecture($_POST['idLecture']);

      $updateLecture->setInsertNameLecture($_POST['inserNameLecture']);
      $updateLecture->updateLectureName();
    }
/*--------------------------------- REQUIREMENT ----------------------------------*/
    elseif ($_POST['type']=="updateRequirementLearn") {
      $updateRequirement = new Update();
      $updateRequirement->queryRequirementsLearn();
      $updateRequirement->setIdRequirementOrLearn($_POST['idRequirementLearn']);
      $updateRequirement->setTextRequirementOrLearn($_POST['requierementLearn']);
      $updateRequirement->updateRequirementLearn();
    }
/*--------------------------------- PDF ----------------------------------*/
    elseif ($_POST['type']=="updateNamePDF") {

      $savePDF = new Update();
      $savePDF->queryPDF();
      $savePDF->setIdPDF($_POST['idPDF']);
      $savePDF->setNamePDF($_POST['namePDF']);
      $savePDF->updateNamePDF();

    }
    elseif ($_POST['type']=="updateLinkPDF") {

      $savePDF = new Update();
      $savePDF->queryPDF();
      $savePDF->setIdPDF($_POST['idPDF']);
      $savePDF->setLinkPDF($_POST['linkPDF']);
      $savePDF->updateLinkPDF();

    }

    /*------------------------------- UserCourse  --------------------------------*/
    elseif ($_POST['type']=="updateUserCourse") {
      echo "entramos";
      session_start();
      $updateUserCourse = new Update();
      $updateUserCourse->queryBuy();
      $updateUserCourse->setData($_SESSION['idUser'],$_POST['idCourse'],"buyCourse");
      $updateUserCourse->updateBuyCourse();
    }



  class Update
   {
     /*----------------------------------------------------------------------------*/
     /*-------------------------------- BUY -----------------------------------*/
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
         function updateBuyCourse(){


           $this->buy->update();
         }






/*----------------------------------------------------------------------------*/
/*-------------------------------- PDF -----------------------------------*/
/*----------------------------------------------------------------------------*/
     private $PDF;
     function queryPDF(){
       $db = new Database();
       $this->PDF = new PDF($db);
     }
     function setIdPDF($idPDF){
       $this->PDF->setIdPDF($idPDF);
     }
     function setNamePDF($namePDF){
       $this->PDF->setNamePDF($namePDF);
     }
     function setLinkPDF($linkPDF){
       $this->PDF->setLinkPDF($linkPDF);
     }
     function updateNamePDF(){
       $this->PDF->updateNamePDF();
     }
     function updateLinkPDF(){
       $this->PDF->updateLinkPDF();
     }

/*----------------------------------------------------------------------------*/
/*------------------------------- REQUIREMENT ------------------------------------*/
/*----------------------------------------------------------------------------*/
      private $queryRequirementsLearn;
      function queryRequirementsLearn(){
        $db = new Database();
        $this->queryRequirementsLearn = new ReqWWYL($db);
      }
      function setIdRequirementOrLearn($idRequirementOrLearn){
        $this->queryRequirementsLearn -> setIdRequirementOrLearn($idRequirementOrLearn);
      }
      function setTextRequirementOrLearn($textRequirementOrLearn){
        $this->queryRequirementsLearn -> setTextRequirementOrLearn($textRequirementOrLearn);
      }
      function updateRequirementLearn(){
        $this->queryRequirementsLearn -> updateRequirementLearn();
      }
/*----------------------------------------------------------------------------*/
/*------------------------------- LECTURE ------------------------------------*/
/*----------------------------------------------------------------------------*/
       private $lecture;
       function queryLecture(){
         $db = new Database();
         $this->lecture = new Lectures($db);
       }
       function setIdLecture($idLecture){
          $this->lecture->setIdLecture($idLecture);
      }
      function setInsertNameLecture($insertNameLecture){
         $this->lecture->setLectureName($insertNameLecture);
      }
      function setInsertiVideoLecture($insertiVideoLecture){
         $this->lecture->setVideoLink($insertiVideoLecture);
      }
      function setDurationLectureMin($durationLectureMin,$durationLectureSec){
        $durationLectureSec = ($durationLectureSec/60) ;
        $durationLecture = $durationLectureMin + $durationLectureSec;
        $this->lecture->setVideoDuration($durationLecture);
      }
      function setTime($startTime, $endTime){
        $this->lecture->setStartTime($startTime);
        $this->lecture->setEndTime($endTime);

      }
      function updateLecture(){
         $this->lecture->updateLecture();
      }
      function updateLectureName(){

        $this->lecture->updateLectureName();
      }

/*----------------------------------------------------------------------------*/
/*------------------------------- SECTION ------------------------------------*/
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
      function setSectionName($sectionName){
        $this->section->setSectionName($sectionName);
      }
      function updateSectionName(){
        $this->section->updateSectionName();
      }

/*----------------------------------------------------------------------------*/
/*--------------------------------- IMAGE ------------------------------------*/
/*----------------------------------------------------------------------------*/
    private $image;
    private $imageName;
    function queryImage(){
      $image = new Images();
      $this->image = $image;
    }
    function setValuesImage($image,$user,$course,$folder){
      $this->image->setImage($image);
      $this->image->setIdUser($user);
      $this->image->setIdCourse($course);
      $this->image->setFolder($folder);
    }
    function uploadImage(){
      $this->image->verifyImage();
      $this->image->createDirectory();
      $this->image->uploadImage();
      $this->$imageName =$this->image->getNameImage();

    }

/*----------------------------------------------------------------------------*/
/*--------------------------------- COURSE -----------------------------------*/
/*----------------------------------------------------------------------------*/
    private $course;
    private $idUser;

    function queryCourse(){
      $db = new Database();
      $course = new Courses($db);
      $this->course = $course;
    }

    function  setValuesCourse(
    $courseTitle,$courseSubtitle,$courseDescription,//
    $levelOption,$moduleOption,$topicOption,
    $courseTaught,$idCourse,$price,$timeCourseStart,$timeCourseFinish,$liveOnline){
      $this->course->setCourseTitle($courseTitle);
      $this->course->setCourseSubtitle($courseSubtitle);
      $this->course->setCourseDescription($courseDescription);
      $this->course->setLevelCourse($levelOption);
      $this->course->setModuleOption($moduleOption);
      $this->course->setTopicOption($topicOption);
      $this->course->setTaughtCourse($courseTaught);
      $this->course->setIdCourse($idCourse);
      $this->course->setImagenName($this->$imageName);
      $this->course->setPrice($price);
      $this->course->setTimeCourseStart($timeCourseStart);//
      $this->course->setTimeCourseFinish($timeCourseFinish);
      $this->course->setLiveOnline($liveOnline);
    }
    function upadteCourse(){
      $this->course-> upadate();
    }
    function upadteCourseImage(){
      $this->course-> upadateImage();
    }

    function saveCourse(){
      $this->course-> save();
    }




/*----------------------------------------------------------------------------*/
/*--------------------------------- USERS -----------------------------------*/
/*----------------------------------------------------------------------------*/
/*
     private $user;
     private $firstName;
     private $lastName;
     private $email;
     private $phoneNumber;
     private $education;
     private $password;
     private $userType;
     private $verification;

     function queryUser(){
       $db = new Database();
       $user = new Users($db);
       $this->user = $user;
     }
     function verification(){
       $this->verification = 1;
       $registerForm = new Read();

       $registerForm->queryUser();
       $registerForm->setEmail($this->email);
       $registerForm->setPassword($this->password);


       if ($registerForm->emptyFields() ==1) {

         $this->verification = 0;
       }
      elseif ($registerForm->userExistence()==1) {
         $this->verification = 0;
       }
     }

     function setValuesUsers($firstName, $lastName, $email, $phoneNumber,
     $education,$password,$userType){
     $this->user->setFirstName($firstName);
     $this->user-> setLastName($lastName);
     $this->user-> setEmail($email);
     $this->user-> setPhoneNumber($phoneNumber);
     $this->user-> setEducation($education);
     $this->user-> setPassword($password);
     $this->user-> setUserType($userType);
     }


     function save(){
       $this->user-> save();

       if ($this->verification==1) {
         $this->user-> save();
       }
       else {
         echo 'There was a problem signing up. Check your information';
       }
     }*/
   }


?>
