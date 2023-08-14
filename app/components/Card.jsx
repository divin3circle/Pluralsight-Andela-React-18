"use client";
import { useState } from "react";
import Input from "./Input";
import User from "./User";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles.css";
import { useRef } from "react";
import axios from "axios";

const Card = () => {
  const testData = [
    {
      name: "Sylus",
      avatar_url:
        "https://i.pinimg.com/564x/22/d5/b7/22d5b72cd6405a5ae2edc4feacdd08cd.jpg",
      company: "divin3circle",
    },
    {
      name: "Abel",
      avatar_url:
        "https://i.pinimg.com/564x/9f/02/8e/9f028e1344143cc6d2cef238442f12e6.jpg",
      company: "sam77",
    },
  ];
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([testData]);
  const inputRef = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${input}`);
    toast.success(`${input} found!`, {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-success",
    });
    setUsers(resp.data);
    console.log(resp.data);
    setInput("");
  };
  /* const profile = testData[0]; */
  return (
    <div className="">
      <Input input={input}  inputRef={inputRef} handleClick={handleClick} setInput={setInput} />
      {testData.map((profile) => (
        <User
          key={profile.company}
          name={profile.name}
          img={profile.avatar_url}
          usr={profile.company}
        />
      ))}
      <ToastContainer />
    </div>
  );
};

export default Card;
