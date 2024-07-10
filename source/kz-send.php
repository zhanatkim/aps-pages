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
    $mail->addAddress('info@asiapetroservice.kz');                 //Куда отправляем


    //Content
    $mail->isHTML(true);                                         //Письмо в формате HTML для использования тегов
    $mail->Subject = "Запрос с сайта asiapetroservice.kz";               //Тема письмы
    $mail->Body = "Имя: $userName. <br>Телефон: $userPhone. <br>Почта: $userEmail. <br>Сообщение: $userMessage"; //Тело письмы

    $mail->send();
    echo '<p style="font-size:20px; font-weight:700; width:600px; height: 200px; margin: 100px auto; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 40px; background-color: rgba(#EBE6DE, 0.4);box-shadow:rgba(99, 99, 99, 0.2) 0 2px 8px 0; border-radius: 20px;  "><span>Cұрау жіберілді.</span><a href="https://new.asiapetroservice.kz" style=" border-radius: 5px; text-decoration: none; padding: 10px 20px; background: #EF9840; color: #ffffff; :hover{background: #3A3838;}">ҚАЙТАРУ</a> </p>';
    // echo '<p style="font-size:20px; font-weight:700; width:300px; height: 200px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 40px;"><span>Запрос отправлен!</span><a href="https://new.asiapetroservice.kz" style="width: 100px; height: 50px; text-decoration: none; padding: 10px 20px; background: #EF9840; color: #ffffff;">ВЕРНУТЬСЯ</a> ';
    // echo '<p class="php-message"><span>Запрос отправлен.</span><a href="https://new.asiapetroservice.kz">ВЕРНУТЬСЯ</a></p>';
  } catch (Exception $e) {
    echo "Запрос не отправлен!. Ошибка отправки: {$mail->ErrorInfo}";
  }
?>
