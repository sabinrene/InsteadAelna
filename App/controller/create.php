
<?php
      require_once('../config/database.php');
      require_once('read.php');
      require_once('../model/Course.php');
      require_once('../model/users.php');
      require_once('../model/Lectures.php');
      require_once('../model/Section.php');
      require_once('../model/RecWWYL.php');
      require_once('../model/PDF.php');
      require_once('../model/UserCourse.php');


/*--------------------------------- USERS ------------------------------------*/
    if ($_POST['type']=="saveUsers") {
      $registerForm = new Create();
      $registerForm-> queryUser();

      $registerForm->setValuesUsers($_POST['firstName'],$_POST['lastName'],
      $_POST['email'],$_POST['phoneNumber'],$_POST['education'],$_POST['password'],
      $_POST['userType']);
      $registerForm-> verification();
      $registerForm-> save();
    }

/*--------------------------------- COURSE -----------------------------------*/
    elseif ($_POST['type2']=="saveCourse") {
      session_start();
      $createCourse = new Create();
      $createCourse->queryCourse();
      $createCourse->setValuesCourse(
        $_POST['courseTitle'], $_POST['moduleOption'],
        $_POST['topicOption'],$_POST['levelCourse'],$_POST['price']);
      $createCourse->saveCourse();

      $readLastIdCourse = new Read();
      $readLastIdCourse->queryCourse();
      $idCourse =  $readLastIdCourse->getLastIdCourse()->idCourse;

      $requirement = new Create();
      $requirement->queryRequirementsLearn();
      $requirement->setIdCourseRequirementsLearn($idCourse);
      $requirement->setRequirementOrLearn('requirement');
      $requirement->saveRequirementsLearn();

      $learn = new Create();
      $learn->queryRequirementsLearn();
      $learn->setIdCourseRequirementsLearn($idCourse);
      $learn->setRequirementOrLearn('learn');
      $learn->saveRequirementsLearn();

    }
/*---------------------------- LearnRequierement -----------------------------*/
    elseif ($_POST['type']=="createLearn") {
      session_start();
      $learn = new Create();
      $learn->queryRequirementsLearn();
      $learn->setIdCourseRequirementsLearn($_SESSION["idCourse"]);
      $learn->setRequirementOrLearn('learn');
      $learn->saveRequirementsLearn();

    }
    elseif ($_POST['type']=="createRequierment") {
      session_start();
      $requirement = new Create();
      $requirement->queryRequirementsLearn();
      $requirement->setIdCourseRequirementsLearn($_SESSION["idCourse"]);
      $requirement->setRequirementOrLearn('requirement');
      $requirement->saveRequirementsLearn();
    }
/*--------------------------------- SECTION ----------------------------------*/
elseif ($_POST['type2']=="saveSection") {

  session_start();
  $section = new Create();
  $section->querySection();
  $section->setIdCourseSection($_SESSION["idCourse"]);

  $section->saveSection();
}
/*--------------------------------- LECTURE ----------------------------------*/
elseif ($_POST['type']=="saveLectures") {
  $readLectures = new Create();
  $readLectures->queryLecture();
  $readLectures->setIdSectionLecture($_POST['idSection']);
  $readLectures->saveLecture();
}

/*--------------------------------- PDF ----------------------------------*/
elseif ($_POST['type']=="savePDF") {
  echo "lecture is   :   ". $_POST['idLecture'];
  $savePDF = new Create();
  $savePDF->queryPDF();
  $savePDF->setIdLectureToPDF($_POST['idLecture']);
  $savePDF->savePDF();
}

/*------------------------------- UserCourse  --------------------------------*/
elseif ($_POST['type']=="addToCard") {
  session_start();
  $buyCourse = new Create();
  $buyCourse->queryBuy();
  $buyCourse->setData($_SESSION['idUser'],$_SESSION['idCourse'],$_POST['type']);
  $buyCourse->saveBuyCourse();
}

elseif ($_POST['type']=="createUserCourse") {
  session_start();
  $buyCourse = new Create();
  $buyCourse->queryBuy();
  $buyCourse->setData($_SESSION['idUser'],$_POST['idCourse'],'buyCourse');
  $buyCourse->saveBuyCourse();
}



class Create
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
    function saveBuyCourse(){
      $this->buy->save();
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
      function savePDF(){
      $this->PDF ->save();
      }

/*----------------------------------------------------------------------------*/
/*-------------------------------- REQ WWYL ----------------------------------*/
/*----------------------------------------------------------------------------*/
private $queryRequirementsLearn;
function queryRequirementsLearn(){
  $db = new Database();
  $this->queryRequirementsLearn = new ReqWWYL($db);
}
function setIdCourseRequirementsLearn($idCourse){
  $this->queryRequirementsLearn -> setIdCourse($idCourse);
}

function setRequirementOrLearn($requirementOrLearn){
  $this->queryRequirementsLearn ->setRequirementOrLearn($requirementOrLearn);
}
function saveRequirementsLearn(){
  $this->queryRequirementsLearn -> saveRequirementsLearn();
}
/*----------------------------------------------------------------------------*/
/*-------------------------------- LECTURE -----------------------------------*/
/*----------------------------------------------------------------------------*/
 private $lecture;

 function queryLecture(){
   $db = new Database();
   $lecture = new Lectures($db);
   $this->lecture = $lecture;
 }
 function setIdSectionLecture($idSection){
   $this->lecture->setIdSection($idSection);
 }
 function saveLecture(){
 $this->lecture ->save();
 }

/*----------------------------------------------------------------------------*/
/*-------------------------------- SECTION -----------------------------------*/
/*----------------------------------------------------------------------------*/
private $section;

function querySection(){
  $db = new Database();
  $section = new Section($db);
  $this->section = $section;
}
function setIdCourseSection($idCourse){
  $this->section ->setIdCourse($idCourse);
}
function saveSection(){
$this->section ->save();
}



/*----------------------------------------------------------------------------*/
/*--------------------------------- USERS -----------------------------------*/
/*----------------------------------------------------------------------------*/

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

       /*if ($this->verification==1) {
         $this->user-> save();
       }
       else {
         echo 'There was a problem signing up. Check your information';
       }*/
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
   function setValuesCourse($courseTitle, $moduleOption, $topicOption,$levelCourse,$price){
     $this->course->setCourseTitle($courseTitle);
     $this->course->setIdUser($_SESSION["idUser"]);
     $this->course->setModuleOption($moduleOption);
     $this->course->setTopicOption($topicOption);
     $this->course->setLevelCourse($levelCourse);
     $this->course->setPrice($price);


   }
   function saveCourse(){
     $this->course-> save();
   }





   }


?>
