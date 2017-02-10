document.write("<script src='jquery-3.1.1.js'><\/script>");
var $course = $("#menu a:eq(2)");
$course.next().hide();
$course.click(function () {
    if($course.next().is(":hidden")){
        $course.next().show();
    }else{
        $course.next().hide();
    }
});