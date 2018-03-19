<?php
if($_POST["submit"]) {
    $recipient=(string)"zachbwell@gmail.com";
    $subject=(string)"Mailing List Form";
    $senderF=(string)$_POST["first"];
    $senderL=(string)$_POST["last"];
    $senderEmail=(string)$_POST["email"];
    $location=(string)$_POST["location"];
    $mailBody=(string)"Name: $senderF $senderL\nEmail: $senderEmail\nLocation: $location\n";

    mail($recipient, $subject, $mailBody);

    $thankYou="<p>Thank you! You have Joined the Mailing List.</p>";
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <!--[if lt IE 9]><script src=”http://html5shim.googlecode.com/snv/trunk/html5.js”></script><![end if]-->
    <title>Mel Wade Mailing List</title>
    <meta name="description" content="Join Mailing list for Mel Wade Music">
    <meta name="author" content="Zach Bramwell">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="icon" type="image/png" href="Images/melfavicon.png" />
</head>
<body>
    <header>
        <h1>Mel Wade Music Mailing List</h1>
        <a href="index.html"><img src="Images/Mel%20Logo%20Slim.png" alt="Mel Wade Logo" class="logo"></a>
        <nav id="menu">
            <h2>Main Navigation</h2>
            <div id="toggle">
                <a href="#menu" class="openMenu"><span>Menu</span></a>
                <a href="#" class="closeMenu"><span>Close</span></a>
            </div>
            <ul id="menuItems">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="music.html">Music</a></li>
                <li><a href="photos.html">Photos</a></li>
                <li><a href="shows.html">Shows</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <h2 class="title">Join Mailing List</h2>
        <?=$thankYou ?>
        <form method="post" action="newsletter.php">
            <label>First Name:</label>
            <input type="text" name="first">
            <label>Last Name:</label>
            <input type="text" name="last">
            <label>Email:</label>
            <input type="text" name="email">
            <label>Location:</label>
            <input type="text" name="location">
            <input type="submit" id="submit" value="Submit" name="submit">
        </form>
    </main>
    <footer>
        <p><a href="newsletter.php">Join Newsletter</a></p>
        <p>© Mel Wade Music 2016</p>
        <p>melwademusic@gmail.com</p>
            <a href="https://www.facebook.com/Mel-Wade-Music-105647996181636/?fref=ts" target="_blank"><img src="Images/facebook.png" alt="facebook Logo"></a>
            <a href="https://twitter.com/melwademusic" target="_blank"><img src="Images/twitter.png" alt="twitter Logo"></a>
            <a href="https://www.youtube.com/channel/UCHtr5qqt0OCacJYyiFek88Q" target="_blank"><img src="Images/youtube.png" alt="youtube logo"></a>
            <a href="https://www.instagram.com/melwademusic/" target="_blank"><img src="Images/instagram.png" alt="instagram logo"></a>
        <p>Designed by: Zach Bramwell</p>
    </footer>
</body>
</html>