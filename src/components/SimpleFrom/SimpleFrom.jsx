import { useState } from "react";




const SimpleFrom = () => {
    const [name , setname] = useState(null) ;
    const [email , setemail] = useState(null) ;
    const handleSunmit = e =>{
        e.preventDefault() ;
         console.log(name , email  ) ;
    }
    const handlesetName = e =>{
        setname( e.target.value) ;
    }
    const handlesetEmail = e =>{
        setemail(e.target.value) ;
    }
    return (
        <div>
            <form onSubmit={handleSunmit}>
                <input 
                onChange={handlesetName}
                type="text" name="name"/>
                <br />
                <input 
                onChange={handlesetEmail}
                type="text" name="email" />
                <br/>                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleFrom;