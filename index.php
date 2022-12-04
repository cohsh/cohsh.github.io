<!DOCTYPE html>
<?php
  $title = "Kohei Ishii (石井 浩平)";
  $page = $_GET['page'];
  $root = $_SERVER['DOCUMENT_ROOT'];
?>
<html lang="ja">
  <head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <title><?php echo $title; ?></title>
    <style type="text/css">
<?php
        if ($page == "") {
            echo "#top";
        } else {
            echo "#$page";
        }
?>
        {background-color:#DAEAD0}
    </style>
    <script>
        MathJax = {
            chtml: {
                matchFontHeight: false
            },
            tex: {
                inlineMath: [['$', '$']]
            }
        };
    </script>
    <script id="MathJax-script" async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
    </script>
  </head>
  <body>
      <header><h1><?php echo $title; ?></h1></header>
    <div class="side" id="for">
      <ul class="side">
        <li id="top"><a href="index.php">Top</a></li>
        <li id="research"><a href="index.php?page=research">Research</a></li>
        <li id="cv"><a href="index.php?page=cv">CV</a></li>
        <li id="publication"><a href="index.php?page=publication">Publication</a></li>
        <li id="presentation"><a href="index.php?page=presentation">Presentation</a></li>
      </ul>
    </div>
    <div class="container">
      <div class="main"><?php
        switch ($page){
            case "research":
            case "cv":
            case "publication":
            case "presentation":
                include($root."/include/".$page.".php");
                break;
            default:
                include($root."/include/profile.php");
            }?>
        </div>
    </div>
    <footer><br></footer> 
  </body>
</html>
