import { ReactNode, createContext, useContext, useState } from "react";

interface BalanceContextType {
    balance: number;
    setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const useBalance = () => {
    const context = useContext(BalanceContext);
    if (!context) {
        throw new Error("useBalance must be used within a BalanceProvider");
    }
    return context;
};
export const BalanceProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [balance, setBalance] = useState(1000);

    return (
        <BalanceContext.Provider value={{ balance, setBalance }}>
            {children}
        </BalanceContext.Provider>
    );
};
