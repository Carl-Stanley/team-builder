import React, { useState } from 'react';
import data from "./Data";
import MemberForm from "./TeamForm"
import MemberList from "./TeamList"

import "./App.css"
function App() {

  const [members, setMembers] = useState(data);
 const addNewMember = teamMember => {
  setMembers([...members, teamMember]);
};


  return (
    <div className="App">
      <h2>Join the Band!</h2>
      <div className="FormCard">
       <MemberForm addNewMember={addNewMember}/>
     </div>
      <div className="Cards">
     <MemberList  memList={members}/>
     </div>
     
    </div>
  );
}
console.log(data);
export default App;
