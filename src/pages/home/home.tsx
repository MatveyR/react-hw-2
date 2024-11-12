import * as React from "react";
import {NavBar, ProductCard, ProductModal, Sidebar} from "../../components/components";
import { useState } from "react";
import productsData from "../../data/products.json";
import styles from "./style.module.css";
import {Product} from "../../data/Product.tsx";

export const HomePage: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductClick = (product: Product) => {
        setSelectedProduct(product);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
    };

    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarClosed(!isSidebarClosed);
    }

    return (
        <div>
            <Sidebar isOpen={isSidebarClosed} onClose={handleSidebarToggle}/>
            <NavBar onSidebarToggle={handleSidebarToggle}/>

            <div className={styles.productsGrid}>
                {productsData.map((product: Product, index: number) => (
                    <ProductCard
                        key={index}
                        product={product}
                        onClick={() => handleProductClick(product)}
                    />
                ))}
            </div>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}

            {isSidebarClosed &&
                <div
                    className={styles["blurOverlay"]}
                    onClick={handleSidebarToggle}
                ></div>
            }
        </div>
    );
};
