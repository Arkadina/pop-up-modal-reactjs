import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import { motion, AnimatePresence } from "framer-motion";

function App() {
    const [isVisible, setIsVisible] = useState(false);

    function handleOnClick() {
        if (isVisible === false) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    return (
        <div className="App">
            <button onClick={(e) => handleOnClick()}>Show modal</button>
            <AnimatePresence>{isVisible && <Modal />}</AnimatePresence>
        </div>
    );
}

export default App;
