import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null) ;
    const emailRef = useRef(null) ;
    useEffect( ()=>{nameRef.current.focus()},[])
    const handleSunmit = e =>{
        e.preventDefault() ;
        console.log(nameRef.current.value) ;
        console.log(emailRef.current.value) ;
         
    }
    return (
        <div>
            <form onSubmit={handleSunmit}>
                <input 
               ref={nameRef}
                type="text" name="name"/>
                <br />
                <input 
               ref={emailRef}
                type="text" name="email" />
                <br/>                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;