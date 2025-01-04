import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import Hero from "./Hero";

const CoffeeDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  console.log(id);
  const fatchData = async () => {
    try {
      const respon = await axios.get(
        `https://api.sampleapis.com/coffee/hot/${id}`
      );
      setData(respon.data);
      console.log(respon.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fatchData();
  }, [id]);

  return <div>
     <Hero name={"CoffeeDetails"} />
  </div>;
};

export default CoffeeDetails;
