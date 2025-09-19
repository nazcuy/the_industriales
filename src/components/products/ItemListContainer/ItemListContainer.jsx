import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import db from '../../../services/firebase';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({ saludo }) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        let productsRef = collection(db, 'products');
        
        if (categoryId) {
          const q = query(productsRef, where('categoria', '==', categoryId));
          const querySnapshot = await getDocs(q);
          const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setItems(products);
        } else {
          const querySnapshot = await getDocs(productsRef);
          const products = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setItems(products);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div className="item-list-container">
      <h2 className="bienvenida">{saludo}</h2>
      <p className="bienvenida-subtit">Explorá nuestro catálogo de productos</p>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;