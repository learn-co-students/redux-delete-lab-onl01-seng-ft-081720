import Band from "./Band"
import React from 'react'

const Bands = (props) => {
    return (<ul>
            {props.bands.map((band,id) =><Band key={id} band={band} delete={props.delete}/>)}
        </ul>) 
}

export default Bands;