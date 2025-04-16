import React, { useState, FormEvent } from 'react';
import styles from './styles.css';

import { confirmOrder, CheckoutData } from '../../../modules/checkout/CheckoutContext';

import { Header } from '../../Components/Header/Header';
import { DefaultFooter } from '../../Components/Footer/DefaultFooter';
import { NotificationElement } from '../../Components/Notification/NotificationElement';

import { MapContainer } from '../../Components/Map/MapContainer';

export const CheckoutPage: React.FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [address, setAddress] = useState('');

    const [notification, setNotification] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const data: CheckoutData = {
            name,
            phone,
            email,
            date,
            time,
            address,
        };
        const result = confirmOrder(data);
        setNotification(result);

        if (!result.startsWith('Error:')) {
            setName('');
            setPhone('');
            setEmail('');
            setDate('');
            setTime('');
            setAddress('');
        }
    };

    const handleAddressSelect = (selectedAddress: string) => {
        setAddress(selectedAddress);
    };

    return (
        <div className={styles.page}>
            <Header />

            <main className={styles.mainContent}>
                {notification && (
                    <NotificationElement
                        message={notification}
                        level={notification.startsWith('Error:') ? 'error' : 'info'}
                    />
                )}

                <h1 className={styles.title}>Confirm Your Order</h1>

                <form className={styles.checkoutForm} onSubmit={handleSubmit}>
                    <label>
                        Name*:
                        <input
                            className={styles.textInput}
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>

                    <label>
                        Phone*:
                        <input
                            className={styles.textInput}
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="0501234567"
                        />
                    </label>

                    <label>
                        Email:
                        <input
                            className={styles.textInput}
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="youremail@example.com"
                        />
                    </label>

                    <label>
                        Date:
                        <input
                            className={styles.textInput}
                            type="date"
                            value={date}
                            onChange={e => setDate(e.target.value)}
                        />
                    </label>

                    <label>
                        Time:
                        <input
                            className={styles.textInput}
                            type="time"
                            value={time}
                            onChange={e => setTime(e.target.value)}
                        />
                    </label>

                    <label>
                        Address:
                        <input
                            className={styles.textInput}
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                            placeholder="Street, City..."
                        />
                    </label>

                    <div className={styles.mapPlaceholder}>
                        <p className={styles.mapHelp}>Click on the map to select your address</p>
                        <MapContainer onAddressSelect={handleAddressSelect} />
                    </div>

                    <button type="submit" className={styles.confirmButton}>
                        Confirm Order
                    </button>
                </form>
            </main>

            <DefaultFooter />
        </div>
    );
};