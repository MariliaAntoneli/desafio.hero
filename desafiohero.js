let heroes = [
    {"name": "Crash", "age": "54", "type": "guerreiro"},
    {"name": "Shazam", "age": "629", "type": "mago"},
    {"name": "Sharu", "age": "72", "type": "monge"},
    {"name": "Zez", "age": "28", "type": "ninja"}
];

function atacar(hero) {
    if (hero.name === "Crash") {
        console.log("O " + hero.type + " atacou usando espada");
    } else if (hero.name === "Shazam") {
        console.log("O " + hero.type + " atacou usando magia");
    } else if (hero.name === "Sharu") {
        console.log("O " + hero.type + " atacou usando artes marciais");
    } else if (hero.name === "Zez") {
        console.log("O " + hero.type + " atacou usando shuriken");
    }
}

atacar(heroes[0])
atacar(heroes[1])
atacar(heroes[2])
atacar(heroes[3])