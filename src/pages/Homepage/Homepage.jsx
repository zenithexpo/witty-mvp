import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <>
        <div className="container">
          <div className="row mt-2 mb-4">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center mb-3">
              <div style={{width:"80%"}}>
              <Searchbar></Searchbar>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 imgDiv">
              <img
                className="img-fluid"
                src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
                alt="image"
              ></img>
            </div>
          </div>
          <hr></hr>
          <div className="content p-3 text-center">
            <div className="heading mb-4">
              <h3>Why Witty-Yatri?</h3>
            </div>
            <div className="paragraph mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Homepage;
