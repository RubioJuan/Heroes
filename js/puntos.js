
/**
 * 
 * @param {Number} numero
 * @returns {Promise}
 */

const number = (numero) => {
    return new Promise ((resolve, reject)=>{
        if (numero % 2 === 0) {
            resolve (`Wooooww el ${numero} es Par`);
            return;
        } 
        else {
            reject(`Lo siento pero ${numero} No es Par`)    
        }
    });
    return Promise;
}

let numero = 4

console.log (number(numero))