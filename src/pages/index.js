import React from "react";

let colors = ['#ccccff', '#bbbbff', '#aaaaff', '#9999ff', '#8888ff', '#7777ff',
              '#8888ff', '#9999ff', '#aaaaff', '#bbbbff', '#ccccff'];
let i = 0;

const flash = () => {
  i = i > 9 ? 0 : i + 1;
  document.getElementById('banner').style.color = colors[i];
}
//setInterval(flash, 200);

const Home = () => {
  let hour = new Date().getHours();
  let greeting;
  
  if (hour < 12) greeting = "Good morning!";
  else if (hour < 18) greeting = "Good afternoon!";
  else greeting = "Good evening!";
  
  return (
    <div className="Home">
      <p id="banner">Start your journey today.</p>
      <hr />
      <h1>Fire Fitness</h1>
      <p>{ greeting } Welcome to a fitness website that is made with React.</p>
      <p>Use the <pre>WORKOUT PLAN</pre> page to plan out your next workout.</p>
      <p>Use the <pre>INSPIRATION</pre> page to get inspiration for your next workout.</p>
    </div>
  );
};
  
export default Home;