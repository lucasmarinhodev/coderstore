import React from 'react';
import Item from './Item';
import './ItemList.css';

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
];

const ItemList = () => {
    return (
        <>
        <h2>PRODUTOS EM DESTAQUE</h2>
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
        </>
    );
};

export default ItemList;