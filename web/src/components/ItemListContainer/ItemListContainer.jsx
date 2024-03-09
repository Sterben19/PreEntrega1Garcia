import { useState, useEffect } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemListContainer.css';
import { db } from '../../services/firebase/firebaseConfig';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, 'products'), where('category', '==', categoryId))
      : collection(db, 'products');

    getDocs(collectionRef)
      .then(response => {
        const productAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productAdapted);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="container">
      <h1>{greeting}</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
