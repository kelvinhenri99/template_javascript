// Template permite criar espaços e outros caracteres conforme escrita

const recado = "Piso molhado";
const template1 = `Cuidado, ${recado}!`;
    console.log(template1); // Sem espaços

const template2 = `
    Cuidado,         ${recado}   !`;
    console.log(template2); // Com espaços