const planilha = [
    {
        nome: "Jobson",
        nota: 10
    },
    {
        nome: "Carlos",
        nota: 8.7
    },
    {
        nome: "Maria",
        nota: 9.5
    },
    {
        nome: "Anderson",
        nota: 7
    },
    {
        nome: "Clara",
        nota: 3.5
    },
    {
        nome: "Beatriz",
        nota: 5
    },
];
const boasNotas = [];

function avaliador() {
    planilha.forEach((item) => {
        if(item.nota >= 6) {
            boasNotas.push({
                nome: `${item.nome}`,
                nota: item.nota
            })
        }
    });

    boasNotas.forEach((item) => {
        console.log(`${item.nome} = ${item.nota}`);
    });
}

avaliador();