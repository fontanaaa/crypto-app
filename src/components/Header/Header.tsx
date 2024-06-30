import classes from "@/styles/blocks/_header.module.scss";

const Header: React.FC = () => {
    return (
        <header className={classes.header}>
            <h1 className={classes.header__title}>Crypto App</h1>
        </header>
    );
};

export default Header;
