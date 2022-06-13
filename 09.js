var fmt = {"print":function (g){console.log(g)},"PrintLn":function (g){console.log(g)},"Print":function (g){console.log(g)}};var System = {"out":{"print":function (g){console.log(g)},"println":function (g){console.log(g)}}};var lcd = {"print":function (g){console.log(g)}};var چاپ = function (g){h = console.log(g)};var alr = function (g){h = alert(g)};var cnf = function (g){confirm(g)};var prp = function prp(g,i){prompt(g,i)};var نوشتن = function (g){console.log(g)};var الرت = function (g){alert(g)};var هشدار = function (g){alert(g)};var چاپ = function (g){console.log(g)};var بنویس = function (g){console.log(g)};var printf = function (g){document.write(g)};var println = function (g){console.log(g)};var fie = function (g){document.write("<fieldset>"+g+"</fieldset>")};var hl = function (hrcolor,hrwidth,hrloop){if(hrcolor==undefined){hrcolor="#000000"};if(hrwidth==undefined){hrcolor="100"};if(hrloop==undefined){hrcolor="1"};for(var inloop=0;inloop<hrloop;inloop++){document.write(`<hr color="`+hrcolor+`"width="`+hrwidth+`"></hr>`)}};var bl = function (loops){if(loops==undefined){loops=1};for(var inloop=0;inloop<loops;inloop++);{document.write("<br>")}};var text = function (textb,style){document.write(`<text style="${style}">${textb}</text>`);console.log(`%c${textb}`,style);console.warn(`%c${textb}`,style);console.error(textb)};function a(text,href){document.write(`<a href="${href}">${text}</a>`)}function i(text){document.write("<i>"+text+"</i>")};function input(type,id,style,value,placeholder,min,max,step){if(type != "multiLine"){document.write(`<input id="${id}"type="${type}"style="${style}"placeholder="${placeholder}"value="${value}">`)};if(type=="multiLine"){document.write(`<textarea id="${id}"style="${style}"placeholder="${placeholder}">${value}</textarea>`)}};function file(type,address,id,text){if(type=="sel"||type=="select"||type=="change"){document.write(`<input type="file"></input>`)};if(type=="img"){document.write(`<img src="${address}"></img>`)};if(type=="audio"){document.write(`<audio src="${address}"></audio>`)};if(type=="video"){document.write(`<video src="${address}"></video>`)}};var iframe = function (addtype,address,id){document.write(`<iframe ${addtype?"srcdoc":"src"}="${address}"id="${id}"></iframe>`)};function progress(id,min,max,value){document.write(`<progress id="${id}"min="${min}"max="${max}"value="value">`)};function getFullObject(value){var ret = "";for(var i in value){ret = ret + `${i} : ${value[i]} , `};return ret};function getFullArray(value){var ret="";for(i of value){ret = ret + `${i} , `};return ret};var print_r = function (value){document.write(value)};var cat = function(value){console.log(cat)};var writeHTML = function (value){documentw.rite(value)};var col = function (val){console.log(val)};var dow = function (val){console.log(val)};var cat = function (val){console.log(val)};var چاپ‌کن = function (val){console.log(val)};var showMe = function (val){console.log(val)};function rand(i,a){return Math.random()*(a-i)+i};function Print(val){console.log(val+"\n")};function PRINT(val){console.log(val+"\n")};function ctArray(a,b){return Array(a+","+b)};function nicePrint(document.write(val+"\n")};function echo(val){document.write(val+"\n")};function cout(val){console.log(val+"\n")};var Printer = {"printIn":function printIn(g){console.log(g)}};var BS = {"WL":function WL(g){console.log(g)}};
var loop = (s,e,f) => {
    r = s
    if(e>s){
        b = true
    }else if(s>e){
        b = false
    }
    if(b == true){
        while(e>r){
            eval(f)
            r = r + 1
        }
    }else if(b == false){
        while(r>e){
            eval(f)
            r = r - 1
        }
    }
    rt = r
    r = 0
    return rt
}
var حلقه = (s,e,f) => {
    r = s
    if(e>s){
        b = true
    }else if(s>e){
        b = false
    }
    if(b == true){
        while(e>r){
            eval(f)
            r = r + 1
        }
    }else if(b == false){
        while(r>e){
            eval(f)
            r = r - 1
        }
    }
    rt = r
    r = 0
    return rt
}
var crvar = (name,val,nums) => {
    var running = 0
    while(running < nums){
        var h = name + running + " = " + val
        eval(h)
        running = running + 1
    }
}
var all = window
function hyta0(tavan,tedadeBat){
    return tavan ** tedadeBat
}
function hyta1(tavan,tedadeBat){
    return tavan ** (tedadeBat ** tedadeBat)
}
function hyta2(tavan,tedadeBat){
    return tavan ** (tedadeBat ** (tedadeBat ** tedadeBat))
}
function hyta3(tavan,tedadeBat){
    return tavan ** (tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))
}
function hyta4(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))
}
function hyta5(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))))
}
function hyta6(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))))
}
function hyta7(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))))))
}
function hyta8(tavan,tedadeBat){
    return tavan ** (tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))))))
}
function hyta9(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))))))))
}
function hyta10(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))))))))
}
function hyta11(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))))))))))
}
function hyta12(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))))))))))
}
function hyta13(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))))))))))))
}
function hyta14(tavan,tedadeBat){
    return tavan ** (tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))))))))))))
}
function hyta15(tavan,tedadeBat){
    return tavan ** (tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat)))))))))))))))
}
function hyta16(tavan,tedadeBat){
    return tavan ** (tedadeBat**(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat**(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat **(tedadeBat ** (tedadeBat ** (tedadeBat ** tedadeBat))))))))))))))))
}
function hyta(type,tavan,tedadeBat){
    var a = ""
    for(var b=0;b<type;b++){
        a = a + ")"
    }
    var c = ""
    for(b = 0;b<type;b++){
        c = c + "**(tedadeBat"
    }
    var d = "tavan"+c+"**tedadeBat"+a;
    return eval(d);
}
function dota(ad1,ad2){
    var xxx1 = ad1
    for(var xxx2=0;xxx2<ad2;xxx2++){
        xxx1 = xxx1 / ad1
    }
    return xxx1
}
function sortBubble(arr){
    if(arr == undefined){
        throw new TypeError("Array is not defined");
    }
    if(typeof arr != "object"){
        throw new TypeError("input not a Array")
    }
    var len = arr.length
    var temp;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}
var hslStringHider = {
    "hide":function (i){
        var a = btoa(i);
        var b = ""
        for(var c=0;c<a.length;c++){
            b = b + (Math.round(Math.random()*36)).toString(36) + a.charAt(c)
        }
        return b
    },
    "show":function hideBawfln(i){
        var a = ""
        var c = i
        for(var b=0;b<i.length;b++){
            if(b % 2 == 0){
                
            }else{
                a = a + c.charAt(b)
            }
        }
        return atob(a)
    }

}
var all = window
