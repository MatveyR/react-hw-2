import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import styles from "./style.module.css";
import {Box, List, ListItem, Typography} from "@mui/material";

interface NavbarProps {
    onSidebarToggle: () => void;
    onNavbarProductsClick: () => void;
    isHome: boolean;
}

export const NavBar: React.FC<NavbarProps> = ({ onSidebarToggle, onNavbarProductsClick, isHome }) => {
    return (
        <AppBar position="absolute" color="default" className={styles['navbar']}>
            {isHome ? (
                <Typography className={styles['navbar-left']} onClick={onSidebarToggle}>
                    Меню
                </Typography>
            ) : (
                <Box></Box>
            )}

            <List className={styles['navbar-list']}>
                <ListItem className={styles['navbar-item']} onClick={onNavbarProductsClick}>Товары</ListItem>
                <ListItem className={styles['navbar-item']}>Склады</ListItem>
                <ListItem className={styles['navbar-item']}>О системе</ListItem>
                <ListItem className={styles['navbar-item']}>Личная страница</ListItem>
            </List>
        </AppBar>
    );
};