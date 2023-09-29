<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "DylanJames.Code@gmail.com";
    $subject = "New form submission from your website";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    exit();
}
?>
