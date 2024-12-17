import React, {useState} from "react";
import styles from "./style.module.css";
import {Button} from "@mui/material";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onFiltrate: (filter: { textMask: string, category: string, nonZeroQ: boolean }) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({isOpen, onFiltrate}) => {

    const [textMask, setSearchText] = useState('');
    const [category, setCategory] = useState('');
    const [nonZeroQ, setNonZeroQ] = useState(false);

    const handleSetFilters = () => {
        onFiltrate({textMask, category, nonZeroQ});
    };

    const handleResetFilters = () => {
        setSearchText('');
        setCategory('');
        setNonZeroQ(false);
        onFiltrate({textMask, category, nonZeroQ});
    }

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
            <div className={styles["sidebar-label"]}>Поиск</div>
            <ul className={styles["sidebar-list"]}>
                <li className={styles["sidebar-item"]}>
                    <input
                        type="text"
                        className={styles["sidebar-input"]}
                        placeholder="Начните вводить..."
                        onChange={(e) => setSearchText(e.target.value.toLowerCase().trim())}
                    />
                </li>
            </ul>
            <div className={styles["sidebar-label"]}>Фильтры</div>
            <ul className={styles["sidebar-list"]}>
                <li className={styles["sidebar-item"]}>
                    <ul className={styles["sidebar-option"]}>
                        <li className={styles["sidebar-option-item"]}>
                            Категория
                        </li>
                        <li className={styles["sidebar-option-item"]}>
                            <select className={styles["sidebar-select"]} onChange={(e) => setCategory(e.target.value)}>
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
                            Только то, что есть в наличии на складах
                        </li>
                        <li className={styles["sidebar-option-item"]}>
                            <input type="checkbox" onChange={(e) => setNonZeroQ(e.target.checked)}/>
                        </li>
                    </ul>
                </li>
                <li>
                    <Button
                        variant="contained"
                        sx={{
                            justifyContent: "flex-end",
                            marginBottom: "15px",
                            background: '#1b222c'
                        }}
                        onClick={() => handleSetFilters()}
                    >
                        Применить фильтры
                    </Button>
                </li>
                <li>
                    <Button
                        variant="contained"
                        sx={{
                            justifyContent: "flex-end",
                            background: '#1b222c'
                        }}
                        onClick={() => handleResetFilters()}
                    >
                        Cбросить фильтры
                    </Button>
                </li>
            </ul>
        </div>
    );
};
