import modalHTML from "./render-modal.html?raw";
import './render-modal.css'
import { User } from "../../models/user";
import { getUserById } from "../../use-cases/get-user-by-id";
/**
 * 
 * @param {HTMLDivElement} element 
 */
let modal, form;
let loadedUser = {};


export const showModal = async( id ) =>{
    modal?.classList.remove('hide-modal')
    loadedUser = {};
    if ( !id ) return;
    const user = await getUserById(id)
    setFormValues(user);
};

export const hideModal = ( ) =>{
        modal?.classList.add('hide-modal')
        form?.reset();

}

const setFormValues = ( user ) =>{

    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user
}
/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike)=>Promise<void>} callback 
 * @returns 
 */

export const renderModal = ( element, callback ) =>{

    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form')


    modal.addEventListener('click', (e ) =>{
        if (e.target.className === 'modal-container') { 
            hideModal()
        }
    })

    form.addEventListener('submit', async(e) =>{
        event.preventDefault()

        const formData = new FormData( form );
        const userLike = {...loadedUser}

        for (const [key, value] of formData) {
            if (key === 'balance') {
                userLike[key] = +value;
                continue;
            }
            if (key === 'isActive') {
                userLike[key] = (value ===  'on') ? true : false;
                console.log(value)
                continue;
            }

            userLike[key] = value
            
        }
        // userLike.isActive = Boolean(userLike.isActive)
        await callback(userLike)        
        hideModal();
    })

    element.append( modal );


}