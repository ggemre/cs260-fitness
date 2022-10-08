import React from "react";

const appList = [];

const Plan = () => {
  const [list, setList] = React.useState(appList);
  let [input] = React.useState("");
  
  const addItem = () => {
    appList.push(input);
    if (list[list.length - 1] == input) setList([...list]);
    else setList([...list, input]);
    
    document.getElementsByTagName('input')[0].value = "";
  };
  
  const updateInput = (e) => {
    input = e.target.value;
  };
  
  const crossItem = (e) => {
    e.target.style = "text-decoration: line-through";
    appList.splice(appList.indexOf(e.target.textContent), 1);
  }

  return (
    <div>
      <h1>Your Workout Plan</h1>
      <h3>You can view and edit your fitness plan here.</h3>
      <p>Enter a new exercise in the textbox and click "Add" to add it to your list. 
        Click on an item to cross it off. Keep up the good work!</p>
      <hr />
      <input type="text" onChange={ updateInput } placeholder="Exercise" />
      <button onClick={ addItem }>Add</button>
      <div>
        { list.map(e => <div className="exercise" onClick={ crossItem }>{ e }</div>) }
      </div>
    </div>
  );
};
  
export default Plan;