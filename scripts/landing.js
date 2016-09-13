var animatePoints = function() {
 console.log("animate points is working");
     var points = document.getElementsByClassName('point');
 
     var revealFirstPoint = function() {
         points[0].style.opacity = 1;
         points[0].style.transform = "scaleX(1) translateY(0)";
         points[0].style.msTransform = "scaleX(1) translateY(0)";
         points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
         console.log("revealFirstPoint points is working")
     };
 
     var revealSecondPoint = function() {
         points[1].style.opacity = 1;
         points[1].style.transform = "scaleX(1) translateY(0)";
         points[1].style.msTransform = "scaleX(1) translateY(0)";
         points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
         console.log("revealSecondPoint points is working")
     };
 
     var revealThirdPoint = function() {
         points[2].style.opacity = 1;
         points[2].style.transform = "scaleX(1) translateY(0)";
         points[2].style.msTransform = "scaleX(1) translateY(0)";
         points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
         console.log("revealThirdPoint points is working")
     };
 
     revealFirstPoint();
     revealSecondPoint();
     revealThirdPoint();
 
 };