//Criação de uma função para formatar a string recebida para formato de JSON.
function formatStringToJSON(str) {
    return '{ ' + str.replace('key: ', '"name": "').replace(',', '",').replace('value: ', '"age": ')  + ' }';
}

//Função findAge para descobrir quem tem menos que 29 anos na string passada.
function findAge(str) {
    const persons = str.split(';'); //Split da string e criar cada person após cada ";".
    const personUnder29 = []; //Criação de uma const com um array vazio para as pessoas abaixo de 29 anos.
    
    //Método for para cada "person" da const "persons" para formatar e utilizar em JSON object.
    for (const person of persons) {
        const personObject = JSON.parse(formatStringToJSON(person));
        
        //Condicional if para saber quem dos "persons" possui menos que 29 anos e dar push para o array.
        if (personObject.age < 29) {
            personUnder29.push(personObject);  
        }
    }
    return personUnder29;    
}

//Criação da constante answer para criar o array utilizando a function findAge.
const answer = findAge('key: Matheus, value: 25; key: Henrique, value: 29; key: Glória, value: 21')
  
//Criação da constante names para receber apenas o nome do array "answer".
const names = answer.map(person => person.name);
  
console.log(`${answer.length} Pessoa(s): ${names}`); //Resposta final.
    