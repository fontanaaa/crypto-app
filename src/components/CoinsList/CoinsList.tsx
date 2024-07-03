import { getCoins } from "@/api/api";
import { useEffect, useState } from "react";
import classes from "@/styles/blocks/_coinsList.module.scss";

interface Coin {
    uuid: string;
    name: string;
    symbol: string;
    price: string;
    iconUrl: string;
    color: string;
    btcPrice: string;
}

const CoinsList: React.FC = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const coinData = await getCoins();
            if (coinData) {
                setCoins(coinData.coins);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className={classes.coinList}>
            <h1>Cryptocurrency Prices</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {coins.map((coin) => (
                        <li className={classes.coinListItem} key={coin.uuid}>
                            {/* <strong>
                                {coin.name} ({coin.symbol})
                            </strong>
                            : ${coin.price} */}
                            <div className={classes.coinListItemInfo}>
                                <img
                                    className={classes.coinListItemLogo}
                                    src={coin.iconUrl}
                                    alt={coin.name}
                                />
                                <p style={{ color: coin.color }}>{coin.name}</p>
                            </div>
                            <div className={classes.coinListItemPrice}>
                                <p style={{ color: coin.color }}>
                                    {(+coin.price).toFixed(2)} $
                                </p>
                                <p style={{ color: coin.color }}>
                                    {(+coin.btcPrice).toFixed(2)} BTC
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CoinsList;
