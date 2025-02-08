import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import styles from "./style.module.css";
import {List, ListItem, Typography} from "@mui/material";

interface NavbarProps {
    onSidebarToggle: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({onSidebarToggle}) => {
    return (
        <AppBar position="absolute" color="default" className={styles['navbar']}>
            <Typography className={styles['navbar-left']} onClick={onSidebarToggle}>
                Меню
            </Typography>

            <List className={styles['navbar-list']}>
                <ListItem className={styles['navbar-item']}>Товары</ListItem>
                <ListItem className={styles['navbar-item']}>Склады</ListItem>
                <ListItem className={styles['navbar-item']}>О системе</ListItem>
                <ListItem className={styles['navbar-item']}>Личная страница</ListItem>
            </List>
        </AppBar>
    );
};
