import App from "./App";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import {Provider} from "react-redux";
import store from "./data/redux/store.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>,
)