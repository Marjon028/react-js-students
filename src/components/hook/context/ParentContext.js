import contextData from "../../../context/ContextApp";
import { useState } from "react";

const ParentContext =({children})=>{
    const [data, setdata] = useState('')
    return(
        <>
        <contextData.Provider value={{data,setdata}}>
            {children}

        </contextData.Provider>
        </>
    )
}

export default ParentContext