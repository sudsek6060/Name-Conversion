// Convert to pascle case
function toPascleCase(str) {
    const strSplit = str.split(' ');
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    const pascalCase = lowerStrSplit.map(el => {
        return el[0].toUpperCase() + el.slice(1)
    }).join('')

    return pascalCase;

}

// Convert to camle case
function toCamlecase(str) {
    const strSplit = str.split(' ');
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    const firstEl = lowerStrSplit.shift();
    const camelCase = firstEl + lowerStrSplit.map(el => {
        return el[0].toUpperCase() + el.slice(1)
    }).join('');

    return camelCase;

}