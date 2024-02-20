import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState({ L: 0, M: 0, S: 0 });

  const values = {
    shoeName,
    setShopName,
    description,
    setDescription,
    price,
    setPrice,
    quantity,
    setQuantity,
  };

  return <FormContext.Provider value={values}>{children}</FormContext.Provider>;
};
