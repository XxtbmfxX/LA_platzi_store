import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';

import '../styles/components/Payment.css';
import { useHistory } from 'react-router';

const Payment = () => {
    const {
        state: { cart, buyer },
        addNewOrder,
    } = useContext(AppContext);
    const history = useHistory();

    const paypalOptions = {
        clientId:
            'ARf-3vRIz2nvsL-xJTvTYBmV4J_YAGzICv833M9hY6cuQihGqJmXCf2ybX-8cFSuoVfiVQWRwr9nGrTb',
        intent: 'capture',
        currency: 'USD',
    };

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    };

    const handlePaymentSuccess = (data) => {
        console.log(data);
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data,
            };
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) =>
            accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen de pedido:</h3>
                {cart.map((item) => (
                    <div key={item.title} className="Payment-item">
                        <div className="Payment-element">
                            <h4> {item.title} </h4>
                            <span> $ {item.price} </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton
                        options={paypalOptions}
                        style={buttonStyles}
                        amount={handleSumTotal()}
                        onClick={() => console.log('Start Payment')}
                        onSuccess={(data) => handlePaymentSuccess(data)}
                        onError={(error) => console.log(error)}
                        onApprove={(data) => {
                            console.log(data);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Payment;
