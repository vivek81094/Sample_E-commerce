import React, { useEffect, useState } from "react";
import DetailedDataCard from "./DetailedDataCard";
import DataCard from "./DataCard";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const DataDetails = ({ data }) => {
  const { id } = useParams();

  const toastAdd = (name) => toast.success(`${name} is Added`);
  const mainItem = data.find((item) => item.id == id);
  const category = mainItem ? mainItem.category : null;

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      {
        <div className="mb-10">
          {data
            .filter((item) => item.id == id)
            .map((data) => (
              <DetailedDataCard
                key={data.id}
                id={data.id}
                name={data.title}
                img={data.img}
                price={data.price}
                desc={data.desc}
                toaster={toastAdd}
              />
            ))}
        </div>
      }
      <div>
        <h1 className="border-spacing-2 text-center animate-bounce delay-75  transition-all ease-in-out text-xl bg-gray-300">
          {" "}
          Similar data items
        </h1>
        {
          <div className="flex items-center justify-center  flex-wrap gap-4  ">
            {data
              .filter((item) => item.category == category)
              .map((data) => (
                <DataCard
                  key={data.id}
                  id={data.id}
                  name={data.title}
                  img={data.img}
                  price={data.price}
                  desc={data.description}
                  toaster={toastAdd}
                />
              ))}
          </div>
        }
      </div>
    </>
  );
};

export default DataDetails;
