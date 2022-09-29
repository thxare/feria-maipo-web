import Image from "next/image";

export const Card = ({ title, img, text }) => {
  return (
    <div className="col-span-8 mx-auto overflow-hidden rounded-lg bg-white pt-4 text-center shadow-lg md:col-span-4 xl:col-span-2">
      <Image
        className="w-full"
        src="/feria-logo.png"
        alt="Imagen"
        width={200}
        height={200}
      />
      <div className="px-6 py-4">
        <h2 className="mb-2 text-left text-xl font-bold">{title}</h2>
        <p className="text-justify text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <button className="mb-2 rounded-md bg-orange py-1.5 px-4 font-bold text-white hover:bg-orangeSmooth">
          Ingresar
        </button>
      </div>
    </div>
  );
};
