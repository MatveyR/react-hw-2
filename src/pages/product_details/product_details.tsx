import React from "react";
import {Box} from "@mui/material";
import {NavBar} from "../../components/components.tsx";
import {useNavigate} from "react-router";

export const ProductDetailsPage: React.FC = () => {
    const navigate = useNavigate();

    const handleNavbarProductsClick = () => {
        navigate("/");
    }

    return (
        <Box>
            <NavBar
                onSidebarToggle={handleNavbarProductsClick}
                onNavbarProductsClick={handleNavbarProductsClick}
                isHome={false}
            />
        </Box>
    )
}