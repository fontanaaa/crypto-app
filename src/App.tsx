import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { BalanceProvider } from "./context/BalanceContext";
import "./styles/main.scss";

const App: React.FC = () => {
    // const api = "CG-cAhpZiSTTZASfBSr6wXqfbcX";
    return (
        <>
            <BalanceProvider>
                <Header />
                <Main />
            </BalanceProvider>
        </>
    );
};

export default App;
