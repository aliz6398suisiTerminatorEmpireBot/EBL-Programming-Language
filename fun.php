<?php
function fie($g){
    print_r('<fieldset>'+g+'</fieldset>');
};
function hl($hrcolor,$hrwidth,$hrloop){
    if($hrcolor==undefined){
        $hrcolor='#000000';
    };
    if($hrwidth==undefined){
        $hrcolor='100';
    };
    if($hrloop==undefined){
        $hrloop=1;
    };
    for($inloop=0;$inloop<$hrloop;$inloop++){
        print_r("<hr color='"+$hrcolor+"'width='"+$hrwidth+"'></hr>");
    };
};
function fileview($type,$address,$id,$text){
    if($type=='sel'||$type=='select'||$type=='change'){
        print_r("<input type='file'></input>");
    };
    if($type=='img'){
        print_r("<img src='$address'></img>");
    };
    if($type=='audio'){
        print_r("<audio src='$address'></audio>");
    };
    if($type=='video'){
        print_r("<video src='address}'></video>");
    };
};
function cat($value){
    print_r($value);
};
function writeHTML($value){
    print_r($value);
};
function dow($val){
    print_r($val);
};
function showMe($val){
    print_r($val);
};
function nicePrint($val){
    print_r($val+'\n');
};
function cout($val){
    print_r($val+'\n');
};
function printc($val){
    print_r($val);
};
function out($val){
    print_r($val);
};
function puts($val){
    print_r($val);
};
function loop ($s,$e,$f){
    $r = $s;
    if($e>$s){
        $b = true;
    }elseif($s>$e){
        $b = false;
    };
    if($b == true){
        while($e>$r){
            f();
            $r = $r + 1;
        };
    }elseif($b == false){
        while($r>$e){
            f();
            $r = $r - 1;
        };
    };
    $rt = $r;
    $r = 0;
    return $rt;
};
function hyta0($tavan,$tedadeBar){
    return $$tavan ** $tedadeBar;
};
function hyta1($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar ** $tedadeBar);
};
function hyta2($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar ** ($tedadeBar ** $tedadeBar));
};
function hyta3($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)));
};
function hyta4($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))));
};
function hyta5($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)))));
};
function hyta6($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))))));
};
function hyta7($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)))))));
};
function hyta8($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))))))));
};
function hyta9($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)))))))));
};
function hyta10($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))))))))));
};
function hyta11($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)))))))))));
};
function hyta12($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))))))))))));
};
function hyta13($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)))))))))))));
};
function hyta14($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))))))))))))));
};
function hyta15($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar)))))))))))))));
};
function hyta16($tavan,$tedadeBar){
    return $$tavan ** ($tedadeBar**($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar**($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar **($tedadeBar ** ($tedadeBar ** ($tedadeBar ** $tedadeBar))))))))))))))));
};
function hyta($type,$tavan,$tedadeBar){
    $a = '';
    for($b=0;b<$type;$b++){
        $a = $a + ')';
    };
    $c = '';
    for($b = 0;$b<type;$b++){
        $c = $c + '(**$tedadeBar';
    };
    $d = '$tavan'+$c+'**$tedadeBar'+$a;
    return Number($d);
};
function dota($ad1,$ad2){
    $xxx1 = $ad1;
    for($xxx2=0;$xxx2<$ad2;$xxx2++){
        $xxx1 = $xxx1 / $ad1;
    };
    return $xxx1;
};
function sortBubble($arr){
    if($arr == ""){
        die('<font color="#ff0000"style="background-color:#ff8080;">VoidError & EmptyError : Array is not Defined or Empty</font>');
    };
    $leng = len($arr);
    $temp;
    for($i=0;i<$leng;$i++){
        for($j=0;$j<$leng;$j++){
            if($arr[j] > $arr[j+1]){
                $temp = $arr[j];
                $arr[j] = $arr[j+1];
                $arr[j+1] = $temp;
            };
        };
    };
    return $arr;
};
function removeStr($str,$dis){
    if($dis == null||$dis==undefined||$dis == ""){
        $dis = " ";
    };
    if($str == null||$str==undefined||$str == ""){
        die("<font color='#ff0000'style='background:#ff8080;'>VoidError & EmptyError : You String is Empty.!?.!?.!?</font>");
    };
    return str_replace($dis,"",$str);
};
function last($str1){
    if($str1 == null||$str1==undefined||$str1 == ""){
        die("<font color='#ff0000'style='background:#ff8080;'>VoidError & EmptyError : You String 1 is Empty.!?.!?.!?</font>");
    };
    return substr($str1,len(str1)-1,1);
};
function first($str1){
    if($str1 == null||$str1==undefined||$str1 == ""){
        die("<font color='#ff0000'style='background:#ff8080;'>VoidError & EmptyError : You String 1 is Empty.!?.!?.!?</font>");
    };
    return substr($str1,0,1);
};
function plus($str1,$str2){
    return $str1 . $str2;
};
$all = $GLOBALS;
?>