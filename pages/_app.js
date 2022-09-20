import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { chain, configureChains, createClient, WagmiConfig } from "wagmi"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import React from "react"
import Head from "next/head"

const { chains, provider } = configureChains(
    [chain.polygon, chain.polygonMumbai],
    [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
)
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
})
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
})

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>Protecc</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </div>
    )
}

export default MyApp

