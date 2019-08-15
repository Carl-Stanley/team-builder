import React, { useState } from 'react';
import data from "./Data";
import MemberForm from "./MemberForm"
import MemberList from "./MemberList"

import "./App.css"
function App() {

  const [members, setMembers] = useState(data);
 const addNewMember = member => {
  setMembers([...members, member]);
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

export default App;
