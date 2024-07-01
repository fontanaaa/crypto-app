import classes from "@/styles/blocks/_cardButton.module.scss";

interface CardButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const CardButton: React.FC<CardButtonProps> = ({ onClick, children }) => {
    return (
        <button className={classes.cardButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default CardButton;
