import Card from "@/components/Card/Card";
import CoinsList from "@/components/CoinsList/CoinsList";
import classes from "@/styles/blocks/_main.module.scss";

const Main: React.FC = () => {
    return (
        <main className={classes.main}>
            <Card />
            <CoinsList />
        </main>
    );
};

export default Main;
