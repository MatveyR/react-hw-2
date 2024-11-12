import React from "react";
import styles from "./style.module.css";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({isOpen}) => {
    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
            <div className={styles["sidebar-label"]}>Поиск</div>
            <ul className={styles["sidebar-list"]}>
                <li className={styles["sidebar-item"]}>
                    <input
                        type="text"
                        className={styles["sidebar-input"]}
                        placeholder="Начните вводить..."
                    />
                </li>
            </ul>
            <div className={styles["sidebar-label"]}>Опции</div>
            <ul className={styles["sidebar-list"]}>
                <li className={styles["sidebar-item"]}>
                    <ul className={styles["sidebar-option"]}>
                        <li className={styles["sidebar-option-item"]}>
                            Категория
                        </li>
                        <li className={styles["sidebar-option-item"]}>
                            <select className={styles["sidebar-select"]}>
                                <option value="Любое">Любое</option>
                                <option value="Мебель">Мебель</option>
                                <option value="Инструменты">Инструменты</option>
                                <option value="Бытовая техника">Бытовая техника</option>
                            </select>
                        </li>
                    </ul>
                </li>
                <li className={styles["sidebar-item"]}>
                    <ul className={styles["sidebar-option"]}>
                        <li className={styles["sidebar-option-item"]}>
                            Только то, что есть в наличии на складе
                        </li>
                        <li className={styles["sidebar-option-item"]}>
                            <input type="checkbox"/>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
