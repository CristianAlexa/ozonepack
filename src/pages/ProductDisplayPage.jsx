import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { OzoneContext } from "../context/OzoneContext";

import { GiRecycle } from "react-icons/gi";
import { MdCompost } from "react-icons/md";

import Section from "./../components/Section";
import LatestProductsBlock from "./../components/LatestProductsBlock/LatestProductsBlock";
import SubscribeBlock from "../components/SubscribeBlock/SubscribeBlock";

const ProductDisplayPage = () => {
  const { productId } = useParams();

  const { products, currency } = useContext(OzoneContext);
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const getProductData = () => {
    products.map((prod) => prod._id === productId && setProductData(prod));
  };

  useEffect(() => {
    getProductData();
  }, [productId]);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    quantity > 1 && setQuantity((prev) => prev - 1);
  };

  const handleInputChange = (e) => setQuantity(+e.target.value);

  const { sku, img, id, name, price, feature, caseQty, description } =
    productData;

  return productData ? (
    <>
      <Section>
        <div className="flex flex-col sm:flex-row gap-4 pt-10 items-start">
          <div className="w-full sm:w-[45%]">
            <img
              className="w-full h-auto border border-slate-200"
              src={img}
              alt={name}
            />
          </div>
          <div className="flex gap-3 flex-col w-full sm:w-[55%]">
            <p className="text-green-500">{sku}</p>
            <h1 className="text-xl text-slate-700">{name}</h1>
            <p className="text-xs">Case of: {caseQty}</p>
            <p className="text-xs text-slate-500 flex gap-1 items-center self-start my-1 px-3  py-1 bg-green-200 rounded-full">
              {feature === "Recyclable" ? <GiRecycle /> : <MdCompost />}
              {feature}
            </p>
            <p className="text-slate-700 text-2xl">
              {currency}
              {price} / case
            </p>
            <div className="flex gap-1 items-center">
              <div className="flex">
                <button
                  onClick={decrement}
                  className=" text-slate-700 py-1 px-3 border border-slate-700"
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleInputChange}
                  className="w-20 text-slate-700 py-1 px-3 border border-slate-700 text-center"
                />
                <button
                  onClick={increment}
                  className=" text-slate-700 py-1 px-3 border border-slate-700"
                >
                  +
                </button>
              </div>
              <button
                className="self-start py-1 px-3 border border-green-500 bg-green-500 text-slate-50 active:bg-green-400"
                id={id}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="my-10">
          <div className="flex">
            <b className="border px-5 py-3 text-sm">Description</b>
            <p className="border px-5 py-3 text-sm">Reviews</p>
          </div>
          <div className="border px-6 py-6 text-sm text-slate-500">
            {description}
          </div>
        </div>
      </Section>
      <Section>
        <LatestProductsBlock />
      </Section>
      <Section bgColor={"bg-green-100"}>
        <SubscribeBlock />
      </Section>
    </>
  ) : (
    <div>ProductDisplayPage</div>
  );
};

export default ProductDisplayPage;
