import React from "react";
 
const testArr = [1, 2, 3, 4, 5];

const Plan = () => {
  return (
    <div>
      <h1>Your Workout Plan</h1>
      <h3>You can view and edit your fitness plan here.</h3><hr />
      <div>
        { testArr.map(e => <p>{e}</p>) }
      </div>
    </div>
  );
};
  
export default Plan;