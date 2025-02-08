import * as React from "react";
import {useState} from "react";
import {NavBar, ProductCard, ProductModal, Sidebar} from "../../components/components";
import styles from "./style.module.css";
import {Product} from "../../data/models/Product.tsx";
import {Box, Pagination} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {removeProduct} from "../../data/redux/productSlice.tsx";
import {RootState} from "@reduxjs/toolkit/query";

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
    const handlePageChange = (_event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    const [filters, setFilters] = useState({textMask: '', category: '', nonZeroQ: false});
    const handleFilters = (filters: { textMask: string, category: string, nonZeroQ: boolean }) => {
        setFilters(filters)
    };

    const { products } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    const handleRemoveProduct = (product_id: string) => {
        dispatch(removeProduct(product_id));
    };

    const filtratedData = products.filter((product: { name: string; quantity: number; category: never; }) => {
        return (
            (filters.textMask === '' || product.name.toLowerCase().includes(filters.textMask)) &&
            (!filters.nonZeroQ || product.quantity > 0) &&
            (filters.category === '' || product.category === filters.category)
        )
    });
    const paginatedData = filtratedData.slice((currentPage - 1) * 10, currentPage * 10);

    return (
        <Box>
            <Sidebar isOpen={isSidebarClosed} onClose={handleSidebarToggle} onFiltrate={handleFilters}/>
            <NavBar onSidebarToggle={handleSidebarToggle}/>

            <Box className={styles.productsGrid}>
                {paginatedData.map((product: Product, index: number) => (
                    <ProductCard
                        key={index}
                        product={product}
                        onCardClick={() => handleProductClick(product)}
                        onDeleteClick={() => handleRemoveProduct(product.id)}
                    />
                ))}
            </Box>

            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={handleCloseModal}
                />
            )}

            {isSidebarClosed &&
                <Box
                    className={styles["blurOverlay"]}
                    onClick={handleSidebarToggle}
                ></Box>
            }

            <Pagination
                count={Math.ceil(filtratedData.length / 10)}
                page={currentPage}
                onChange={handlePageChange}
                sx={{display: 'flex', justifyContent: 'center'}}
            />
        </Box>
    );
};
