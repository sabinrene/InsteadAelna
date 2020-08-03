<?php
    class Users {
        private $idUser;
        private $firstName;
        private $lastName;
        private $email;
        private $phoneNumber;
        private $education;
        private $password;
        private $userType;
        private $con;

        function __construct($con) {
            $this->con = $con;
        }
        function setIdUser($idUser){
            $this->idUser = $idUser;
        }
        function setFirstName($firstName){
            $this->firstName = $firstName;
        }
        function setLastName($lastName){
            $this->lastName = $lastName;
        }
        function setEmail($email){
            $this->email = $email;
        }
        function setPhoneNumber($phoneNumber){
            $this->phoneNumber = $phoneNumber;
        }
        function setEducation($education){
            $this->education = $education;
        }
        function setPassword($password){
            $this->password = $password;
        }
        function setUserType($userType){
          $this->userType = $userType;
        }
       function save(){
          try{
            $sql = "INSERT INTO `Users`(firstname, lastname, email,phoneNumber,
                                        education,   password, userType)
                  VALUES ('$this->firstName', '$this->lastName',
                          '$this->email','$this->phoneNumber',
                          '$this->education','$this->password',
                          '$this->userType')";
            $this->con->conn()->exec($sql);
            $this->con->close();
            echo "The data was correctly recorded. Now you can log in";
              }
          catch(PDOException $e){
              echo $query . "<br>" . $e->getMessage();
            }
        }
      function get(){
        $sql = $this->con->conn()->query("SELECT * FROM `Users`");
        $data = $sql->fetchAll(PDO::FETCH_OBJ);
        $this->con->close();
        return $data;
       }
       function getById(){
         $sql = $this->con->conn()->query("SELECT * FROM `Users` WHERE `idUsers` = $this->idUser");
         $data = $sql->fetch(PDO::FETCH_OBJ);
         $this->con->close();
         return $data;
        }

}
?>
