import axios from "axios";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "./ui/Button";

export const CarritoCompras = ({ productosCarrito, setProductosCarrito }) => {
  const [productores, setProductores] = useState([]);
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);
  const [change, setChange] = useState(false);

  const router = useRouter();
  const valoresTotales = [];

  useEffect(() => {
    axios
      .get("https://api-feria-web-production.up.railway.app/api/usuarios")
      .then((res) => {
        setProductores(res.data);
      });
    setData(JSON.parse(localStorage.getItem("loggedNoteAppUser")));
  }, []);

  useEffect(() => {
    setUser(
      [...productores].find(
        (productor) => productor.id_usuario === data.id_usuario
      )
    );
  }, [data]);
  const calcularTotal = (cantidad, precio) => {
    return cantidad * precio;
  };

  productosCarrito.map((producto) => {
    valoresTotales.push(producto.quantity * producto.unit_price);
  });

  let total = 0;

  for (let i = 0; i < valoresTotales.length; i++) {
    total += valoresTotales[i];
  }

  const onDelete = (idProducto) => {
    setChange(true);
    setProductosCarrito(
      [...productosCarrito].filter((producto) => producto.id !== idProducto)
    );
  };

  useEffect(() => {
    if (change) {
      window.localStorage.setItem("carrito", JSON.stringify(productosCarrito));
    }
    setChange(false);
  }, [change]);

  const onSubmit = async () => {
    const name = await user?.nombre;
    const surname = await user?.apellido_p;
    const street_name = await user?.direccion;
    const number = await user?.num_identificador;

    const sendData = {
      user: {
        name,
        surname,
        email: user?.email,
      },
      identification: {
        type: "RUN",
        number,
      },
      address: {
        street_name,
      },
      productos: productosCarrito,
    };
    try {
      const paymentResponse = await axios.post(
        "https://api-feria-web-production.up.railway.app/api/payment",
        sendData
      );
      router.push(paymentResponse.data.init_point);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto mt-8 h-auto w-10/12 max-w-4xl">
      <div
        className="mb-5 h-6 w-6 cursor-pointer rounded-full hover:bg-gray-300"
        onClick={() => router.back()}
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </div>
      {productosCarrito.map((producto) => {
        const findUser = [...productores].find(
          (user) => user.id_usuario === producto.id_usuario
        );
        const formatoFecha = dayjs(producto.fecha_limite).add(1, 'day').format("DD/MM/YYYY");

        // let valorTxt = "";
        // if (producto.id_calidad == 1) {
        //   valorTxt = "Extra";
        // } else if (producto.id_calidad == 2) {
        //   valorTxt = "Primera";
        // } else {
        //   valorTxt = "Segunda";
        // }
        return (
          <div className="mb-3 rounded-sm bg-white shadow-sm" key={producto.id}>
            <div className="border-b-[1px] border-gray-200 p-2">
              <div className="flex">
                <svg
                  className="h-5 w-5 fill-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div>
                  {findUser
                    ? `${findUser.nombre} ${findUser.apellido_p}, ${findUser.ciudad}`
                    : ""}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-between p-5">
              <div className="h-40 w-40 bg-slate-300">
                <div className="w-full">
                  <Image
                    src={producto.imagen}
                    width="250"
                    height="250"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-3/4">
                <div className="flex justify-between">
                  <div className="text-2xl font-medium">{producto.title}</div>
                  <Button
                    text={"Eliminar"}
                    colorBtn={"bg-red"}
                    hoverBtn={"hover:bg-bordeaux"}
                    onClickBtn={() => onDelete(producto.id)}
                  />
                </div>
                <div className="infoProducto">
                  <div>
                    <span className="font-bold">Precio:</span> $
                    {producto.unit_price} x kg
                  </div>
                  {/* <div>
                    <span className="font-bold">Calidad:</span> {valorTxt}
                  </div> */}
                  <div>
                    <span className="font-bold">Fecha Limite:</span>{" "}
                    {formatoFecha}
                  </div>
                  <div>
                    <span className="font-bold">Descripci??n:</span>{" "}
                    {producto.description}
                  </div>
                </div>

                <div className="mx-auto inline-block">
                  <label className="font-semibold">Cantidad: </label>
                  {producto.quantity} kg
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="mb-3 rounded-sm bg-white shadow-sm">
        <div className="p-3">
          <div className="mb-4 text-2xl font-medium">Resumen</div>
          <div className="">
            <div className="grid grid-cols-4 gap-2">
              <div className="inline-block font-bold">Nombre</div>
              <div className="inline-block font-bold">Cantidad</div>
              <div className="inline-block font-bold"> Precio Unitario</div>
              <div className="inline-block font-bold">Total</div>
            </div>
            {productosCarrito.map((producto) => {
              return (
                <div className="grid grid-cols-4 gap-2" key={producto.title + producto.id}>
                  <div className="inline-block">{producto.title}</div>
                  <div className="inline-block">{producto.quantity} kg</div>
                  <div className="inline-block">${producto.unit_price}</div>
                  <div className="inline-block">
                    ${calcularTotal(producto.quantity, producto.unit_price)}
                  </div>
                </div>
              );
            })}

            <div className="mt-7 flex flex-row justify-between border-t-[1px] pt-4">
              <div className="pt-2">
                Total a pagar <span className="font-bold">CLP ${total}</span>
              </div>
              <div>
                <Button
                  text={"Pagar"}
                  colorBtn={"bg-green"}
                  hoverBtn={"hover:bg-darkGreen"}
                  onClickBtn={() => onSubmit()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
