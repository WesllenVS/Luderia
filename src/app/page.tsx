"use client"

import { useEffect, useState } from "react";
import CartButton from "@/components/CartButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dataProducts from "./api/page";
import Image from "next/image";
import MenuItems from "@/components/MenuItems";

interface Product {
  id: number;
  name: string;
  plays: string;
  price: number;
  time: string;
  image: string
}

interface CartItem extends Product {
  quantity: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setProducts(dataProducts);
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (id: number) => {
    const product = products.find((prod: Product) => prod.id === id);

    if (!product) return;

    const existingProduct = cart.find(item => item.id === id);

    let updateCart: CartItem[];

    if (existingProduct) {
      updateCart = cart.map(item => item.id ? { ...item, quantity: item.quantity + 1 } : item);
    } else {
      updateCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updateCart);
    localStorage.setItem('cart', JSON.stringify(updateCart))
  }

  return (
    /*era 80 nesse mt*/
    <div className="mt-48"> 
      <Header />
      <div className="p-3">
        <h1 className="text-center text-3xl font-bold md:text-center text-zinc-700 pb-7">  Conheça nossos jogos: </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-11/12 mx-auto mb-16">
          {products.map(product => (
            <MenuItems
              key={product.id}
              id={product.id}
              name={product.name}
              //description={product.de}
              plays={product.plays}
              price={product.price}
              time={product.time}
              image={product.image}
              addToCart={addToCart}
            />
          ))}
        </div>
        <CartButton itemCount={cart.length} />
      </div>
      <Footer />
    </div >
  );
}
