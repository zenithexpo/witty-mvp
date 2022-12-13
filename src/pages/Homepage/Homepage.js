import React from "react";
import BodyContent from "../../components/BodyContent/BodyContent";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div>
      <>
        <div className="mb-5">
          <div className="row" style={{padding:"7%"}}>
            <div className="col-lg-7 col-md-12 col-sm-12 d-flex align-items-center mb-5">
              <div className="body-top">
                <div className="tagline-question">Already in travel business?</div>
                <div className="tagline">
                  <h1>One stop solution to host your business for trippy souls</h1>
                </div>
                <div className="join-button">
                  <button className="btn btn-primary">Join now</button>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 mb-3 d-flex">
              <div>
                <img className="img-fluid" src="/images/side-image.png" atl="Image"></img>
              </div>
            </div>
          </div>
        </div>
        <BodyContent></BodyContent>
      </>
    </div>
  );
};

export default Homepage;
