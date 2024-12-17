import React from "react";
import styles from "./style.module.css";
import {Modal, Button, Typography} from '@mui/material';

interface ProductModalProps {
    product: {
        name: string;
        description?: string;
        category?: string;
        quantity: number;
        unit: string;
        image?: string | null;
    };
    onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({product, onClose}) => {
    // Dialog имеет гораздо больше фишек для настройки визуала и анимаций, Modal в противовес более базовый
    // В данном случае мне достаточно функционала Modal, поэтому использую его
    return (
        <>
            <Modal open={true} onClose={onClose} sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div className={styles.modalContent}>
                    <Typography sx={{
                        fontFamily: "sans-serif",
                        fontSize: "1.2rem",
                        fontWeight: "Bold",
                        marginBottom: "10px"
                    }}>{product.name}</Typography>
                    {product.image ? (
                        <img src={product.image} alt={product.name}
                             style={{width: '100%', height: 'auto', marginBottom: "10px"}}/>
                    ) : (
                        <div>Картинка отсутствует</div>
                    )}
                    <Typography sx={{fontFamily: "sans-serif"}}>{product.description}</Typography>
                    <Typography
                        sx={{fontFamily: "sans-serif"}}>Категория: {product.category || 'Не указано'}</Typography>
                    <Typography
                        sx={{fontFamily: "sans-serif"}}>Количество: {product.quantity} {product.unit}</Typography>
                    <Button onClick={onClose} variant="outlined">
                        Закрыть
                    </Button>
                </div>
            </Modal>
        </>
    );
};

