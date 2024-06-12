/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Navbar from "../../components/navbar/Navbar";
import Layout from "../../components/layout/Layout";
import Card from "./components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlog } from "../../../store/blogSlice";
import { useEffect, useState } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { inputData } = useSelector((state) => state.blog);
  console.log(inputData);
  useEffect(() => {
    dispatch(fetchBlog());
    setIsLoading(false);
  }, []);
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-6 ">
        {inputData &&
          inputData.map((data) => {
            return <Card key={data.id} data={data} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;
