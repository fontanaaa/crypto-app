import Card from "@/components/Card/Card";
import classes from "@/styles/blocks/_main.module.scss";

interface MainProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Main: React.FC<MainProps> = ({ balance, setBalance }) => {
    return (
        <main className={classes.main}>
            <Card balance={balance} setBalance={setBalance} />
        </main>
    );
};

export default Main;
