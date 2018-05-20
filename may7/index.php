<?php

$a = 'jose';
$b = 25;
$c = $a + $b;
$d = 'black';
?>



<?php
$x = 5;

function test($myVar){


    echo "The value of x is: " .$myVar;
}
test($x);


function test2(){

     global $y;
     $y = 75;
}

test2();
echo $y;

?>
<!--
<p>
Hello <?php //Print $c; ?>,Welcome to my Site
</p>

<p>My car is <?php //print $d; ?>

</p>
-->
