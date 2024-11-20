import React from 'react';
import './Beneficios.css';

const Beneficios = () => {
    return (
        <div className="beneficios-container">
            <div className="beneficio">
                <h3>Aprovechá el beneficio del envío gratis</h3>
                <p>Aplica en compras a partir de $40,000. Sumá todo lo que quieras al carrito.</p>
                <img src="https://www.shutterstock.com/image-vector/loading-delivery-truck-checking-cargo-600nw-2383518559.jpg" alt="Envío gratis" />
            </div>
            <div className="beneficio">
                <h3>Elegí tu medio de pago favorito</h3>
                <p>Pagá con tarjeta o en efectivo. Tu dinero está protegido con Mercado Pago.</p>
                <img src="https://media.istockphoto.com/id/1352722793/es/vector/manos-sosteniendo-tarjetas-de-pl%C3%A1stico-de-cr%C3%A9dito-operaciones-financieras-transacciones.jpg?s=612x612&w=0&k=20&c=QJKlyTgGeQf3vJb6hLzkxqC-NSU-4QNo8_Fa4Ge_pKY=" alt="Medio de pago" />
            </div>
            <div className="beneficio">
                <h3>Recibí tus productos en menos de 48 hs</h3>
                <p>Tus paquetes están seguros. Tenés el respaldo de los envíos con Mercado Libre.</p>
                <img src="https://media.istockphoto.com/id/1361841718/es/vector/ilustraci%C3%B3n-de-una-mujer-que-recibe-un-paquete-de-un-repartidor.jpg?s=612x612&w=0&k=20&c=LGUMZjD4UFvggT_MLLcSaagefL1xOsx92BiPcKtH1jU=" alt="Entrega rápida" />
            </div>
        </div>
    );
};

export default Beneficios;
