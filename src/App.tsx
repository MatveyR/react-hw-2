import {HomePage, ProductDetailsPage} from "./pages/pages";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        </Routes>
    )
}

export default App