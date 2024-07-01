import classes from "@/styles/blocks/_card.module.scss";
import CardButton from "../CardButton/CardButton";
import { useBalance } from "@/context/BalanceContext";

const Card: React.FC = () => {
    const { balance, setBalance } = useBalance();

    return (
        <div className={classes.card}>
            <div className={classes.card__block}>
                <p>CRYPTO-CARD</p>
                <CardButton onClick={() => setBalance((prev) => prev + 1000)}>
                    Add Money
                </CardButton>
            </div>

            <div className={classes.card__block}>
                <p>DENIS</p>
                <p>Your balance is {balance} $</p>
            </div>
        </div>
    );
};

export default Card;
