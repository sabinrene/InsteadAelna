<?php
    class Database extends PDO
    {
      //Jairo
      // u742974447_insteadacademy
      // u742974447_jairo

      //Giratti
      // u301663255_test
      // u301663255_aelnajard
      private  $servername = 'localhost';
      private  $dbname = 'u742974447_insteadacademy';
      private  $username = 'u742974447_jairo';
        private  $password = 'Qwert123?...';
      private  $conn;
      public function __construct(){
        try {
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }
        catch(PDOException $e){
            echo "Connection failed: " . $e->getMessage();
            }
      }
      public function conn(){
        return   $this->conn;
      }
      public function close(){
          $this->conn = null;
      }
    }
?>
