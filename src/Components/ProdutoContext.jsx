import React, { createContext, useContext, useState } from 'react';

// Contexto para armazenar os produtos
const ProdutoContext = createContext();

export const useProdutoContext = () => useContext(ProdutoContext);

export const ProdutoProvider = ({ children }) => {
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            title: 'Produto 1',
            price: 199.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+1',
        },
        {
            id: 2,
            title: 'Produto 2',
            price: 299.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+2',
        },
        {
            id: 3,
            title: 'Produto 3',
            price: 399.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+3',
        },
        {
            id: 4,
            title: 'Produto 4',
            price: 499.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+4',
        },
        {
            id: 5,
            title: 'Produto 5',
            price: 199.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+5',
        },
        {
            id: 6,
            title: 'Produto 6',
            price: 299.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+6',
        },
        {
            id: 7,
            title: 'Produto 7',
            price: 399.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+7',
        },
        {
            id: 8,
            title: 'Produto 8',
            price: 499.99,
            pictureUrl: 'https://via.placeholder.com/300x300?text=Produto+8',
        },
    ]);

    return (
        <ProdutoContext.Provider value={{ produtos, setProdutos }}>
            {children}
        </ProdutoContext.Provider>
    );
};