import React from 'react'

function OnDemand(props) {
    return (
        <div>
            <div className='work'>
                {/* <Image src={require('../assets/images/group1.png')} className="img-fluid" alt="" /> */}
                <img src={props.imgsrc} alt="" />
                <h6>{props.step}</h6>
                <h3> {props.title}</h3>
                <p>{props.details}</p>
            </div>
        </div>
    )
}   

export default OnDemand
