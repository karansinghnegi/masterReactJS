import { useEffect, useState } from "react"

export default function ChildComponent (props) {
    console.log(props)
    const [caclNum, setCalcNum] = useState(0);

    useEffect(() => {
        setCalcNum(props.someFunc())
    }, [props.someFunc])

    return <h3>Plus five: {caclNum}</h3>
}