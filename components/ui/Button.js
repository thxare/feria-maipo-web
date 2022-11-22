import React from "react";

export const Button = ({text,onClickBtn,colorBtn, hoverBtn, margin}) => {
  return (
    <>
      <button
        className={"rounded py-2 px-4 font-bold text-white shadow-md " + colorBtn + " " + hoverBtn + " " + margin }
        onClick={onClickBtn}
        data-testid="buttonTest"
      >
        {text}
      </button>
    </>
  );
};
