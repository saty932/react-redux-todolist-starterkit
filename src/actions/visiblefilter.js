export const  updateVisibleFilter=(filterType)=>dispatch=>{ 
    dispatch({
        type: 'UPDATE_FILTER',
        filterType:filterType
    });
}
