import Header from "./components/Header/Header";
import Main from "./pages/Main";
import { BalanceProvider } from "./context/BalanceContext";
import "./styles/main.scss";
// import CoinsList from "./components/CoinsList/CoinsList";

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
