calc = document.getElementById('calc');
kg = document.getElementById('kg');
m = document.getElementById('m');
imb = document.getElementById('imb');
writer = document.getElementById('writer');

calc.onclick = function () {
    if(kg.value != "" && m.value != "" ){
        imbx =(kg.value/(m.value*m.value));
        imbz = Math.ceil(imbx);
        imb.innerHTML = "IMB is " + imbz
        console.log(imbz);

     if(imbz<18.5){writer.innerHTML = "Underweight";} else if(imbz>=18.5 && imbz>=24.9){writer.innerHTML ="Normal weight"; 
     } else if (imbz>=25 && imbz>=29.9){writer.innerHTML ="overweight";
     } else if (imbz>=30){writer.innerHTML ="Obesity";}

    }else {
        alert("You must enter your weight and height");
    }
};