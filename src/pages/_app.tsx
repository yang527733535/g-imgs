import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { ClerkProvider } from '@clerk/nextjs'
import "~/styles/globals.css";
import { zhCN } from '@clerk/localizations'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps} localization={zhCN}>
    <div className={GeistSans.className}>
      <Component {...pageProps} />
    </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
