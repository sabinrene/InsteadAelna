<?php

class Images
{
  private $image;
  private $name;
  private $tmp_name;
  private $error;
  private $size;
  private $allowed = array ('jpg','jpeg','png');
  private $fileDestination="../../Public/images/";
  private $upload = 0;
  private $idCourse;
  private $idUser;
  private $folder;
  private $dir;
  private $fileNameNew;

  function setIdCourse($idCourse){
    $this->idCourse = $idCourse;
  }
  function setIdUser($idUser){
    $this->idUser = $idUser;
  }
  function setFolder($folder){
    $this->folder = $folder;
  }
  function setImage($image){
    $this->image = $image;
    $this->name = $image['name'];
    $this->error = $image['error'];
    $this->size = $image['size'];
    $this->tmp_name = $image['tmp_name'];
  }
  function verifyImage (){
    $fileExt = explode('.',$this->name);
    $fileActualExt = strtolower(end($fileExt));
     if (in_array($fileActualExt,$this->allowed)) {
      if ($this->error===0) {
         if ($this->size < 1000000) {
           $this->$upload = 1;
        }else {
          echo "Your file is too big";
        }
      }else {
       echo "There was an error uploading your file!";
      }
    }else {
    //  echo "You cannot upload files of this type or your did not upload the image!". "\n";
    }
  }
  function createDirectory(){
    if ($this->$upload === 1) {
      /*Separa por . en dos palabras*/
    $fileExt = explode('.',$this->name);
    /*Separa la extension*/
    $fileActualExt = strtolower(end($fileExt));
    /*Da un nombre aleatorio y unico y luego lo une con la extension*/
    $this->fileNameNew = uniqid('',true).".".$fileActualExt;
    /*Crea la direccion del archivo*/
    $this->dir = $this->fileDestination.$this->folder.$this->fileNameNew ;
    }
  }
  function getNameImage(){
    return $this->fileNameNew;
  }
  function uploadImage(){
    if ($this->$upload === 1){
      move_uploaded_file($this->tmp_name,$this->dir);
    }
  }
}



 ?>
