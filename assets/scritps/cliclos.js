
//Registrar la citas diarias al consultorio dental//
////////////////////////////////////////////////////

let contadorHoraCita= 1;
let limiteCitaDiario = 8;

//se utilizo do while ya que es más importante registrar una cita y despues verificar si se desea agregar más citas
do{
    //Agendar con nombre
    let registro = prompt("Ingresa tu nombre para agendar 1 hora de cita: ");
    //Verificar si no se a alcanzado el limite diario
    if(contadorHoraCita < limiteCitaDiario){
        console.log(registro, " registrado con exito!")
        contadorHoraCita++;
    }else{
        console.log("Limite diario excedido")
        break;
    }
}while(confirm("Deseas agendar otra cita?"));
//Se imprime el numero de citas agendadas
console.log("Numero total de citas agendadas hoy: ", contadorHoraCita);




//Inventario de cajas de pastillas//
////////////////////////////////////

/*Se definio como WHILE debido a que es importante cumplir la condición (tener medicamento), para asi poder entrar al ciclo */

let antiinflamatorios= 5;

//Mientras haya cajas, ofrecerlas
while (antiinflamatorios > 0) {

    //Pregunta para ofrecer medicamento
    let opcionMed = prompt("¿Necesitas medicamento?");

    //Disminuir inventario si aceptan medicamento
    if (opcionMed == "si") {
         console.log("Te han asignado un antiinflamatorio");
         antiinflamatorios--;
         console.log("Quedan ", antiinflamatorios, " cajas");

    } else if (opcionMed == "no") { //Agradecer si no necesitan medicamento
         console.log("Gracias por tu visita!");
         break; //Finalizar bucle
     }
 }



//Consultas sin cita//
///////////////////////

/*Se utilizo un FOR, ya que se conoce el limite de turnos que se tienen para pacientes sin cita */

let turnoSinCita = 1; //Variable inicial de turno
let limiteTurnos = 5; //limite de consultas sin cita

for (turnoSinCita; turnoSinCita <= limiteTurnos; turnoSinCita++ ){

    //Mensaje inicial
    var nombre = prompt("Bienvenido a las consultas sin cita! \n Ingrese su nombre ");
    console.log(nombre, " por favor espere, su turno es ", turnoSinCita);

    //condicion para notificar limite de turnos
    if(turnoSinCita == limiteTurnos){
        console.log("Se han terminado los turnos sin cita, por favor vuelva mañana");
    }
  
}