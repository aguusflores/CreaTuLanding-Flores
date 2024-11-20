import './backend-fake.css';
import React from 'react';

const base_de_datos = [
{
    id: 1,
    nombre: "Vasox12",
    precio: 3000,
    clasificacion: "Hogar",
    img: "https://www.sustenmarket.com/wp-content/uploads/2021/06/ML-Foto-producto-2-768x768.png",
    className: "producto-eco"
},
{
    id: 2,
    nombre: "Shampoo solido",
    precio: 7000,
    clasificacion: "Higiene personal",
    img: "https://www.sustenmarket.com/wp-content/uploads/2021/01/hibisco.jpeg",
    className: "producto-eco"
},
{
    id: 3,
    nombre: "Copa menstrual",
    precio: 4300,
    clasificacion: "Higiene personal",
    img: "https://www.sustenmarket.com/wp-content/uploads/2021/12/Copas-menstruales-bolsita-GAIA-scaled.jpg",
    className: "producto-eco"
},
{
    id: 4,
    nombre: "Cepillo bambu",
    clasificacion: "Higiene bucal",
    precio: 2400,
    img: "https://www.sustenmarket.com/wp-content/uploads/2019/12/Cepillo-Infografia-1024x943-1.png",
    className: "producto-eco"
},
{
    id: 5,
    nombre: "Sorbete metalico",
    clasificacion: "Hogar",
    precio: 500,
    img: "https://www.sustenmarket.com/wp-content/uploads/2020/01/5c8e83536d0a8_e7f029e5c38aaf03e7c2934f8f9e4b07.jpg",
    className: "producto-eco"
},
{
    id: 6,
    nombre: "Hisopo bambu",
    clasificacion: "Higiene personal",
    precio: 2600,
    img: "https://www.sustenmarket.com/wp-content/uploads/2021/08/Meraki-Hisopos_020-scaled.jpg",
    className: "producto-eco"
},
{
    id: 7,
    nombre: "Servilletas x20",
    clasificacion: "Hogar",
    precio: 700,
    img: "https://www.sustenmarket.com/wp-content/uploads/2021/06/natural-pack-2.jpg",
    className: "producto-eco"
},

];

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(base_de_datos);
            reject("Error");
        }, 2000);
    });
}

export  const getProductsbyCategory = (clasificacion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(base_de_datos.filter((e => e.clasificacion === clasificacion)));
            reject("Error");
        }, 2000);
    });
}

