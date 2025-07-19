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
const onUserChanged = () =>{
    throw new Error('Not implemented')
}

const reloadPage = async() =>{
    throw new Error('Not implemented')
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUsers: () => [...state.users],
    getCurrentPage: () => state.currenPage,
    
}