import { useState, useEffect } from 'react';
import { getProductById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import React from 'react';
import { Container } from 'react-bootstrap'; 
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'products', itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])

    return (
        <Container className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </Container>
    );  
};

export default ItemDetailContainer;
