<?php
    class PDF {
      private $idPDF;
      private $idLecture;
      private $namePDF;
      private $linkPDF;
      private $idCourse;
      private $con;
        function __construct($con) {
            $this->con = $con;
        }
        function setIdPDF($idPDF){
          $this->idPDF  = $idPDF;
        }
        function setIdLecture($idLecture){
          $this->idLecture  = $idLecture;
        }
        function setNamePDF($namePDF){
          $this->namePDF  = $namePDF;
        } 
        function setLinkPDF($linkPDF){
          $this->linkPDF  = $linkPDF;
        }
        function setIdCourse($idCourse){
          $this->idCourse  = $idCourse;
        }


        function save(){
          try{
            $sql = "INSERT INTO `PDF`( `idLecture`,`namePDF`,`linkPDF`) VALUES ('$this->idLecture','','')";
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
