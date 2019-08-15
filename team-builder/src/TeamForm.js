import React, { useState } from "react";


const MemberForm = props=>{
   
     const [names, setNames]=useState({ name: "", role: "",email: ""});
     const changetHandler = event =>{
     
        setNames({...names, [event.target.name]: event.target.value})
    
    
    }
    
    
    const onSubmitForm = event=>{
        
        event.preventDefault();
        const newMember ={
            ...names, 
            memberID: Date.now()        
        }
      props.addNewMember(newMember);
    }


    return(

    <form className="Form" onSubmit={onSubmitForm}>

        <button type="submit">Add to Team</button>   

        <label htmlFor="name">Enter Name:</label>
        
        <input  type="text" name="name"  onChange={changetHandler} value={names.name}/>        
        
        <label htmlFor="email">Enter Email:</label>
        
        <input type="email" name="email" onChange={changetHandler} value={names.email}/>
        
        <label htmlFor="role">Select A Role:</label>
        
        <select type="text" name="role"  onChange={changetHandler} value={names.role}>
        
        <option value="Vocalist">Vocalist</option>
        
        <option value="Groupie">Groupie</option>
        
        <option value="Singer">Backup Singer</option>
        
        <option value="Manager">Manager</option></select>
        
        
        
        


    </form>
        
    )
}



export default MemberForm;