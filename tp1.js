/*
1.Suma de elementos en un arreglo:
Escribe una función que use reduce() para sumar todos los elementos de un arreglo de
números.
*/

// uso este array para todas las pruebas numericas.
let arr = [1, 2, 3, 4, 5];


function sumaElementos(arr) {
   
    let suma = arr.reduce((cont, elemento) => cont + elemento, 0);
    return suma;
  }
  
  
  let resultado = sumaElementos(arr);
  console.log(resultado); 

/*
2.Multiplicación de elementos en un arreglo:
Crea una función que utilice reduce() para multiplicar todos los elementos de un arreglo de
números.
*/

function multiplicarElementos(arr) {
   
    let mult = arr.reduce((cont, elemento) => cont * elemento);
    return mult;
  }
  
  let resultado2 = multiplicarElementos(arr);
  console.log(resultado2); 



/*
3.Concatenación de cadenas:
Implementa una función que use reduce() para concatenar todos los elementos de un
arreglo de cadenas en una sola cadena.
*/


function cadenaArreglo(arr) {
  // Uso  map() para convertir los números en cadenas
  let cadena = arr.map(numero => numero.toString());
  
  let resultado = cadena.reduce((cont, cadena) => cont + cadena, '');
  
  return resultado;
}

const resultadoConcatenado = cadenaArreglo(arr);
console.log(resultadoConcatenado); 




/*
4.Calcular el promedio:
Escribe una función que use reduce() para calcular el promedio de un arreglo de números.
*/

function calcularPromedio(arr) {
   
    if (arr.length === 0) {
      return 0;
    }
    let suma = arr.reduce((cont, elemento) => cont + elemento,0);
    let promedio = suma / arr.length;
    
    return promedio;
  }
  let promedio = calcularPromedio(arr);
  console.log(promedio); 

/*
5.Encontrar el valor máximo:
Crea una función que utilice reduce() para encontrar el valor máximo en un arreglo de
números.
*/

function buscarMayor(arr) {
   
        let max = arr.reduce(function(aux, puntero) {
          if (puntero > aux) {
            return puntero;
          } else {
            return aux;
          }
        });
      
        return max;
      }
        
      let max = buscarMayor(arr);
      console.log(max);

     
     
     /*
    6.Contar ocurrencias:
    Escribe una función que cuente cuántas veces aparece un elemento específico en un
    arreglo utilizando reduce().
    */

    
    function contarOcurrencias(arr, elemento) {
        let contador = 0;
        

        contador = arr.reduce(function(cont, elementoActual) {
          if (elementoActual === elemento) {
            
            return cont + 1;
          } else {
            return cont; 
        }
        }, contador);
        
        return contador;
      }
      
      
      let elemento = 2;
      
      let repetido = contarOcurrencias(arr, elemento);
      console.log(`El elemento ${elemento} se repite ${repetido}  de veces en el arreglo.`);

      /*
      7. Ordenar palabras por longitud:
      Crea una función que ordene un arreglo de palabras por su longitud, es decir, la cantidad de
      caracteres
     */

      let arr2 = ["asdasdsadasd","f" ,"papa", "tomate", "zanahoria", "naranja"];
      function ordenarPorLongitud(arr2) {
        arr2.sort(function(a, b) {
          return a.length - b.length;
        });
      
        return arr2;
      }
      
      
      let palabrasOrdenadas = ordenarPorLongitud(arr2);
      console.log(palabrasOrdenadas);



      /*
      8. Búsqueda de un elemento en un arreglo:
      Escribe una función que busque un elemento específico en un arreglo y devuelva true si se
       encuentra o false si no se encuentra.
       */

      function buscarElemento(arr, elemento) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === elemento) {
            return true; 
          }
        }
        
       
        return false;
      }
      
      
      
      let buscar = 6;
      let booleano = buscarElemento(arr, buscar);
      
      if (booleano) {
        console.log(`True`);
      } else {
        console.log(`false`);
      }

      

        /*
      9. Búsqueda de la primera coincidencia:
      Implementa una función que busque la primera instancia de un elemento en un arreglo y
      devuelva su índice. Si el elemento no está en el arreglo, devuelve -1.
      */

      function buscarPrimeraCoincidencia(arr, elemento) {
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] === elemento) {
            return i; 
          }
        }
        return -1;
      }
      
      
      let buscar2 = 3;
      let indice = buscarPrimeraCoincidencia(arr, buscar2);
      
      if (indice !== -1) {
        console.log(`El elemento ${buscar2} se encuentra en el índice ${indice}.`);
      } else {
        console.log(`El elemento ${buscar2} no se encuentra en el arreglo.`);
      }



      /*
      10. Búsqueda de la última coincidencia:
      Crea una función que busque la última instancia de un elemento en un arreglo y devuelva
       su índice. Si el elemento no está en el arreglo, devuelve -1.
       */
        

       // Misma funcion que el punto 9 pero leemos el arreglo de atras para adelante.

       function buscarUltimaCoincidencia(arr, elemento) {
        for (let i = arr.length - 1; i >= 0; i--) {
          if (arr[i] === elemento) {
            return i; 
          }
        }
        return -1; 
      }
      
      
      let buscar3 = 3;
      const indice2 =  buscarUltimaCoincidencia(arr, buscar3);
      
      if (indice !== -1) {
        console.log(`El elemento ${buscar3} se encuentra en el índice ${indice2}.`);
      } else {
        console.log(`El elemento ${buscar3} no se encuentra en el arreglo.`);
      }
