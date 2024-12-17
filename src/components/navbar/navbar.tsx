import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import styles from "./style.module.css";

interface NavbarProps {
    onSidebarToggle: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
    return (
        <AppBar position="absolute" color="default" sx={{
            backgroundColor: '#1b222c',
            color: 'white',
            borderBottom: '3px solid #2f3a4c',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '16px',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            zIndex: 2
        }}>
            <div className={styles['navbar-left']} onClick={onSidebarToggle}>
                Меню
            </div>
            <ul className={styles['navbar-list']}>
                <li className={styles['navbar-item']}>Товары</li>
                <li className={styles['navbar-item']}>Склады</li>
                <li className={styles['navbar-item']}>О системе</li>
                <li className={styles['navbar-item']}>Личная страница</li>
            </ul>
        </AppBar>
    );
};
