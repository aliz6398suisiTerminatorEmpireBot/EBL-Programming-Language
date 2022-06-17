<script src="fun.js"></script>
<?php 
    // PHP Codes Here
?>
<!-- HTML Codes Here -->
<style>
    /* CSS Codes Here */
</style>
<script>
    // Java Script Codes Here
console.log(window)
</script><div id="aaaaoutput"></div><div id="aaaamycanvas"></div><script>
var gaaa = document.querySelectorAll("hbp")
if(gaaa.length != 0){
gaac=""
for(gaab in gaaa){
    if(gaaa[gaab].innerHTML == undefined){break}
    gaac += gaaa[gaab].innerHTML + "\n"
}
for(gaab in gaaa){
    if(gaaa[gaab].innerHTML == undefined){break}
    gaaa[gaab].style.display = "none"
}
lastinput = ""
function outf(text) {
    var mypre = document.getElementById("aaaaoutput"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 

function inputf(prompt) {
    return new Promise(function(resolve,reject){
        $("#aaaaoutput").append("<textarea id='input'>"+lastinput+"</textarea><button id='but'>Submit</button>");
        $("#input").focus().select(
        $("#but").on("click",function(e){
                lastinput = $("#input").val();
                resolve($("#input").val());
                $("#input").remove();
                $("#but").remove();
        }));
    });
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
            throw "File not found : '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
   var prog = gaac
   Sk.pre = "aaaaoutput";
   Sk.configure({
       inputfun: inputf,
       inputfunTakesPrompt: true,
       output:outf,
       read:builtinRead
   }); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'aaaamycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
   },
       function(err) {
       $("#aaaaoutput").append(`<font color="red">${err.toString()}</font>`);
   })}
</script>