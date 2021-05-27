import { memo } from 'react'

 function ChildComponent ({ value, children}) {
     console.log(`Render for ${children}`)
 
    return (
        <div>
             {children} : {value}
        </div>
    )
}

export default memo(ChildComponent);