function fecha(){
    var objFecha=new Date();
     var s=objFecha.getSeconds();
     var m=objFecha.getMinutes();
     var h=objFecha.getHours();
     var ampm=(h<12)?'AM': 'PM';
     h=(h>12)?h-12:h;
     h=(h==0)?12:h;
     s=agregaCero(s);
     m=agregaCero(m);
     h=agregaCero(h);

     var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
     var mes=meses[objFecha.getMonth()];
     var diasDeLaSemana=['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
     var diaDeLaSemana=diasDeLaSemana[objFecha.getDay()];
     var dia=objFecha.getDate();
     var año=objFecha.getFullYear();
    var fechaCompleta=diaDeLaSemana+"  "+dia+"  De  " +mes+"   De   "+año;
     document.getElementById("fecha").innerHTML=h+":"+m+":"+s+"   "+ampm+"<br><br>"+fechaCompleta;
    
     setTimeout(function(){fecha()},1000);
}
function agregaCero(i){
    if(i<10){
        i="0"+i;
    }
    return i;
}
