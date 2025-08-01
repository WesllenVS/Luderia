"use client"

import { useState } from "react";
import CartButton from "@/components/CartButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import dataProducts from "./api/page";
import Image from "next/image";

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
  const [cart, setCarts] = useState<[]>([]);



  return (
    <div className="mt-80">
      <Header/>
      <div className="p-4 bg-green-600">
        <h1 className="text-center text-2xl font-bold md:text-center text-zinc">  Conheça nossos jogos: </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mx-auto max-w-7xl px-2 mb-16">

        </div>
      </div>
      <CartButton/>
      <Footer/>
    </div>
  );
}
