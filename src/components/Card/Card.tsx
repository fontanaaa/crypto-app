import classes from "@/styles/blocks/_card.module.scss";

interface CardProps {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const Card: React.FC<CardProps> = ({ balance, setBalance }) => {
    return (
        <div className={classes.card}>
            <div className={classes.card__block}>
                <p>CRYPTO-CARD</p>
                <button onClick={() => setBalance((prev) => balance + 1000)}>
                    Add Money
                </button>
            </div>

            <div className={classes.card__block}>
                <p>DENIS</p>
                <p>Your balance is {balance} $</p>
            </div>
        </div>
    );
};

export default Card;
