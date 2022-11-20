import React from 'react'
const Tabs = (props) => {


    const {tabObject, setMessage} =props;
    const handleButton=()=>{
        const msg= `${tabObject} content is showing here`
        setMessage(msg);
    }
    return (
        <div className='tab-div'>
            <button onClick={handleButton}>{tabObject}</button>
        </div>
        
    )
}

export default Tabs