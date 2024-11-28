import React, { createContext, useContext, useState } from 'react';


const ProdutoContext = createContext();

export const useProdutoContext = () => useContext(ProdutoContext);

export const ProdutoProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            title: "TECLADO GAMER RGB - LU734-NOC-SA",
            price: 199.99,
            pictureUrl: "https://lvlupgamingla.com/cdn/shop/products/809A4785_2_1200x1700.png?v=1642207350",
          },
          {
            id: 2,
            title: "HEADSET GAMING LIGHT UP PRO COM MICROFONE",
            price: 299.99,
            pictureUrl: "https://lvlupgamingla.com/cdn/shop/products/809A4695_1200x1700.png?v=1640102625",
          },
          {
            id: 3,
            title: "MESA GAMER KOBRA - LU980-NOC-SA",
            price: 399.99,
            pictureUrl: "https://lvlupgamingla.com/cdn/shop/products/809A4909_1200x1700.png?v=1641503484",
          },
          {
            id: 4,
            title: "KIT GAMER 3 EN 1 - LU745-NOC-ESP",
            price: 159.99,
            pictureUrl: "https://lvlupgamingla.com/cdn/shop/products/kit-negro_1200x1700.png?v=1641432866",
          },
          {
            id: 5,
            title: "CADEIRA GAMER",
            price: 199.99,
            pictureUrl: "https://a-static.mlcdn.com.br/1500x1500/cadeira-gamer-com-led-rgb-fox-racer-confortavel-ergonomica-fox-online/uppistoredistribuidora/33/d10bb120f5c31cd065223987a84cd52a.jpeg",
          },
          {
            id: 6,
            title: "COOLER GAMER",
            price: 299.99,
            pictureUrl: "https://img.terabyteshop.com.br/produto/g/water-cooler-gamer-ninja-spectro-argb-120mm-intel-amd-controladora-black-gn-b120_172875.jpg",
          },
          {
            id: 7,
            title: "TABLET 12'",
            price: 399.99,
            pictureUrl: "https://fujiokadistribuidor.vteximg.com.br/arquivos/ids/277337",
          },
          {
            id: 8,
            title: "SMART WATCH",
            price: 499.99,
            pictureUrl: "https://a-static.mlcdn.com.br/800x560/smartwatch-samsung-galaxy-watch-fe-40mm-preto-16gb-bluetooth/magazineluiza/238653800/8f7e7df0dc836dd07e1c734f7fdee1ba.jpg",
          },
    ]);

    return (
        <ProdutoContext.Provider value={{ produtos, setProdutos }}>
            {children}
        </ProdutoContext.Provider>
    );
};