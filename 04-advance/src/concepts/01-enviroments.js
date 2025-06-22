/**
 * 
 * @param {HTMLDivElement} element 
 */

export const enviromentsComponent = ( element ) =>{
    console.log( import.meta.env)
    const html = `
        Dev: ${import.meta.env.DEV}
    `;
    element.innerHTML = html;
}