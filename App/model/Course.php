<?php
    class Courses {
        private $idCourse;
        private $courseTitle;
        private $courseSubtitle;
        private $courseDescription;
        private $levelCourse;
        private $moduleOption;
        private $topicOption;
        private $courseTaught;
        private $imageName;
        private $idUsers;
        private $price;
        private $timeCourseStart;
        private $timeCourseFinish;
        private $liveOnline;

        private $con;
        function __construct($con) {
            $this->con = $con;
        }
        function setLiveOnline($liveOnline){
            $this->liveOnline = $liveOnline;
        }
        function setTimeCourseStart($timeCourseStart){
            $this->timeCourseStart = $timeCourseStart;
        }
        function setTimeCourseFinish($timeCourseFinish){
            $this->timeCourseFinish = $timeCourseFinish;
        }
        function setPrice($price){
            $this->price = $price;
        }
        function setIdCourse($idCourse){
            $this->idCourse = $idCourse;
        }
        function setCourseTitle($courseTitle){
            $this->courseTitle = $courseTitle;
        }
        function setCourseSubtitle($courseSubtitle){
            $this->courseSubtitle = $courseSubtitle;
        }
        function setCourseDescription($courseDescription){
            $this->courseDescription = $courseDescription;
        }
        function setLevelCourse($levelCourse){
            $this->levelCourse = $levelCourse;
        }
        function setModuleOption($moduleOption){
            $this->moduleOption = $moduleOption;
        }
        function setTopicOption($topicOption){
            $this->topicOption = $topicOption;
        }
        function setTaughtCourse($courseTaught){
            $this->courseTaught = $courseTaught;
        }
        function setImagenName($imageName){
            $this->imageName = $imageName;
            //echo $this->imageName;
        }
        function setIdUser($idUsers){
            $this->idUsers = $idUsers;
        }
        function save(){
          try{
            $sql = "INSERT INTO `Courses`
            (courseTitle, idUsers, topic,module,level,price)
                  VALUES ('$this->courseTitle', '$this->idUsers',
                          '$this->topicOption','$this->moduleOption',
                          '$this->levelCourse','$this->price')";
            $this->con->conn()->exec($sql);
            $this->con->close();
            echo "The data was correctly recorded.";
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }
      function getCourses(){

        $sql = $this->con->conn()->query("SELECT * FROM `Courses`");
        $data = $sql->fetchAll(PDO::FETCH_OBJ);
        $this->con->close();
        return $data;
       }
       function getCourseById(){
         $sql = $this->con->conn()->query(
           "SELECT * FROM `Courses`WHERE `idCourse` = $this->idCourse"
         );
         $data = $sql->fetch(PDO::FETCH_OBJ);
         $this->con->close();
         return $data;
        }

        function getCourseByIdUser(){
          try{
            $sql = $this->con->conn()->query(
              "SELECT * FROM `Courses` WHERE `idUsers` = '$this->idUsers'"
            );
            $data = $sql->fetch(PDO::FETCH_OBJ);
            $this->con->close();
          }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
            return $data;
         }

        function getLastIdCourse(){
          $sql = $this->con->conn()->query(
            "SELECT `idCourse` FROM `Courses` ORDER BY idCourse DESC LIMIT 1"
          );
          $data = $sql->fetch(PDO::FETCH_OBJ);
          $this->con->close();
          return $data;
        }

        function upadate(){/*`imagecourse`= '$this->imageName',*/
          try{
            $sql = "UPDATE
                      `Courses`SET `courseTitle`= '$this->courseTitle',
                      `courseSubtitle`= '$this->courseSubtitle',
                      `courseDescription`= '$this->courseDescription',
                      `level`= '$this->levelCourse',
                      `module`= '$this->moduleOption',
                      `topic`= '$this->topicOption',

                      `primarylyTaught`= '$this->courseTaught',
                      `price`= '$this->price',



                      `startTime`= '$this->timeCourseStart',
                      `endTime`= '$this->timeCourseFinish',

                      `liveOnline`= '$this->liveOnline'



                    WHERE `idCourse` = $this->idCourse";
            $this->con->conn()->exec($sql);
            $this->con->close();
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }
        function upadateImage(){
          try{
            $sql = "UPDATE
                      `Courses`SET `imagecourse`= '$this->imageName'
                    WHERE `idCourse` = $this->idCourse";
            $this->con->conn()->exec($sql);
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }






}
?>
