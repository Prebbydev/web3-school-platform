import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  arbitrumSepolia
} from 'wagmi/chains';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
	appName: 'Cypher School',
	projectId: 'e486d5104875015e43eb0c2368943392',
	chains: [arbitrumSepolia],
	ssr: true, // If your dApp uses server side rendering (SSR)
});

const client = new QueryClient();

function WagmiWrapperLayout({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default WagmiWrapperLayout;
