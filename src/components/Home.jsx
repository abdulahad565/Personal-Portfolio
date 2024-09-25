import React from "react";
import Me from '../assets/Me.jpg';



const Home = () => {
  return (
    <>
      <div className="p">
        <h2>Welcome to My Portfolio</h2>
      </div>

      <div className="home">
        <p>
          Hi, I am Abdul Ahad Khan, a software engineering student with a passion
          for developing web applications and learning new technologies.
        </p>
        <img src={Me} alt="" />
      </div>
    </>
  );
};

export default Home;

