import React from 'react';
import { useParams } from 'react-router-dom';
import { useProdutoContext } from '../ProdutoContext';
import './DetalheProduto.css';
import { Link } from 'react-router-dom';

const DetalheProduto = () => {
    const { id } = useParams();
    const { produtos } = useProdutoContext();
    const product = produtos.find((p) => p.id === parseInt(id));

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    const handleAddToCart = () => {
        alert(`Produto "${product.title}" adicionado ao carrinho!`);

    };

    return (
        <div className="detalhe-produto">
            <img src={product.pictureUrl} alt={product.title} className="detalhe-imagem" />
            <div className="detalhe-conteudo">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Preço: R$ {product.price}</p>

                <div className="button-groupE">
                    <Link to={`/item/${id}`} style={{ textDecoration: 'none' }}>
                        <button className="buy-buttonE">Comprar</button>
                    </Link>
                    <button className="add-to-cartE" onClick={handleAddToCart}>
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </div>
    );
};



export default DetalheProduto;