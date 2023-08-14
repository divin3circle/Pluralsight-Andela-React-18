"use client"
import axios from "axios";
import { useState } from "react";

const Card = () => {
    const testData = [
      {
        login: "Sylus",
        company: "@divin3circle",
        avatar_url:
          "https://i.pinimg.com/originals/d5/65/4b/d5654bd984020c62201eed2fb5896fce.jpg",
      },
      {
        login: "Abel",
        company: "@sourcecode",
        avatar_url:
          "https://i.pinimg.com/564x/22/d5/b7/22d5b72cd6405a5ae2edc4feacdd08cd.jpg",
      },
    ];
    const [input, setInput] = useState("");
    const [users, setUsers] = useState(testData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${input}`);
        setUsers([...users, resp.data]);
        console.log(users);
    }

  return (
    <div>
      <div>
        <form
          className="flex flex-row gap-4 items-center justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 focus:outline-2 
           rounded-lg focus:outline-teal-500 focus:border-b-2 font-semibold "
            placeholder="Github username"
          />
          <button className="bg-teal-400 p-[0.5rem] rounded-lg border-teal-400 border-2 hover:bg-transparent ease-in duration-100">
            Add User
          </button>
        </form>
      </div>
      {/**card */}
      <div>
        {users?.map((user, index) => (
          <div key={index} className="flex justify-center mx-auto mt-5">
            {/**avatar */}
            <div className="flex justify-center gap-4 rounded-lg hover:bg-teal-100 hover:scale-105 ease-in duration-150 cursor-pointer  md:w-[42rem] ">
              <div>
                <img
                  src={user.avatar_url}
                  alt="login"
                  className=" object-cover rounded-full h-[100px] w-[100px]"
                />
              </div>
              <div className="p-2">
                <h1 className="font-bold text-lg">{user.login}</h1>
                <h2 className="font-light leading-relaxed text-teal-600">
                  {user.company}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
