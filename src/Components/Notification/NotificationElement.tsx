import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

type ErrorElementType = {
    level: 'error' | 'info'
    message: string
}

export const NotificationElement: React.FC<ErrorElementType> = ({ message, level }) => {
    return <div className={classNames(styles.notification, {
        [styles.error]: level === 'error',
        [styles.info]: level === 'info'
    })}>{message}</div>;
};