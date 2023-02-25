function toPascleCas(str){
    // let words = str.split(' ');
    // for(let char of words){
    //     words[words.indexOf(char)]=char.charAt(0).toUpperCase()+char.slice(1)
    // }
    // return words.join(' ');

    const strSplit = str.split(' ');
    // console.log(strSplit);
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    // console.log(mapStrSplit);
    const pascalCase = lowerStrSplit.map(el => {
       return el[0].toUpperCase() + el.slice(1)
    }).join('')
    // console.log(camelCase);
    return pascalCase;
    
}
function toCamlecase(str){
    const strSplit = str.split(' ');
    // console.log(strSplit);
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    //  console.log(lowerStrSplit);
    const firstEl = lowerStrSplit.shift();

    const camelCase = firstEl + lowerStrSplit.map(el => {
        return el[0].toUpperCase() + el.slice(1)
     }).join('');
    //  console.log(camel);
    return camelCase;
     
}
// toCamlecase('Sudhansu Sekhar Mahankuda')

function toSnakecase(str){
    const strSplit = str.split(' ');
    // console.log(strSplit);
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    //  console.log(lowerStrSplit);
    const snakeCase = lowerStrSplit.join('_');
    // console.log(snakeCase);
    return snakeCase;
}
// toSnakecase('sudhansu sekhar mahankuda')

function toScreamingSnakeCase(str){
    const strSplit = str.split(' ');
    // console.log(strSplit);
    const upperrStrSplit = strSplit.map(el => el.toUpperCase());
    //  console.log(lowerStrSplit);
    const screamingSnakeCase = upperrStrSplit.join('_');
    // console.log(screamingSnakeCase);
    return screamingSnakeCase;
};

function toKebabCase (str) {
    const strSplit = str.split(' ');
    // console.log(strSplit);
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    //  console.log(lowerStrSplit);
    const kebabCase = lowerStrSplit.join('-');
    // console.log(kebabCase);
    return kebabCase;
};

function toScreamingKebabCase (str){
    const strSplit = str.split(' ');
    // console.log(strSplit);
    const upperrStrSplit = strSplit.map(el => el.toUpperCase());
    //  console.log(lowerStrSplit);
    const screamingKebabCase = upperrStrSplit.join('-');
    // console.log(screamingKebabCase);
    return screamingKebabCase;
}

function convert(){
    let one = document.getElementById("text").value;
    document.getElementById("pascal-case").innerText = toPascleCas(one);
    document.getElementById("camel-case").innerText = toCamlecase(one);
    document.getElementById("snake-case").innerText = toSnakecase(one);
    document.getElementById("screaming-snake-case").innerText = toScreamingSnakeCase(one);
    document.getElementById("kebab-case").innerText = toKebabCase(one);
    document.getElementById("screaming-kebab-case").innerText = toScreamingKebabCase(one);
    
}

// console.log(toPascleCas("sudhansu sekhar mahankuda"));
// console.log(toCamlecase("sudhansu sekhar mahankuda"));
// console.log(tosnakecase("sudhansu sekhar mahankuda"));
// let fx = toCamlecase("sudhansu sekhar mahankuda");
// console.log(fx);

let btn = document.querySelector("#convert-btn");
btn.addEventListener("click", convert);
