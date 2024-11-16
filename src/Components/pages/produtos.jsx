import React from 'react';
import Item from '../Item';

const mockProducts = [
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
];

const Produtos = () => {
    return (
        <div className="produtos-page">
            <h2>PRODUTOS</h2>
            <div className="item-list">
                {mockProducts.map((product) => (
                    <Item
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        pictureUrl={product.pictureUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Produtos;