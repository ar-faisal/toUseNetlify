import React from 'react'

export default function Alert(props) {
   
    return (
        <>
            <div className={`alert alert-${props.alertcol} alert-dismissible fade show`} style={{'display' :'none'}} id="alert" role="alert" >
                <strong>{props.alert}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </>
    )
}
