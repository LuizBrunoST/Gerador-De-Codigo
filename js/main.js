php = ace.edit("editor");
php.setTheme("ace/theme/monokai");
php.session.setMode("ace/mode/php");
php.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: true,
    tabSize: 4
})
$("#btn-gerar").click(function(){
    host = $("#server").val()
    user = $("#user").val()
    pass = $("#pass").val()
    myDB = $("#myDB").val()

    php.session.setValue(
`<?php
    $servername = "${host}";
    $username = "${user}";
    $password = "${pass}";

try {
    $conn = new PDO("mysql:host=$servername;dbname=${myDB}", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>`)


})



/*
try {
  $conn = new PDO("mysql:host=$servername;dbname=myDB", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
*/