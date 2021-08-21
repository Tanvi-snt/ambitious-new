<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$phone = $_POST['phone'];
	$toEmail = ' team@ambitious.studio ';
	$subject = 'Ambitious | Contact Us';
	$message = "
	 		<html lang='en' xml:lang='en'>\r\n
				<head>\r\n
				  <title>Ambitious | Contact Us</title>\r\n
				</head>\r\n
				<body>\r\n
					<table style='width:100%;border: 1px solid black;border-collapse: collapse;text-align:left;'> \r\n
					  <tr>\r\n
						<th style='padding: 15px;border: 1px solid black;border-collapse: collapse;'>Name</th>\r\n
						<th style='padding: 15px;border: 1px solid black;border-collapse: collapse;'>Email</th> \r\n
						<th style='padding: 15px;border: 1px solid black;border-collapse: collapse;'>Phone number</th>\r\n
					  </tr>\r\n
					  <tr>\r\n
						<td style='padding: 15px;border: 1px solid black;border-collapse: collapse;'>".$name."</td>\r\n
						<td style='padding: 15px;border: 1px solid black;border-collapse: collapse;'>".$email."</td>\r\n
						<td style='padding: 15px;border: 1px solid black;border-collapse: collapse;'>".$phone."</td>\r\n
					  </tr>\r\n
					</table>\r\n
				</body>\r\n
			</html>\r\n
			";			
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

	// More headers
	//$headers .= 'From:'.$ccMails. "\r\n";
	$sent = mail($toEmail, $subject, $message, $headers);
	
	if( $sent == true ) {
        echo 	"Thank you for reaching out to us. We will get back to you shortly!!";
    }else {
        echo "Message could not be sent...";
    }



?>