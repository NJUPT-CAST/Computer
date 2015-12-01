<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<p>用户:</p>
	<span>
		<?php if($username)
		{echo $username;}
		else
			{echo "请先登录"；} 
		?>
	</span>
</body>
</html>