<?php
    class Schedule {
      private $idCourse;
      private $idWeek;
      private $active;
      private $startTime;
      private $finishTime;
      private $con;
        function __construct($con) {
            $this->con = $con;
        }
        function setIdCourse($idCourse){
          $this->idCourse  = $idCourse;
        }
        function setIdWeek($idWeek){
          $this->idWeek  = $idWeek;
        }
        function setActive($active){
          $this->active  = $active;
        }
        function setStartTime($startTime){
          $this->startTime  = $startTime;
        }
        function setFinishTime($finishTime){
          $this->finishTime  = $finishTime;
        }


        function save(){
          try{
            $sql = "INSERT INTO `Schedule`(`idCourse`, `numberDay`,`day`,`startTime`,`finishTime`)
            VALUES ('$this->idCourse','$this->active','Monday','$this->startTime','$this->finishTime'),
                ('$this->idCourse','$this->active','Tuesday','$this->startTime','$this->finishTime'),
                ('$this->idCourse','$this->active','Wednesday','$this->startTime','$this->finishTime'),
                ('$this->idCourse','$this->active','Thursday','$this->startTime','$this->finishTime'),
                ('$this->idCourse','$this->active','Friday','$this->startTime','$this->finishTime'),
                ('$this->idCourse','$this->active','Saturday','$this->startTime','$this->finishTime'),
                ('$this->idCourse','$this->active','Sunday','$this->startTime','$this->finishTime')
                ";

            $this->con->conn()->exec($sql);
            $this->con->close();
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }

        function update(){
          echo $this->idCourse."string".$this->idWeek."      ";
            try{
              $sql = "UPDATE `Schedule` SET
              `numberDay` =  '$this->active',
              `startTime` =  '$this->startTime',
              `finishTime` =  '$this->finishTime'
              WHERE `idCourse` =  '$this->idCourse' AND `day` =  '$this->idWeek'";
              $this->con->conn()->exec($sql);
              $this->con->close();
                }
            catch(PDOException $e){
                echo $query . "<br>" . $e->getMessage();
              }
        }





        function getPDFByIdCourse(){
          try{
            $sql = $this->con->conn()->query(
              "SELECT `PDF`.* FROM `PDF` WHERE `PDF`.idLecture IN (
                SELECT `Lectures`.idLecture FROM `Lectures` WHERE `Lectures`.idSection IN (
                  SELECT `Sections`.idSection FROM `Sections` WHERE `Sections`.idCourse = $this->idCourse ) )");
            $data = $sql->fetchAll(PDO::FETCH_OBJ);
            $this->con->close();
            return $data;
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
         }


        function getPDFByIdLecture(){
          try{
            $sql = $this->con->conn()->query(
              "SELECT * FROM `PDF`
              WHERE `idLecture` = '$this->idLecture'");
            $data = $sql->fetchAll(PDO::FETCH_OBJ);
            $this->con->close();
            return $data;
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
         }
         function getPDFByIdPDF(){
           try{
             $sql = $this->con->conn()->query(
               "SELECT * FROM `PDF`
               WHERE `idPDF` = '$this->idPDF'");
             $data = $sql->fetch(PDO::FETCH_OBJ);
             $this->con->close();
             return $data;
               }
           catch(PDOException $e){
               echo $query . "<br>" . $e->getMessage();
             }
          }

         function updateNamePDF(){
           echo $this->namePDF;
             try{
               $sql = "UPDATE `PDF` SET
               `namePDF`='$this->namePDF'
               WHERE `idPDF` =  '$this->idPDF'";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }
         function updateLinkPDF(){
             try{
               $sql = "UPDATE `PDF` SET
               `linkPDF`= '$this->linkPDF'
               WHERE `idPDF` =  '$this->idPDF'";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }
         function deletePDF(){

             try{

               $sql =  "DELETE FROM `PDF` WHERE `idPDF`= '$this->idPDF' ";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }
         function deletePDFByidLecture(){

             try{

               $sql =  "DELETE FROM `PDF` WHERE `idLecture`= '$this->idLecture' ";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }



}
?>
