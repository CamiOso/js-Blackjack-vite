import _ from 'underscore';



/**
 * Esta función crea un deck de cartas
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns  {Array<String>} 
 */


export const crearDeck = (tiposDeCarta,tiposEspeciales) => {



    if(!tiposDeCarta || tiposDeCarta.length===0){
        throw new Error('El tipo de carta es necesario como un arreglo de Strings');

    }
    if(!tiposEspeciales || tiposEspeciales.length===0){
        throw new Error('El tipoEspeciales es necesario como un arreglo de Strings');

    }
    

    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck= _.shuffle( deck );
    return deck;
}