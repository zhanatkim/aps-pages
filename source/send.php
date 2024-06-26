<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\SMTP;
  use PHPMailer\PHPMailer\Exception;

  require 'PHPMailer/Exception.php';
  require 'PHPMailer/PHPMailer.php';
  require 'PHPMailer/SMTP.php';

  $mail = new PHPMailer(true);

  // Записываем в переменные поля форм по атрибуту name

  $userName = $_POST['user-name'];
  $userPhone = $_POST['user-phone'];
  $userEmail = $_POST['user-email'];
  $userMessage = $_POST['user-message'];

  try {
    //Server settings
    $mail->SMTPDebug  = SMTP::DEBUG_SERVER;
    $mail->CharSet    = "utf-8";
    $mail->isSMTP();
    $mail->Host       = 'pkz5.hoster.kz';                       //SMTP сервер, зависит от почты отправки
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'test@asiapetroservice.kz';                  //SMTP имя пользователя (почта с которой отправляем письмо)
    $mail->Password   = 'Uy8hg20$7';                     //SMTP password (для яндех и мэйл ру генерируем по ссылке в инструкции, для gmail это пороль от почты)
    $mail->SMTPSecure = 'ssl';                                  //Шифрование
    $mail->Port       = 465;                                    //Порт

    //Recipients
    $mail->setFrom('test@asiapetroservice.kz');                       //Откуда отправляем
    $mail->addAddress('zhanatkim@gmail.com');                 //Куда отправляем


    //Content
    $mail->isHTML(true);                                         //Письмо в формате HTML для использования тегов
    $mail->Subject = "Запрос с сайта asiapetroservice.kz";               //Тема письмы
    $mail->Body = "Имя: $userName. <br>Телефон: $userPhone. <br>Почта: $userEmail. <br>Сообщение: $userMessage"; //Тело письмы

    $mail->send();
    echo 'Запрос отправлен!';
  } catch (Exception $e) {
    echo "Запрос не отправлен!. Ошибка отправки: {$mail->ErrorInfo}";
  }
?>
