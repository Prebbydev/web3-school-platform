import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import "../styles/chatbox.css";
import "../styles/courses.css";
import "../styles/allCourses.css";
import "../styles/community.css";
import '../styles/coursePlaylist.css';
import '../styles/userCourseCard.css';
import '../styles/dashboard.css';
import '../styles/notification.css';
import '../styles/HomePage.css';
import '../styles/sidebar.css';
import '../styles/tasks.css';
import '../styles/updatePassForm.css';
import '../styles/userProfile.css';
import '../styles/UserDashboard.css';
import '../styles/courseModal.css';
import '../styles/signup.css';
import '../styles/login.css';
import "../styles/courseCard.css";
import "../styles/forgotPassWord.css";
import type { AppProps } from 'next/app';
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig, http } from 'wagmi';
import {
  arbitrumSepolia
} from 'wagmi/chains';
import { ToastContainer } from 'react-toastify';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { internal_estimateMaxPriorityFeePerGas } from 'viem/_types/actions/public/estimateMaxPriorityFeePerGas';
import { injected } from 'wagmi/connectors' 
import Providers from "../provider/Providers"

const config = getDefaultConfig({
	appName: 'Cypher School',
	projectId: 'e486d5104875015e43eb0c2368943392',
	chains: [arbitrumSepolia],
	ssr: true, // If your dApp uses server side rendering (SSR)
});

const confiG = createConfig({
  chains: [arbitrumSepolia],
  connectors: [injected()], 
  ssr: true, 
  transports: {
    [arbitrumSepolia.id]: http(),
    
  },
})


const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={confiG}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Providers>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
          <Component {...pageProps} />
          </Providers>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default MyApp;
