import { loadUsersByPage } from "../use-cases/load-users-by-page"


const state = {
    currenPage: 0,
    users: [],
}

const loadNextPage = async() =>{
    const users = await loadUsersByPage( state.currenPage + 1)
    if (users.length === 0) return;
    state.currenPage += 1;
    state.users = users
}
const loadPreviousPage = async() =>{
    if (state.currenPage === 1 ) return
    const users = await loadUsersByPage( state.currenPage -1 )
    if (users.length === 0) return;
    state.currenPage -= 1;
    state.users = users
}
const onUserChanged = (updatedUser) =>{

    let wasFound = false;

    state.users = state.users.map( user => {
        if (user.id === updatedUser.id) {
            wasFound = true;
            return updatedUser
        }
        return user;
    });
    if ( state.users.length < 10 && !wasFound) {
        state.users.push( updatedUser);
    }
}

const reloadPage = async() =>{
    const users = await loadUsersByPage( state.currenPage)
    if (users.length === 0) {
        await loadPreviousPage();
        return
    }
    state.users = users

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currenPage,
    
}