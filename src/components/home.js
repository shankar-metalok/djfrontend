import React from "react";
import tableimg from "../images/tableimg.png";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

const Home = () => {

const navigate = useNavigate()


  const tabledata = [
    {
      tableno: "01",
    },
    {
      tableno: "02",
    },
    {
      tableno: "03",
    },
    {
      tableno: "04",
    },
    {
      tableno: "05",
    },
    {
      tableno: "06",
    },
    {
      tableno: "07",
    },
    {
      tableno: "08",
    },
    {
      tableno: "09",
    },
    {
      tableno: "10",
    },
    {
      tableno: "11",
    },
    {
      tableno: "12",
    },
  ];

  const orderdata = () => {
      
      navigate('/orderdata')
  };

  return (
    <div>
      <h1 style={{ marginLeft: "64px" }}>Home</h1>
      <div className="container">
        <h2>Club Rogue</h2>

        <div className="d-flex ">
          <img
            src={tableimg}
            alt="img"
            style={{ width: "41px", height: "41px" }}
          />
          <h4 className="m-2">tables</h4>
        </div>



       <div className="row m-auto justify-content-center gap-2">
          {tabledata.map((maptabledata, index) => (
            <div
              key={index}
              className="col-md-3 d-flex align-items-center justify-content-center flex-column"
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "8px",
                border: "1px solid gray",
              }}
              onClick={orderdata}
            >
              <h4>table</h4>
              <h4>{maptabledata.tableno}</h4>
            </div>
          ))}
        </div> 
       
          
          



      </div>
    </div>
  );
};

export default Home;
