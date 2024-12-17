import * as React from 'react';
import Card from '@mui/material/Card';
import {Tooltip, Typography} from "@mui/material";

interface ProductCardProps {
    product: {
        name: string;
        description?: string;
        category?: string;
        quantity: number;
        unit: string;
        image: string;
    };
    onClick: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({product, onClick}) => {
    return (
        <Tooltip title={product.description} arrow sx={{maxHeight: "10px", maxWidth: "10px"}}>
            <Card onClick={onClick} sx={{
                border: '1px solid #ddd',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                '&:hover': {
                    transform: 'scale(1.05)'
                }
            }}
            >
                <Typography sx={{
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginBottom: '10px'
                }}>
                    {product.name}
                </Typography>
                <img src={product.image} alt="product" style={{maxWidth: '90%', marginTop: "10px"}}/>
                <div style={{marginTop: "10px"}}>
                    <Typography sx={{fontFamily: "sans-serif"}}>Категория: {product.category || "Не указано"}</Typography>
                    <Typography sx={{fontFamily: "sans-serif"}}>Количество: {product.quantity} {product.unit}</Typography>
                </div>
            </Card>
        </Tooltip>
    );
};
