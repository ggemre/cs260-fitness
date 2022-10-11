import React from "react";

const phelpsWorkout = ["7am - 9am: do lots of swimming", 
                       "9am - 10am: do weight training in the gym",
                       "4pm - 6pm: do lots of swimming"];
const aliWorkout = ["15 minutes of shadow boxing", 
                    "18 minutes of heavy bag boxing", 
                    "spar with partner for 30 minutes"]
const jordanWorkout = ["7am - 8am: do legs workout",
                       "8am - 10am: do arms workout",
                       "1pm - 3pm: do back workout"];


const Progress = () => {
  const [list, setList] = React.useState([]);
  
  const update = (e) => {
    list.forEach(x => list.pop());
  
    let name = e.target.value;
    list.pop();
    if (name === "phelps") {
      phelpsWorkout.forEach(x => list.push(x));
    }
    else if (name === "ali") {
      aliWorkout.forEach(x => list.push(x));
    }
    else if (name === "jordan") {
      jordanWorkout.forEach(x => list.push(x));
    }
    
    setList([...list]);
  }
  
  return (
    <div className="Progress">
      <h1>Get inspiration for your next workout.</h1>
        <label for="athletes" className="Progress-label">Today, I want to work out like </label>
        <select name="athletes" onChange={ update } id="dropdown" className="Progress-select">
          <option value=""></option>
          <option value="phelps">Michael Phelps</option>
          <option value="ali">Muhammad Ali</option>
          <option value="jordan">Michael Jordan</option>
        </select>
        <div className="Progress-list">
        { list.map(e => <div className="Progress-item">{ e }</div>) }
      </div>
    </div>
  );
};
  
export default Progress;