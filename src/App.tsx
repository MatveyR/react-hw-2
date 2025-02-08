import {HomePage, ProductDetailsPage} from "./pages/pages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        </Routes>
    )
}

export default App