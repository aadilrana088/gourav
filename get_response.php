<?php

require_once("config.php");
if ((isset($_POST['txtName'])&& $_POST['txtName'] !='') && (isset($_POST['txtEmail'])&& $_POST['txtEmail'] !='')) {
    require_once("contact_mail.php");
    $yourName = $conn->real_escape_string($_POST['txtName']);
    $yourEmail = $conn->real_escape_string($_POST['txtEmail']);
    $yourPhone = $conn->real_escape_string($_POST['txtPhone']);
    $comments = $conn->real_escape_string($_POST['txtMessage']);
    $sql="INSERT INTO tbl_contact (`Id`, `fldName`, `fldEmail`, `fldPhone`, `fldMessage`) VALUES ('".$yourName."','".$yourEmail."', '".$yourPhone."', '".$comments."')";
    if (!$result = $conn->query($sql)) {
        die('There was an error running the query [' . $conn->error . ']');
    } else {
        echo "Thank you! We will contact you soon";
    }
} else {
    echo "Please fill Name and Email";
}
?>