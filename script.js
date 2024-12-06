let num1 = 1;
let num2 = 2;
let operacion = ``;

 function menu(){
     operacion = pronpt (`/ncalculadora basica 
          1-suma
          2-resta
          3-multiplicacion
          4-divicion
          0-salir

          elija una opcion: `);

     if (operacion === ` 1 `|| operacion ===`2` || operacion === `3` || operacion === `4`){
          capturaDatos();
     }

     if (operacion === `0` || operacion === null){
          alert(`fin de la operacion`);
     }else{
          alert(`operacion no valida`);
          menu();
     }
 }

function capturaDatos(){
     let num1, num2;
     while ( isNaN(num1) ) {
          num1 = prompt(`ingrese primer numero: `);
     }
     while ( isNaN(num2) ){
          num2 = prompt(`ingrese segundo numero:` );
     }
     realizarOperacion
}

function realizarOperacion(num1,num2,operacion){
     if (operacion === `1`)
          alert(`El resultado de la suma es: ${num1+num2}`);
     else if (operacion ===`2`)
          alert(`El resultado de la resta es: ${num1-num2}`);
     else if (operacion === `3`)
          alert(`El resultado de la MULTIPLICACION es: ${num1*num2}`);
     else if (operacion ===`4`){
          if (num2===0)
               alert(`El resultado de la DIVISION es:${num1/nim2}`);
          else
          alert("no se admite division x 0");
     }
}

menu();



          





