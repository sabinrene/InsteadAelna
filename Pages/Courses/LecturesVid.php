<!DOCTYPE html>
<html lang="en">

<head>

<title>Instead Cinema</title>

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<link rel="stylesheet" href="../../Public/CSS/Instead.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Course/LecturesVid.css">
<link rel="stylesheet" type="text/css" href="../../Public/CSS/Header.css">


<!-- Font Awesome + Favicon -->
<script src="https://kit.fontawesome.com/d2e9898f47.js" crossorigin="anonymous">    </script>
<link rel="icon" type="image/svg+xml" href="../../Public/images/Instead-favicon.png" sizes="any">

</head>



<body>

<div class="Lectures">

    <div class="VideoLeft">
        <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" class="VidLec">
        </iframe>
     </div>


    <div class="RightMenu">
        <div class="rM-Title"> <p>Provisioning Microsoft Azure Virtual Machines </p></div>
        <div class="rM-TableCont">Table of Contents</div>

            <div class="rM-Content">

                <!-- Accordion 1 -->
                <button class="accordion"> 01. Course Overview </button>
                <div class="panel">
                    <div class="panel-item">Lecture No.1 is the longest lecture you've ever seen
                        in the family of lectures spanning across the globe <span>15m 22s</span></div>
                </div>

                <!-- Accordion 2 -->
                <button class="accordion"> 02. Fluid Mechanics </button>
                <div class="panel">
                    <div class="panel-item">Fluids by White <span>15m 22s</span></div>
                    <div class="panel-item">Frank White <span>5m 2s</span></div>
                </div>

                <!-- Accordion 3 -->
                <button class="accordion"> 03. Thermodynamics </button>
                <div class="panel">
                    <div class="panel-item">Deborah Pence <span>10m 22s</span></div>
                </div>

                <!-- Accordion 4 -->
                <button class="accordion"> 04. Strengths of Materials </button>
                <div class="panel">
                    <div class="panel-item">Video 1 <span>1m 22s</span></div>
                    <div class="panel-item">Video 2 <span>5m 2s</span></div>
                </div>

                <!-- Accordion 5 -->
                <button class="accordion"> 05. Statics & Dynamics </button>
                <div class="panel">
                    <div class="panel-item">Video 1 <span>1m 22s</span></div>
                    <div class="panel-item">Video 2 <span>5m 2s</span></div>
                </div>

                <!-- Accordion 6 -->
                <button class="accordion"> 06. Radiation Protection </button>
                <div class="panel">
                    <div class="panel-item">Video 1 <span>1m 22s</span></div>
                    <div class="panel-item">Video 2 <span>5m 2s</span></div>
                </div>

                <!-- Accordion 7 -->
                <button class="accordion"> 07. Neutronics </button>
                <div class="panel">
                    <div class="panel-item">Video 1 <span>1m 22s</span></div>
                    <div class="panel-item">Video 2 <span>5m 2s</span></div>
                </div>

        </div>
    </div>

</div>



<script>
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
</script>
</body>
</html>
