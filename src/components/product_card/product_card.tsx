import * as React from 'react';
import Card from '@mui/material/Card';
import styles from "./style.module.css";
import {Box, Tooltip, Typography} from "@mui/material";

interface ProductCardProps {
    product: {
        name: string;
        description?: string;
        category?: string;
        quantity: number;
        unit: string;
        image?: string | null;
    };
    onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({product, onClick}) => {
    return (
        <Tooltip title={product.description} arrow>
            <Card onClick={onClick} className={styles['card']}>
                <Typography className={styles['card-product-name']}>
                    {product.name}
                </Typography>

                <Box
                    component="img" src={product.image ?? undefined}
                    alt="product" className={styles['card-product-img']}
                />

                <Box className={styles['props-box']}>
                    <Typography className={styles['card-prop']}>
                        Категория: {product.category || "Не указано"}
                    </Typography>

                    <Typography className={styles['card-prop']}>
                        Количество: {product.quantity} {product.unit}
                    </Typography>
                </Box>
            </Card>
        </Tooltip>
    );
};
