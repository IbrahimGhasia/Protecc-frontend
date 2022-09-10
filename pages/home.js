import { ConnectKitButton } from "connectkit";
import { useState } from "react";
import { useAccount } from "wagmi";
import Navbar from "../Components/Header/Navbar";

export default function Home() {
    const { isConnected } = useAccount();

    return (
        <div>
            <Navbar />
            <div className="grid v-screen place-items-center mt-5">
                {isConnected ? (
                    <h3 className="mb-4 text-xl">Wallet Connected!</h3>
                ) : (
                    <h3 className="mb-4 text-xl">
                        Connect Your Wallet to Polygon (Mumbai testnet)
                    </h3>
                )}

                <ConnectKitButton />
            </div>
        </div>
    );
}
