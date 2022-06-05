var fmt = {"print":function (g){console.log(g)},"PrintLn":function (g){console.log(g)},"Print":function (g){console.log(g)}};var System = {"out":{"print":function (g){console.log(g)},"println":function (g){console.log(g)}}};var lcd = {"print":function (g){console.log(g)}};var چاپ = function (g){h = console.log(g)};var alr = function (g){h = alert(g)};var cnf = function (g){confirm(g)};var prp = function prp(g,i){prompt(g,i)};var نوشتن = function (g){console.log(g)};var الرت = function (g){alert(g)};var هشدار = function (g){alert(g)};var چاپ = function (g){console.log(g)};var بنویس = function (g){console.log(g)};var printf = function (g){console.log(g)};var println = function (g){console.log(g)};var fie = function (g){document.write("<fieldset>"+g+"</fieldset>")};var hl = function (hrcolor,hrwidth,hrloop){if(hrcolor==undefined){hrcolor="#000000"};if(hrwidth==undefined){hrcolor="100"};if(hrloop==undefined){hrcolor="1"};for(var inloop=0;inloop<hrloop;inloop++){document.write(`<hr color="`+hrcolor+`"width="`+hrwidth+`"></hr>`)}};var bl = function (loops){if(loops==undefined){loops=1};for(var inloop=0;inloop<loops;inloop++);{document.write("<br>")}};var text = function (textb,style){document.write(`<text style="${style}">${textb}</text>`);console.log(`%c${textb}`,style);console.warn(`%c${textb}`,style);console.error(textb)};function a(text,href){document.write(`<a href="${href}">${text}</a>`)}function i(text){document.write("<i>"+text+"</i>")};function input(type,id,style,value,placeholder,min,max,step){if(type != "multiLine"){document.write(`<input id="${id}"type="${type}"style="${style}"placeholder="${placeholder}"value="${value}">`)};if(type=="multiLine"){document.write(`<textarea id="${id}"style="${style}"placeholder="${placeholder}">${value}</textarea>`)}};function file(type,address,id,text){if(type=="sel"||type=="select"||type=="change"){document.write(`<input type="file"></input>`)};if(type=="img"){document.write(`<img src="${address}"></img>`)};if(type=="audio"){document.write(`<audio src="${address}"></audio>`)};if(type=="video"){document.write(`<video src="${address}"></video>`)}};var iframe = function (addtype,address,id){document.write(`<iframe ${addtype?"srcdoc":"src"}="${address}"id="${id}"></iframe>`)};function progress(id,min,max,value){document.write(`<progress id="${id}"min="${min}"max="${max}"value="value">`)};function getFullObject(value){var ret = "";for(var i in value){ret = ret + `${i} : ${value[i]} , `};return ret};function getFullArray(value){var ret="";for(i of value){ret = ret + `${i} , `};return ret};var print_r = function (value){console.log(value)};var cat = function(value){console.log(cat)};var writeHTML = function (value){documentw.rite(value)};var col = function (val){console.log(val)};var dow = function (val){console.log(val)};var cat = function (val){console.log(val)};var چاپ‌کن = function (val){console.log(val)};var showMe = function (val){console.log(val)};function rand(i,a){return Math.random()*(a-i)+i};function Print(val){console.log(val+"\n")};function PRINT(val){console.log(val+"\n")};function ctArray(a,b){return Array(a+","+b)};function nicePrint(val){console.log(val+"\n")};function echo(val){document.write(val+"\n")};function cout(val){console.log(val+"\n")};var Printer = {"printIn":function printIn(g){console.log(g)}};var BS = {"WL":function WL(g){console.log(g)}};
function loop(s,e,f){
    r = s
    if(e>s){
        b = true
    }else if(s>e){
        b = false
    }
    if(b == true){
        while(e>r){
            f()
            r = r + 1
        }
    }else if(b == false){
        while(r>e){
            f()
            r = r - 1
        }
    }
    rt = r
    r = 0
    return rt
}
function حلقه(s,e,f){
    r = s
    if(e>s){
        b = true
    }else if(s>e){
        b = false
    }
    if(b == true){
        while(e>r){
            f()
            r = r + 1
        }
    }else if(b == false){
        while(r>e){
            f()
            r = r - 1
        }
    }
    rt = r
    r = 0
    return rt
}
var all = window;
