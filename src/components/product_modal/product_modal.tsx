import React from "react";
import styles from "./style.module.css";
import {Modal, Button, Typography, Box} from '@mui/material';

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
        <Box>
            <Modal open={true} onClose={onClose} className={styles['modal']}>
                <Box className={styles['modal-content']}>
                    <Typography className={styles['modal-product-name']}>
                        {product.name}
                    </Typography>

                    {product.image ? (
                        <Box
                            component="img"
                            src={product.image}
                            alt={product.name}
                            className={styles['modal-product-img']}
                        />
                    ) : (
                        <Typography>
                            Картинка отсутствует
                        </Typography>
                    )}

                    <Typography sx={{fontFamily: "sans-serif"}}>{product.description}</Typography>

                    <Typography className={styles['modal-product-prop']}>
                        Категория: {product.category || 'Не указано'}
                    </Typography>

                    <Typography className={styles['modal-product-prop']}>
                        Количество: {product.quantity} {product.unit}
                    </Typography>

                    <Button onClick={onClose} variant="outlined">
                        Закрыть
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

