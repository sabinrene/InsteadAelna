<?php
    class Lectures {
      private $idCourse;
      private $idLecture;
      private $idSection;
      private $lectureName;
      private $videoLink;
      private $videoDuration;
      private $sectionName;
      private $sectionName2;
      private $startTime;
      private $endTime;

        private $con;
        function __construct($con) {
            $this->con = $con;
        }

        function setStartTime($startTime){
          $this->startTime  = $startTime;
        }
        function setEndTime($endTime){
            $this->endTime  = $endTime;
        }





        function setIdCourse($idCourse){
          $this->idCourse  = $idCourse;
        }
        function setIdSection($idSection){
          $this->idSection  = $idSection;
        }
        function setSectionName($lectureName){
          $this->lectureName  = $lectureName;
        }
        function setIdLecture($idLecture){
          $this->idLecture  = $idLecture;
        }
        function setLectureName($sectionName){
          $this->sectionName  = $sectionName;
        }
        function setVideoLink($videoLink){
          $this->videoLink  = $videoLink;
        }
        function setVideoDuration($videoDuration){
          $this->videoDuration  = $videoDuration;
        }

        function save(){
          try{
            $sql = "INSERT INTO `Lectures`( `idSection`, `nameLecture`, `video`) VALUES ('$this->idSection','','')";
            $this->con->conn()->exec($sql);
            $this->con->close();
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }

        function getLecturesByIdSection(){

          try{
            $sql = $this->con->conn()->query(
              "SELECT * FROM `Lectures`
              WHERE `idSection` = '$this->idSection'");
            $data = $sql->fetchAll(PDO::FETCH_OBJ);
            $this->con->close();
            return $data;
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
         }
         function getLectureByIdLecture(){

           try{
             $sql = $this->con->conn()->query(
               "SELECT * FROM `Lectures`
               WHERE `idLecture` = '$this->idLecture'");
             $data = $sql->fetch(PDO::FETCH_OBJ);
             $this->con->close();
             return $data;
               }
           catch(PDOException $e){
               echo $query . "<br>" . $e->getMessage();
             }
          }
         function getLecture(){
           try{
             $sql = $this->con->conn()->query(
               "SELECT * FROM `Lectures`
               WHERE `idLecture` = '$this->idLecture'");
             $data = $sql->fetch(PDO::FETCH_OBJ);
             $this->con->close();
               }
           catch(PDOException $e){
               echo $query . "<br>" . $e->getMessage();
             }
             return $data;
          }

         function updateLecture(){
             try{
               $sql = "UPDATE `Lectures` SET
               `nameLecture`='$this->sectionName',
               `duracion`= '$this->videoDuration',
               `video`='$this->videoLink',


               `startTime`='$this->startTime',
               `endTime`='$this->endTime'

               WHERE `idLecture` =  '$this->idLecture'";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }

         }
         function updateLectureName(){
             try{
               $sql = "UPDATE `Lectures` SET `nameLecture`='$this->sectionName' WHERE `idLecture` =  '$this->idLecture'";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }

         }
         function deleteSection(){
             try{

               if ($this->sectionName=="null") {
                 $this->sectionName2 = 'IS NULL';
               }
               else {
                 $this->sectionName2 = $this->sectionName;
               }
               echo $this->sectionName2;
               $sql =  "DELETE FROM `Lectures` WHERE `section`= '$this->sectionName' AND `idCourse`= '$this->idCourse' ";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }
         function deleteLecture(){
             try{

               echo $this->sectionName2;
               $sql =  "DELETE FROM `Lectures` WHERE `idLecture`= '$this->idLecture' ";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }



}
?>
