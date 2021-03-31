import React, {useRef, useEffect } from 'react';

const MyComponent = (props) => {
    const titleRef = useRef();

    useEffect(() => {
         setTimeout(() => {
            titleRef.current.textContent = 'Karan Singh Negi'
            console.log('Karan')
        }, 2000)
    }, [])

    return (
        <div className="container">
            <div className="title" ref={titleRef}>Leenu</div>
        </div>
    )
}


export default MyComponent;

