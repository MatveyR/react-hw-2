import React, {useState} from "react";
import styles from "./style.module.css";
import {Box, Button, MenuItem, Modal, Select, TextField, Typography} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../data/store/store.tsx";
import {addProduct} from "../../../data/store/slices/productSlice.tsx";

interface ProductAddNewProps {
    onClose: () => void;
}

export const ProductAddNew: React.FC<ProductAddNewProps> = ({onClose}) => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState)=> state.products.products)

    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productQuantity, setProductQuantity] = useState(-1);
    const [productPrice, setProductPrice] = useState(-1);
    const [productImage, setProductImage] = useState<string | null>(null);

    const [nameError, setNameError] = useState<string | null>(null);
    const [descError, setDescError] = useState<string | null>(null);
    const [catError, setCatError] = useState<string | null>(null);
    const [quanError, setQuanError] = useState<string | null>(null);
    const [priceError, setPriceError] = useState<string | null>(null);

    const resetErrors = () => {
        setNameError(null);
        setDescError(null);
        setCatError(null);
        setQuanError(null);
        setPriceError(null);
    };

    const handleSaveProduct = (name: string, desc: string, cat: string, quan: number, price: number) => {
        resetErrors();
        let errorFlag = false;
        if (name === "") {
            setNameError("Обязательное поле");
            errorFlag = true;
        }
        if (desc === "") {
            setDescError("Обязательное поле");
            errorFlag = true;
        }
        if (cat === "") {
            setCatError("Обязательное поле");
            errorFlag = true;
        }
        if (quan === -1 || isNaN(quan)) {
            setQuanError("Обязательное поле");
            errorFlag = true;
        }
        if (price === -1 || isNaN(price)) {
            setPriceError("Обязательное поле");
            errorFlag = true;
        }
        if (errorFlag) {
            return;
        }
        dispatch(
          addProduct({
              id: String(products.length + 1),
              name: productName,
              description: productDescription,
              category: productCategory,
              quantity: productQuantity,
              price: productPrice,
              unit: "шт.",
              image: productImage
          })
        );
        onClose();
    };

    return (
        <Modal open={true} onClose={onClose} className={styles['modal']}>
            <Box className={styles['modal-content']}>
                <Typography className={styles['modal-label']}>
                    Добавление нового товара
                </Typography>

                <Box className={styles['modal-form']}>
                    <Box className={styles['modal-form-option']}>
                        <Typography>
                            Название:
                        </Typography>
                        <TextField
                            size="small"
                            error={!!nameError}
                            helperText={nameError}
                            onChange={(e) => {
                                setProductName(e.target.value)
                            }}
                        />
                    </Box>

                    <Box className={styles['modal-form-option']}>
                        <Typography>
                            Описание:
                        </Typography>
                        <TextField
                            size="small"
                            error={!!descError}
                            helperText={descError}
                            onChange={(e) => {
                                setProductDescription(e.target.value)
                            }}
                        />
                    </Box>

                    <Box className={styles['modal-form-option']}>
                        <Typography>
                            Категория:
                        </Typography>
                        <Select
                            size="small"
                            variant="outlined"
                            value={productCategory || "Любое"}
                            error={!!catError}
                            onChange={
                                (e) => {
                                    setProductCategory(e.target.value)
                                }
                            }
                        >
                            <MenuItem value="Любое">Любое</MenuItem>
                            <MenuItem value="Мебель">Мебель</MenuItem>
                            <MenuItem value="Инструменты">Инструменты</MenuItem>
                            <MenuItem value="Бытовая техника">Бытовая техника</MenuItem>
                        </Select>
                    </Box>

                    <Box className={styles['modal-form-option']}>
                        <Typography>
                            Количество, шт.:
                        </Typography>
                        <TextField
                            size="small"
                            error={!!quanError}
                            helperText={quanError}
                            onChange={(e) => {
                                setProductQuantity(Number(e.target.value))
                            }}
                        />
                    </Box>

                    <Box className={styles['modal-form-option']}>
                        <Typography>
                            Цена, р.:
                        </Typography>
                        <TextField
                            size="small"
                            error={!!priceError}
                            helperText={priceError}
                            onChange={(e) => {
                                setProductPrice(Number(e.target.value))
                            }}
                        />
                    </Box>

                    <Box className={styles['modal-form-option']}>
                        <Typography>
                            URL фотографии:
                        </Typography>
                        <TextField
                            size="small"
                            onChange={(e) => {
                                setProductImage(e.target.value)
                            }}
                        />
                    </Box>
                </Box>
                <Box className={styles['modal-box-save-button']}>
                    <Button
                        className={styles['modal-save-button']}
                        variant="contained"
                        onClick={() => handleSaveProduct(productName, productDescription, productCategory, productQuantity, productPrice)}
                    >
                        Сохранить
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};

