// hooks/useSave.js
import { useState, useCallback } from "react";

export const useProduct = (product, selectedColor) => {
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState({});

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const saveProductLocalStorage = useCallback(() => {
    let alreadyExist = false;

    const newOrder = {
      ProductID: product._id,
      ProductKey: product.key,
      ProductName: product.name,
      ProductCategory: product.category,
      ProductColor: product.colors[selectedColor].color,
      ProductHexColor: product.colors[selectedColor].hex,
      ProductImage: product.colors[selectedColor].image,
      OrderQuantity: quantity,
      minQuantity: product.minQuantity,
    };

    const existingOrders = JSON.parse(localStorage.getItem("order")) || [];

    for (let i = 0; i < existingOrders.length; i++) {
      if (
        existingOrders[i].ProductID === newOrder.ProductID &&
        existingOrders[i].ProductColor === newOrder.ProductColor
      ) {
        existingOrders[i].OrderQuantity += newOrder.OrderQuantity;
        alreadyExist = true;
        break;
      }
    }

    if (!alreadyExist) {
      existingOrders.push(newOrder);
    }

    localStorage.setItem("order", JSON.stringify(existingOrders));

    setOrder(newOrder);
  }, [product, selectedColor, quantity]);

  return {
    quantity,
    order,
    increaseQuantity,
    decreaseQuantity,
    saveProductLocalStorage,
  };
};
