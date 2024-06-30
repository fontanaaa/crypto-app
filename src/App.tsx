import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main";

import "./styles/main.scss";

const App: React.FC = () => {
    // const api = "CG-cAhpZiSTTZASfBSr6wXqfbcX";
    const [balance, setBalance] = useState(1000);
    return (
        <>
            <Header />
            <Main balance={balance} setBalance={setBalance} />
        </>
    );
};

export default App;
