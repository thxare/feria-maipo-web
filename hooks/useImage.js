import React, { useState } from "react";

export const useImage = () => {
  const [imagen, setImagen] = useState("/Upload_Icon.png");
  const WIDTH = 200;
  function handleImageChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.type.includes("image")) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function load(e) {
          let image_url = reader.result;
          let image = document.getElementById("imagen");
          setImagen(image_url);
          image.onload = (e) => {
            let canvas = document.createElement("canvas");
            let ratio = WIDTH / e.target.width;
            canvas.width = WIDTH;
            canvas.height = e.target.height * ratio;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            let new_image_url = ctx.canvas.toDataURL("image/jpeg", 98);
            setImagen(new_image_url);
          };
        };
      } else {
        console.log("No es una imagen");
      }
    }
  }
  return [handleImageChange, imagen];
};
