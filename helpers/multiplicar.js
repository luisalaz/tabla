const { rejects } = require('assert');
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base=1, listar = false, hasta = 10) => {
    
    try{
        let salida = '';
        let consola = '';
        let nameFile = `tabla-${base}.txt`

        for (let i = 1; i<=hasta; i++){
            salida += `${base} ${'x'} ${i} ${'='} ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
        }

        if (listar) {
            console.log(consola);
        }
        fs.writeFileSync(`./salida/${nameFile}`, salida);

        return nameFile;
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}