import ParentContext from "../hook/context/ParentContext"
import ChildContext from "../hook/context/ChildContext"
import Navigation from "../../App"

const contextPages =()=>{
    return(
        <>
    
        <h1>Use Context</h1>
        <ParentContext>
        <ChildContext></ChildContext>
        </ParentContext>
        
        </>
        
    )
}
export default contextPages