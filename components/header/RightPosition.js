import React, { useState } from "react";
import Image from "next/image";
import { router } from "next/router";

export const RightPosition = () => {
  const [changeUser, setChangeUser] = useState(true);

  let classNameUser = `dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0`;

  const handleClickUser = (e) => {
    setChangeUser(!changeUser);
    e.preventDefault();
  };
  if (changeUser) {
    classNameUser += ` hidden`;
  }

  const onSubmit = () => {
    const data = {};
    window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(data));
    router.push("/login/");
  };

  return (
    <div className="relative flex items-center">
      <div className="dropdown relative">
        <a
          className="
  dropdown-toggle
  hidden-arrow
  mr-4
  flex
  items-center
  text-green
  hover:text-gray-700 focus:text-gray-700
"
          href="#"
          id="dropdownMenuButton1"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bell"
            className="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"
            ></path>
          </svg>
          <span className="absolute -mt-2.5 ml-2 rounded-full bg-red py-0 px-1.5 text-xs text-white">
            1
          </span>
        </a>
      </div>

      <div className="dropdown relative" id="menu-usuario">
        <a
          className="dropdown-toggle hidden-arrow flex items-center"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          onClick={handleClickUser}
          aria-expanded="false"
        >
          <Image
            src="/favicon-32x32.png"
            className="rounded-full"
            width="20"
            height="20"
            alt=""
            loading="lazy"
          />
        </a>
        <ul className={classNameUser} aria-labelledby="dropdownMenuButton2">
          <li>
            <a
              className="
dropdown-item
block
w-full
whitespace-nowrap
bg-transparent
py-2
px-4
text-sm
font-normal
text-gray-700
hover:bg-gray-100
"
              href="#"
            >
              Mi Perfil
            </a>
          </li>
          <li>
            <a
              className="
dropdown-item
block
w-full
whitespace-nowrap
bg-transparent
py-2
px-4
text-sm
font-normal
text-gray-700
hover:bg-gray-100
"
              href="#"
              onClick={onSubmit}
            >
              Cerrar Sesión
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
