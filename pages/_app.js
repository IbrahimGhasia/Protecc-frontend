import "../styles/globals.css";
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { chain } from "wagmi";

const alchemyId = process.env.ALCHEMY_ID;
const chains = [chain.polygonMumbai];

const client = createClient(
    getDefaultClient({
        appName: "Your App Name",
        chains,
        alchemyId,
    })
);

function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={client} theme="rounded">
            <ConnectKitProvider>
                <Component {...pageProps} />
            </ConnectKitProvider>
        </WagmiConfig>
    );
}

export default MyApp;
