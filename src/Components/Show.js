import React from 'react'
import { useRef, useEffect } from 'react';
import {gsap} from "gsap";



const Show = (props) => {
    const {message}= props;
    const showRef= useRef('none')
    useEffect(() =>{
        console.log(message)
        gsap.fromTo(showRef.current,{
            color:'white',
            fontSize:'0px',
            backgroundColor:'red',
            padding:'10px',
            opacity:0, 
            scale: 0,
            rotation:720
        },{
            fontSize:'20px',
            color:'red',
            duration:2,
            ease: 'power4',
            backgroundColor:'black',
            borderRadius:'20px',
            opacity:1, scale:1 , rotation:0
        })
    }, [message] )
    return (
        
        <div className='show-div'>
            <p ref={showRef}>
                {message}
            </p>
        </div>
    )
}

export default Show