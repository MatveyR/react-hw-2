import React from "react";
import styles from "./style.module.css";

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

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2>{product.name}</h2>
                <div>
                    {product.image ? (
                        <img src={product.image} alt={product.name} style={{ width: "100%", height: "auto" }} />
                    ) : (
                        <div>Картинка отсутствует</div>
                    )}
                </div>
                <p>{product.description}</p>
                <p>Категория: {product.category || "Не указано"}</p>
                <p>Количество: {product.quantity} {product.unit}</p>
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
};
