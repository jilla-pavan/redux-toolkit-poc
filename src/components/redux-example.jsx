import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addName } from "../nameSlice";

const Content = () => {
  const name = useSelector((store) => store.name.name);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addName("final state"));
    console.log(name, "inside");
  };
  
  console.log(name, "outside");
  return (
    <div className="bg-gray-200 p-10 mx-auto   flex justify-center flex-col gap-4">
      <h1 className="bg-red-300 p-2">REDUX EXAMPLE</h1>
      <h1 className="font-bold">
        This is the state variable :{" "}
        <span className="bg-green-300 p-2">{name}</span>
      </h1>
      <h2>click the below button to change the state in the redux store</h2>
      <button
        className="bg-green-300 p-2 rounded-xl font-bold w-fit"
        onClick={() => {
          handleClick();
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Content;
