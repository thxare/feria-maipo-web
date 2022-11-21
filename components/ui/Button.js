import React from "react";

export const Button = ({text,onClickBtn,colorBtn, hoverBtn}) => {
  return (
    <>
      <button
        className={"my-2 mx-5 rounded py-2 px-4 font-bold text-white shadow-md " + colorBtn + " " + hoverBtn}
        onClick={onClickBtn}
        data-testid="buttonTest"
      >
        {text}
      </button>
    </>
  );
};
