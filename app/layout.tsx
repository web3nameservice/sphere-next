import './index.css';
import '@/src/0.resources/2.js/0.functions/imports_css';
import Header from '@/src/2.views/0.global/header/header';
import { Inter } from 'next/font/google';
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
// import GlobalReload from '@/src/4.utils/globalReload';
import { DarkModeProvider } from '@/src/3.components/darkMode';
import Footer from '@/src/2.views/0.global/footer/footer';
import Progress from '@/src/4.utils/progressBar';
import LayoutClient from './layout_client';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Head from 'next/head'
import localFont from 'next/font/local'

export const metadata = {
  title: 'Sphere',
  description: 'Sphere is the next generation of DeFi.',
  icons: {
    icon: [
      '/favicon.ico',
    ],
    apple: [
      '/apple-touch-icon.png',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  }
}

const inter = Inter({
  subsets: ['latin']
})

const tt_commons = localFont({
  src: [
    {
      path: '../public/tt-commons/TT Commons Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/tt-commons/TT Commons DemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/tt-commons/TT Commons Bold.otf',
      weight: '700',
      style: 'normal',
    }
  ],
})

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en" className={tt_commons.className}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-V346NBEMMS" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V346NBEMMS');
        `}
        </Script>
      </head>
      <body >
        <DarkModeProvider>
          <Providers>
            <Progress>
              <Body>{children}</Body>
            </Progress>
          </Providers>
        </DarkModeProvider>
        <Analytics />
      </body>
    </html>
  )
}

interface BodyProps {
  children: React.ReactNode;
}

const Body = ({ children }: BodyProps): JSX.Element => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-between">
      <LayoutClient>
        <div className="w-full 2xl:w-[1600px] px-5 md:px-10 lg:px-20 2xl:px-10 flex justify-center z-40">
          <Header />
        </div>
      </LayoutClient>
      <div className='flex flex-1 justify-center w-screen'>
        {children}
      </div>
      <Footer />
    </div>
  )
}
