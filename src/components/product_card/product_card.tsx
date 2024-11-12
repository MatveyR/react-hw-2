import React from "react";
import styles from "./style.module.css";

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

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div className={styles.productCard} onClick={onClick}>
            <div className={styles.productImage}>
                {product.image ? (
                    <img src={product.image} alt={product.name} />
                ) : (
                    <span>Картинка отсутствует</span>
                )}
            </div>
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.productDescription}>{product.description}</div>
            <div className={styles.productDetails}>
                Категория: {product.category || "Не указано"} <br />
                Количество: {product.quantity} {product.unit}
            </div>
        </div>
    );
};
