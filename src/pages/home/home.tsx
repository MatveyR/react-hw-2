import * as React from "react";
import {NavBar, ProductCard, ProductModal, Sidebar} from "../../components/components";
import {useState} from "react";
import productsData from "../../data/products.json";
import styles from "./style.module.css";
import {Product} from "../../data/Product.tsx";
import {Pagination} from "@mui/material";

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

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const [filters, setFilters] = useState({textMask: '', category: '', nonZeroQ: false});
    const handleFilters = (filters: {textMask: string, category: string, nonZeroQ: boolean}) => {
        setFilters(filters)
    };

    const filtratedData = productsData.filter(product => {
        return  (
            (filters.textMask === '' || product.name.toLowerCase().includes(filters.textMask)) &&
            (!filters.nonZeroQ || product.quantity > 0) &&
            (filters.category === '' || product.category === filters.category)
        )
    });
    const paginatedData = filtratedData.slice((currentPage - 1) * 10, currentPage * 10);

    return (
        <div>
            <Sidebar isOpen={isSidebarClosed} onClose={handleSidebarToggle} onFiltrate={handleFilters}/>
            <NavBar onSidebarToggle={handleSidebarToggle}/>

            <div className={styles.productsGrid}>
                {paginatedData.map((product: Product, index: number) => (
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

            <Pagination
                count={Math.ceil(productsData.length / 10)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{marginTop: 2, display: 'flex', justifyContent: 'center'}}
            />
        </div>
    );
};
