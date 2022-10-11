import React from "react";

const appList = ["Do 60 pushups", "Run 1 mile in 6 minutes", "Do 100 sit ups"];

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
    e.target.style = "opacity: 0.25; text-decoration: line-through";
    appList.splice(appList.indexOf(e.target.textContent), 1);
  }

  return (
    <div className="Plan">
      <h1>Make your workout plan.</h1>
      <h3>You can view and edit your fitness plan here.</h3>
      <p>Enter a new exercise in the textbox and click "Add" to add it to your list. 
        Click on an item to cross it off. Keep up the good work!</p>
      <hr />
      <input type="text" onChange={ updateInput } placeholder="Exercise" className="Plan-input" />
      <button onClick={ addItem } className="Plan-button">Add</button>
      <div className="Plan-list">
        { list.map(e => <div className="Plan-item" onClick={ crossItem }>{ e }</div>) }
      </div>
    </div>
  );
};
  
export default Plan;