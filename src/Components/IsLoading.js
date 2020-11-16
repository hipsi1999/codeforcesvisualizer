import React from 'react';
import { CircularProgress } from '@material-ui/core';
function IsLoading(){
    return(
        <>
            <div className="justify-content-center text-center">
                <CircularProgress/>
            </div>
        </>
    )
}
export default IsLoading;