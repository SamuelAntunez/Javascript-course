/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorFunctionComponents = ( element ) =>{

    const genId = idGenerator();
    console.log(genId.next())
}

function* idGenerator(){
    let currentId= 0;
    while(true) {
        yield ++currentId
    }

}