<?php
    class ReqWWYL {
      private $idCourse;
      private $requirementOrLearn;
      private $idRequirementOrLearn;
      private $textRequirementOrLearn;
      private $con;
        function __construct($con) {
            $this->con = $con;
        }
        function setIdCourse($idCourse){
          $this->idCourse  = $idCourse;
        }
        function setRequirementOrLearn($requirementOrLearn){
          $this->requirementOrLearn  = $requirementOrLearn;
        }
        function setIdRequirementOrLearn($idRequirementOrLearn){
          $this->idRequirementOrLearn  = $idRequirementOrLearn;
        }
        function setTextRequirementOrLearn($textRequirementOrLearn){
          $this->textRequirementOrLearn  = $textRequirementOrLearn;
        }
       function saveRequirementsLearn(){
          try{
            $sql = "INSERT INTO `LearnRequirements` (`idCourse`,`requirementOrLearn`,`text`) VALUES ('$this->idCourse','$this->requirementOrLearn','')";
            $this->con->conn()->exec($sql);
            $this->con->close();
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
              }
        }
        function getRequirementsLearn(){
          try{
            $sql = $this->con->conn()->query(
              "SELECT * FROM `LearnRequirements`
              WHERE `idCourse` = '$this->idCourse'");
            $data = $sql->fetchAll(PDO::FETCH_OBJ);
            $this->con->close();
            return $data;
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
         }
         function updateRequirementLearn(){
           echo $this->textRequirementOrLearn."  ".$this->idRequirementOrLearn;
             try{
               $sql = "UPDATE `LearnRequirements` SET `text`='$this->textRequirementOrLearn' WHERE `idRequirementLearn` =  '$this->idRequirementOrLearn'";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }

         }

         function deleteById(){
             try{

               $sql =  "DELETE FROM `LearnRequirements` WHERE `idRequirementLearn`= '$this->idRequirementOrLearn'  ";
               $this->con->conn()->exec($sql);
               $this->con->close();
                 }
             catch(PDOException $e){
                 echo $query . "<br>" . $e->getMessage();
               }
         }





}
?>
