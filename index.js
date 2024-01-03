let NomeHeroi = "Pedro";
let XP = 7000;

let NivelHeroi;

switch (true){
    case XP < 1000:
        NivelHeroi = "Ferro";
        break;

    case XP >= 1001 && XP <= 2000:
        NivelHeroi = "Bronze";
        break;

    case XP >= 2001 && XP <= 5000:
        NivelHeroi = "Prata";
        break;

    case XP >= 5001 && XP <= 7000:
        NivelHeroi = "Ouro";
        break;

    case XP >= 7001 && XP <= 8000:
        NivelHeroi = "Platina";
        break;

    case XP >= 8001 && XP <= 9000:
        NivelHeroi = "Ascedente";
        break;

    case XP >= 9001 && XP <= 10000:
        NivelHeroi = "Imortal";
        break;

    default:
        NivelHeroi = "Radiante";
}

console.log("O Heroi de nome " + NomeHeroi + " esta no nivel de " + NivelHeroi);