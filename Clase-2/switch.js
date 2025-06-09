let dia = "Hola";

switch (dia) {
  case "lunes":
    console.log("Hoy es lunes, comienza la semana");
    break;
  case "martes":
    console.log("Hoy es martes, segundo día de la semana");
    break;
  case "miércoles":
    console.log("Hoy es miércoles, mitad de semana");
    break;
  case "jueves":
    console.log("Hoy es jueves, casi fin de semana");
    break;
  case "viernes":
    console.log("Hoy es viernes, último día laboral de la semana");
    break;
  case "sábado":
    console.log("Hoy es sábado, fin de semana");
    break;
  case "domingo":
    console.log("Hoy es domingo, día de descanso");
    break;
  default:
    console.log(
      "Día no reconocido, por favor ingresa un día válido de la semana"
    );
    break;
}
