import React from "react";
import Button from "../Button/Button";

const Listdata = ({ todoTitle, todoDescription ,todoEdit , todoDelete}) => {
  return (
    <ul>
      <li className="border-2 p-4 my-4 rounded-2xl shadow-lg hover:scale-105 hover:border-[#F96E5B] duration-300">
        <h3>
          <span className="font-bold">Title : </span>
          {todoTitle}
        </h3>
        <p>
          <span className="font-bold">Description : </span>
          {todoDescription}
        </p>
        <div className="flex justify-end space-x-3 mt-5">
          <Button
            className="p-1 w-24 rounded-2xl bg-blue-500 text-white"
            btnText="Edit Todo"
            onClick={() => todoEdit()}
          />
          <Button
            className="p-1 w-28 rounded-2xl bg-red-500 text-white"
            btnText="Delete Todo"
            onClick={() => todoDelete()}
          />
        </div>
      </li>
    </ul>
  );
};

export default Listdata;
