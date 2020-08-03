<?php
    class Section {
      private $idCourse;
      private $idLecture;
      private $idSection;

      private $sectionName;
      private $sectionName2;
        private $con;
        function __construct($con) {
            $this->con = $con;
        }
        function setIdCourse($idCourse){
          $this->idCourse  = $idCourse;
        }
        function setIdSection($idSection){
          $this->idSection  = $idSection;
        }
        function setIdLecture($idLecture){
          $this->idLecture  = $idLecture;
        }
        function setSectionName($sectionName){
          $this->sectionName  = $sectionName;
        }

        function save(){

          try{
            $sql = "INSERT INTO `Sections`( `idCourse`,`nameSection`) VALUES ('$this->idCourse','')";
            $this->con->conn()->exec($sql);
            $this->con->close();
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }

        function getSectionsByIdCourse(){
          try{
            $sql = $this->con->conn()->query(
              "SELECT * FROM `Sections` WHERE `idCourse`= '$this->idCourse'");
            $data = $sql->fetchAll(PDO::FETCH_OBJ);
            $this->con->close();
            return $data;
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
         }

         function updateSectionName(){
             try{
               $sql = "UPDATE
                         `Sections`SET `nameSection`= '$this->sectionName'
                       WHERE `idSection` = '$this->idSection'";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }
         function deleteSection(){
             try{
               $sql =  "DELETE FROM `Sections` WHERE `idSection`= '$this->idSection'  ";
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
