

/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async( ) =>{
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json()

    console.log(data[0])
    return data[0]
}

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => {

    const button = document.createElement('button')
    button.innerText = 'next quote'
    element.append(button)
    const p = document.createElement('p')
    element.append(p)
    
    document.querySelector('#app-title').innerHTML = 'breaking bad app'
    // element.innerHTML = 'Loading...'
    const renderButton = async() =>{
        console.clear()
        p.innerText = 'loading'
        const data = await fetchQuote()
        p.innerHTML = ` <b>Author</b>: ${data.author}
        <br>
        <${data.quote}>
        `
    }
    

    button.addEventListener('click', renderButton)


}