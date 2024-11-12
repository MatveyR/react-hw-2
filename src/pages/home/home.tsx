import * as React from "react";
import {NavBar, Sidebar} from "../../components/components.tsx";
import {useState} from "react";
import styles from "./style.module.css";


export const HomePage: React.FC = () => {
    const [isSidebarClosed, setIsSidebarClosed] = useState(false);

    const handleSidebarToggle = () => {
        setIsSidebarClosed(!isSidebarClosed);
    }

    return (
        <>
            <Sidebar isOpen={isSidebarClosed} onClose={handleSidebarToggle}/>
            <NavBar onSidebarToggle={handleSidebarToggle}/>

            {isSidebarClosed &&
                <div
                    className={styles["blurOverlay"]}
                    onClick={handleSidebarToggle}
                ></div>
            }
        </>
    )
}