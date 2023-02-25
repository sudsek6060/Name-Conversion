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

// Convert To Snake Case
function toSnakecase(str) {
    const strSplit = str.split(' ');
    const lowerStrSplit = strSplit.map(el => el.toLowerCase());
    const snakeCase = lowerStrSplit.join('_');

    return snakeCase;
}

// Convert to Screaming Snake Case
function toScreamingSnakeCase(str) {
    const strSplit = str.split(' ');
    const upperrStrSplit = strSplit.map(el => el.toUpperCase());
    const screamingSnakeCase = upperrStrSplit.join('_');

    return screamingSnakeCase;
};