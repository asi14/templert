<!DOCTYPE html>
  <html>
    <head>
      <title></title>
    </head>

    <body>
      <p>test</p>
      <?php
        $time = $_POST["time"] * 1000;
        echo $time;
        $temp = $_POST["temp"];
        echo $temp;
      ?>
    </body>
  </html>
