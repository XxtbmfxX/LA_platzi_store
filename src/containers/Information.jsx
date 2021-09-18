import React from 'react';

import '../styles/components/Information.css';

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-Content">
                <div className="Information-head">
                    <h2>Información de contacto</h2>
                </div>
                <div className="Information-head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input
                            type="text"
                            placeholder="Nombre Completo"
                            name="name"
                        />
                        <input
                            type="text"
                            placeholder="Correo Electronico"
                            name="email"
                        />
                        <input
                            type="text"
                            placeholder="Direccion"
                            name="address"
                        />
                        <input type="text" placeholder="Apto" name="apto" />
                        <input type="text" placeholder="Ciudad" name="city" />
                        <input type="text" placeholder="Pais" name="country" />
                        <input
                            type="text"
                            placeholder="Estado/Región"
                            name="state"
                        />
                        <input
                            type="text"
                            placeholder="Codigo postal"
                            name="cp"
                        />
                        <input
                            type="text"
                            placeholder="Teléfono"
                            name="phone"
                        />
                    </form>
                </div>
                <div className="Information-buttons">
                    <div className="Information-back">Regresar</div>
                    <div className="Information-next">Pagar</div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido:</h3>
                <div className="Information-item">
                    <div className="information-element">
                        <h4>Item Name</h4>
                        <span> $10 </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;
