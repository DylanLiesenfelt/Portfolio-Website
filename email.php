<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "dylanjames.code@gmail.com";

    $subject = "Contact Form Submission from $name";
    $headers = "From: $email";
    $message = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully. Thank you!";
    } else {
        echo "Email could not be sent. Please try again later.";
    }
}
