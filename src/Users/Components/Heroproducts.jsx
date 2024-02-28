import React from "react";

import ReactStars from "react-stars";

const Heroproducts = () => {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://plus.unsplash.com/premium_photo-1669703777565-05ec5f5dd7c4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3500",
      color: "Black",
      discountPrice: "1800",
    },
    {
      id: 2,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3500",
      color: "Black",
      discountPrice: "1800",
    },
    {
      id: 3,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3500",
      color: "Black",
      discountPrice: "1800",
    },
    {
      id: 4,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "3500",
      color: "Black",
      discountPrice: "1800",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col pt-12">
        <h1 className="text-center text-3xl font-semibold p-3">
          {" "}
          Trending Products
        </h1>
        <p className="text-center pb-3 font-medium">
          Here's some of our popular products people are in love with.
        </p>
        <h1 className="text-center text-3xl font-semibold p-3 mt-10">
          {" "}
          <u>Men's Collection</u>
        </h1>
      </div>
      {/* Cart show */}
      <div className=" pr-12 pl-12">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                  <ReactStars
                    count={5}
                    size={18}
                    color2={"#ffd700"}
                    value={4}
                    edit={false}
                  />
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-red-500 line-through px-4">
                      ${product.price}
                    </span>
                    ${product.discountPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Cart show */}
      <h1 className="text-center text-3xl font-semibold p-3 mt-10">
        {" "}
        <u>Women's Collection</u>
      </h1>
      <div className=" pr-12 pl-12">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                  <ReactStars
                    count={5}
                    size={18}
                    color2={"#ffd700"}
                    value={4}
                    edit={false}
                  />
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-red-500 line-through px-4">
                      ${product.price}
                    </span>
                    ${product.discountPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* kids collection */}
      <h1 className="text-center text-3xl font-semibold p-3 mt-10">
        {" "}
        <u>Kid's Collection</u>
      </h1>
      <div className=" pr-12 pl-12">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                  <ReactStars
                    count={5}
                    size={18}
                    color2={"#ffd700"}
                    value={4}
                    edit={false}
                  />
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    <span className="text-red-500 line-through px-4">
                      ${product.price}
                    </span>
                    ${product.discountPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heroproducts;
