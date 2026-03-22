<!DOCTYPE html>
<html>
<body>

  <p id="text">Watch my color change!</p>
  <button onclick="changeColor()">Change Color</button>

  <script>
    function changeColor() {
      document.getElementById("text").style.color = "red";
    }
  </script>

</body>
</html>
