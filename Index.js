const readlineSync = require("readline-sync");

const historia = [
  {
    text: "Benvingut/da a la teva aventura! Tens 15 anys, ets una noia i vius a la Índia rural\nVius amb una família molt pobre, però ets feliç, i tens la sort de poder anar a una escola que administra una ONG, a més estàs molt enamorada d' un noi de classe de la mateixa edat \nUn dia ve a casa a parlar amb el teu pare un senyor acomodat de 53 anys que vol casar-se amb tú.\n Quan el senyor marxa, el teu pare et diu que ets molt afortunada, ja que un home d' una casta superior vol casar-te amb tú i accepta una dot molt petita en relació a la seva posició económica i social. \nTú no vols casar-te amb aquell home per res del món, però no li dius al teu pare, decideixes fugir aquella mateixa nit de casa, perquè saps que t' obligaran a casar-te i així tenir una boca menys que alimentar a casa. Un cop és fosca nit marxes de casa.\n T' atreveixes a marxar sola?",
    si: 2,
    no: 1,
  },
  {
    text: "Ets molt jove i tens molta por. Tens molt respecte al teu pare, però acabes de ressignar-te a casar-te amb un home gran al que no estimes i no saps quina classe de vida tindràs. Vols replantejar-te la fugida?",
    si: 2,
    no: 5,
  },
  {
    text: "Surts amagada amb molta por i amb un petit farcell amb lo poc que tens. Vols demanar ajuda a la ONG que gestiona la teva escola?",
    si: 3,
    no: 1,
  },

  {
    text: "Penses que potser la teva família no et deixarà tornar mai més a l' escola i no podràs demanar ajuda si no marxes enmig de la nit?",
    si: 4,
    no: 5,
  },
  {
    text: "Enhorabona, has arribat a la ONG i aquesta mateixa nit sortiràs del poble amagada on et portaran a una gran ciutat on t' ajudaran a formar-te i ser independent",
    si: -1,
    no: -1,
  },
  {
    text: "Acabes de ressignar-te i et cases amb aquest senyor. Comemnces a resar perquè no saps que serà de la teva vida...",
    si: -1,
    no: -1,
  },
];

let paginaActual = 0;

while (paginaActual >= 0 && (paginaActual != 4 || paginaActual != 5)) {
  console.log(llegirPagina());
  if (paginaActual != 4 && paginaActual != 5) {
    console.log(paginaActual);
    let option = demanarOpcio();
    paginaActual = nextStep(option);
  } else paginaActual = -1;
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
