import React, {useState} from "react";
import styles from "./style.module.css";
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    List,
    ListItem,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
    onFiltrate: (filter: { textMask: string; category: string; nonZeroQ: boolean }) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({isOpen, onFiltrate}) => {
    const [textMask, setSearchText] = useState("");
    const [category, setCategory] = useState("");
    const [nonZeroQ, setNonZeroQ] = useState(false);

    const handleSetFilters = () => {
        onFiltrate({textMask, category, nonZeroQ});
    };

    const handleResetFilters = () => {
        setSearchText("");
        setCategory("");
        setNonZeroQ(false);
        onFiltrate({textMask: "", category: "", nonZeroQ: false});
    };

    return (
        <Box className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}>
            <Typography className={styles["sidebar-label"]}>Поиск</Typography>

            <List className={styles["sidebar-list"]}>
                <ListItem className={styles["sidebar-item"]}>
                    <TextField
                        className={styles["sidebar-input"]}
                        size="small"
                        fullWidth
                        variant="outlined"
                        placeholder="Начните вводить..."
                        value={textMask || ""}
                        onChange={(e) => setSearchText(e.target.value.toLowerCase().trim())}
                    />
                </ListItem>
            </List>

            <Typography className={styles["sidebar-label"]}>Фильтры</Typography>

            <List className={styles["sidebar-list"]}>
                <ListItem className={styles["sidebar-item"]}>
                    <Box className={styles["sidebar-option"]}>
                        <Typography className={styles["sidebar-option-label"]}>Категория</Typography>
                        <FormControl fullWidth variant="outlined" className={styles["sidebar-select-container"]}>
                            <Select
                                variant="outlined"
                                size="small"
                                className={styles["sidebar-select"]}
                                value={category || "Любое"}
                                onChange={(e) => {
                                    if (e.target.value === "Любое") {
                                        setCategory("");
                                    } else {
                                        setCategory(e.target.value);
                                    }
                                }}
                            >
                                <MenuItem value="Любое">Любое</MenuItem>
                                <MenuItem value="Мебель">Мебель</MenuItem>
                                <MenuItem value="Инструменты">Инструменты</MenuItem>
                                <MenuItem value="Бытовая техника">Бытовая техника</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </ListItem>

                <ListItem className={styles["sidebar-item"]}>
                    <Box className={styles["sidebar-option"]}>
                        <Typography className={styles["sidebar-option-label"]}>
                            Только то, что есть в наличии на складах
                        </Typography>
                        <Checkbox
                            className={styles["sidebar-checkbox"]}
                            checked={nonZeroQ || false}
                            onChange={(e) => setNonZeroQ(e.target.checked)}
                        />
                    </Box>
                </ListItem>

                <ListItem className={styles["sidebar-button-container"]}>
                    <Button
                        variant="contained"
                        className={styles["sidebar-button"]}
                        onClick={handleSetFilters}
                    >
                        Применить фильтры
                    </Button>
                </ListItem>

                <ListItem className={styles["sidebar-button-container"]}>
                    <Button
                        variant="contained"
                        className={styles["sidebar-button"]}
                        onClick={handleResetFilters}
                    >
                        Сбросить фильтры
                    </Button>
                </ListItem>
            </List>
        </Box>
    );
};