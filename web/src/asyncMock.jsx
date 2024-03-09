import React from "react";
import { collection, getDocs, query, where, documentId } from "firebase/firestore";
import { db } from "./services/firebase/firebaseConfig";

const products = [
    {
        id: '1',
        name: 'Amigurumi de Luffy',
        price: 120000,
        category: 'Amigurumis',
        img: 'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/423193616_1242816620114013_1643989797267208862_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGlL5m0CPyiwSKOA_Ug1pHTwD7MFtm8y4TAPswW2bzLhKQsv2vpPe1wjq6vBN5dwtO7rgG12VhHb8Y0GzIGkUlT&_nc_ohc=FHZeSwIewPMAX96eqPD&_nc_ht=scontent.fbog4-1.fna&oh=00_AfDrSIQrXEQVfphM4oCFvnP_jnpSzyUNrY8izBicV7rydw&oe=65F0D2E4',
        stock: 3,
        description: 'Aamigurumi del capitán de los sombreros de paja'
        
    },
    {
        id: '2',
        name: 'Amigurumi 2',
        price: 2000,
        category: 'Tejidos',
        img: 'https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/421507952_1236505797411762_8146378017597780773_n.jpg?stp=dst-jpg_s600x600&_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE0UPBfLS3dzuTRmAk7QvPC_gGquzjS4Qz-Aaq7ONLhDNBePD8PW2rV8OJGRVOP6eAOJhdErmLGY-7TzEe-DfB0&_nc_ohc=-40byYd-cjwAX8ub703&_nc_ht=scontent.fbog4-1.fna&oh=00_AfD-tudcGAaUNQ8EQ84AO-zYNOSrFj3ncs6GotIKddU9tQ&oe=65DAC4A0',
        stock: 25,
        description: 'Descrpción de Amigurumi'
    },
    {
        id: '3',
        name: 'Amigurumi 3',
        price: 3000,
        category: 'Manualidades',
        img: 'https://scontent.fbog4-2.fna.fbcdn.net/v/t39.30808-6/411193271_1205976420464700_5728229233614121426_n.jpg?stp=dst-jpg_p480x480&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeGTXkkI7RdZN4KMdWnPObOkLSt6vRihF6stK3q9GKEXq1W2WJrHgWeEGhLt0qnag9qY_l0sAwWLcpDvYSg1mHo6&_nc_ohc=J0QKvXbcvAYAX_-bUnZ&_nc_ht=scontent.fbog4-2.fna&oh=00_AfB_0vIF_mdbzztxFCftpF1HBOIr75Tm8pWAfIsujhZtpQ&oe=65D9B405',
        stock: 25,
        description: 'Descrpción de Amigurumi'
    }
]

export const getProducts = async (ids) => {
    const productsRef = collection(db, 'products');
    const q = query(productsRef, where(documentId(), 'in', ids));
    const querySnapshot = await getDocs(q);
    return querySnapshot;
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}