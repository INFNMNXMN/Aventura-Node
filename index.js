const readlineSync = require("readline-sync");

const historia = [
  {
    text: "Benvingut/da a la teva aventura! Tens 15 anys i vius a la Índia rural\nVius amb una família molt pobre, però ets feliç, i tens la sort de poder anar a una escola que administra una ONG, a més estàs molt enamorada d' un noi de classe de la mateixa edat \nUn dia ve a casa a parlar amb el teu pare un senyor acomodat de 53 anys que vol casar-se amb tú.\n Quan el senyor marxa, el teu pare et diu que ets molt afortunada, ja que un home d' una casta superior vol casar-te amb tú i accepta una dot molt petita en relació a la seva posició económica i social. \nTú no vols casar-te amb aquell home per res del món, però no li dius al teu pare, decideixes fugir aquella mateixa nit de casa, perquè saps que t' obligaran a casar-te i així tenir una boca menys que alimentar a casa. Un cop és fosca nit marxes de casa.\n T' atreveixes a marxar sola?",
    si: 1,
    no: 2,
  },
  {
    text: "Ets molt jove i tens molta por. Tens molt respecte al teu pare, però acabes de ressignar-te a casar-te amb un home gran al que no estimes i no saps quina classe de vida tindràs. Vols replanetar-te la fugida?",
    si: 0,
    no: 6,
  },
  { text: "¿Lo has tocado?", si: 4, no: 3 },
  { text: "¿Nos dará problemas?", si: 5, no: 1 },
  { text: "BURRO!!! ¿Alguien lo sabe?", si: 5, no: 1 },
  { text: "La has cagao, ¿Puedes culpar a otro?", si: 1, no: 5 },
  { text: "¡Adeu!", si: -1, no: -1 },
];

let paginaActual = 0;

while (paginaActual >= 0 && paginaActual < 6) {
  console.log(llegirPagina());
  let option = demanarOpcio();
  paginaActual = nextStep(option);
}

function llegirPagina() {
  return historia[paginaActual].text;
}

function demanarOpcio() {
  let opcioTriada = readlineSync.question(" si/no ");
  if (opcioTriada === "si" || opcioTriada === "s") return true;
  else return false;
}

function nextStep(seleccion) {
  if (seleccion) return historia[paginaActual].si;
  else return historia[paginaActual].no;
}
