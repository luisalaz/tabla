
// const { argv } = require('process');
const { options, boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');


console.clear();
console.log(argv);

// const [, , arg3 = 'base=1'] = process.argv;
// const [, base = 1] = arg3.split('=');

//const base = 4;

crearArchivo(argv.b, argv.l, argv.h)
    .then((nameFile) => console.log(`archivo ${colors.rainbow(nameFile)} creado exitosamente`))
    .catch((err) => console.log(err));