import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../services/firebase';

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(db, 'products', itemId);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setItem({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log('¡No existe ese documento!');
        }
      } catch (error) {
        console.error('Error al obtener el producto: ', error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [itemId]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return item ? <ItemDetail item={item} /> : <p>Producto no encontrado</p>;
};

export default ItemDetailContainer;