import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Portfolio',
  description: 'A professional portfolio showcasing skills, projects, and experience',
  icons: {
    icon: '/images/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className}`}>
        {children}
        <Script
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
          strategy="afterInteractive"
        />
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                
                if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {
                console.error('Theme initialization failed:', e);
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}