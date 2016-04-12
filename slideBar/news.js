alert('Heello');

$(".leftDiv").hover(
    function() {
        $(this).stop().animate({"width": "100%"}, 100);
        $(".rightDiv").stop().animate({"width": "0%"}, 100);
    },
    function() {
        $(this).stop().animate({"width": "49.3%"}, 100);
        $(".rightDiv").stop().animate({"width": "49.3%"}, 100);
});
$(".rightDiv").hover(
    function() {
        $(this).stop().animate({"width": "100%"}, 100);
        $(".leftDiv").stop().animate({"width": "0%"}, 100);
    },
    function() {
        $(this).stop().animate({"width": "49.3%"}, 1000);
        $(".leftDiv").stop().animate({"width": "49.3%"}, 1000);
});