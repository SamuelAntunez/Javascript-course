

/**
 * 
 * @param {String|Number} id 
 * @returns 
 */
export const deleteUserByID = async(id) =>{

    const url =`${import.meta.env.VITE_BASE_URL}/users/${id}`;
    const res = await fetch(url, {
        method: 'DELETE',
    });
    const deleteResult = await res.json();
    console.log({deleteResult})

    return true;

}