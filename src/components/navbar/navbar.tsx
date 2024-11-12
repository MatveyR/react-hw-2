import styles from "./style.module.css";

interface NavbarProps {
    onSidebarToggle: () => void;
}

export const NavBar: React.FC<NavbarProps> = ({ onSidebarToggle }) => {
    return (
        <nav className={styles["navigation-bar"]}>
            <a onClick={onSidebarToggle} className={styles["navbar-left"]}>
                Меню
            </a>
            <ul className={styles["navbar-list"]}>
                <li className={styles["navbar-item"]}>Товары</li>
                <li className={styles["navbar-item"]}>Склады</li>
                <li className={styles["navbar-item"]}>О системе</li>
                <li className={styles["navbar-item"]}>Личная страница</li>
            </ul>
        </nav>
    );
};