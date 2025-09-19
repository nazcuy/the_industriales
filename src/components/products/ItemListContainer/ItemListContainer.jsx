import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import pedidos1 from '../../../assets/images/pedidos/1.jpg';
import pedidos2 from '../../../assets/images/pedidos/2.jpg';
import pedidos3 from '../../../assets/images/pedidos/3.jpg';
import tazas1 from '../../../assets/images/tazas/1.jpg';
import tazas2 from '../../../assets/images/tazas/2.jpg';
import tazas3 from '../../../assets/images/tazas/3.jpg';
import remeras1 from '../../../assets/images/remeras/1.jpg';
import remeras2 from '../../../assets/images/remeras/2.jpg';
import remeras3 from '../../../assets/images/remeras/3.jpg';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
/*/import Item from '../Item/Item'; */

const productos = [
  { id: 1, nombre: 'Pedido 1', categoria: 'pedidos', imagen: pedidos1, price: 2500 },
  { id: 2, nombre: 'Pedido 2', categoria: 'pedidos', imagen: pedidos2, price: 2800 },
  { id: 3, nombre: 'Pedido 3', categoria: 'pedidos', imagen: pedidos3, price: 3200 },
  { id: 4, nombre: 'Taza 1', categoria: 'tazas', imagen: tazas1, price: 1500 },
  { id: 5, nombre: 'Taza 2', categoria: 'tazas', imagen: tazas2, price: 1800 },
  { id: 6, nombre: 'Taza 3', categoria: 'tazas', imagen: tazas3, price: 2000 },
  { id: 7, nombre: 'Remera 1', categoria: 'remeras', imagen: remeras1, price: 3500 },
  { id: 8, nombre: 'Remera 2', categoria: 'remeras', imagen: remeras2, price: 3800 },
  { id: 9, nombre: 'Remera 3', categoria: 'remeras', imagen: remeras3, price: 4200 },
];

const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(productos.filter(p => p.categoria === categoryId));
        } else {
          resolve(productos);
        }
      }, 500);
    }).then(setItems);
  }, [categoryId]);

    return (
    <div className="item-list-container">
      <h2 className="bienvenida">{saludo}</h2>
      <p className="bienvenida-subtit">Explorá nuestro catálogo de productos</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;