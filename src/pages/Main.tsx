import Card from "@/components/Card/Card";
import classes from "@/styles/blocks/_main.module.scss";

const Main: React.FC = () => {
    return (
        <main className={classes.main}>
            <Card />
        </main>
    );
};

export default Main;
