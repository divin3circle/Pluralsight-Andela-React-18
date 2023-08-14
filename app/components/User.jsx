import React from 'react'

const User = ({name, img, usr}) => {
  return (
    <div>
      <div className=" mt-10  flex justify-center items-center">
        <div className="bg-slate-100 shadow-lg hover:scale-105 hover:bg-slate-200 ease-in-out duration-150 cursor-pointer rounded-lg p-2 w-[75%] md:max-w-[50%]">
          <div className="flex gap-4">
            <div>
              <div className="bg-gray- h-full p-2">
                <img
                  src={img}
                  alt={name}
                  className=" object-cover h-[100px] w-[100px] rounded-full"
                />
              </div>
            </div>
            <div className="p-4">
              <h1 className="font-bold text-xl">{name}</h1>
              <h1 className="font-light">@{usr}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User
