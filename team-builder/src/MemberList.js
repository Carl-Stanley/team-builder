import React from "react";
 
const MemberList = props => {
  
  return (
    <div>
      {props.memList.map(member => {
        return (
          
          <div className="membercard" key={member.memberID}>
            
             <h3>{`Name: ${member.name}`}</h3>
             <h3>{`Role: ${member.role}`}</h3>
             <h3 >{`Email: ${member.email}`}</h3>
             
          </div>
          
        );
      })}
    </div>
   );
};

export default MemberList;