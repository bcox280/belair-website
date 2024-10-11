import '@/styles/globals.css';

import { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { AvailableThemes } from '@/components/theme-toggle';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable
          )}
        >
          <ThemeProvider
            defaultTheme="system"
            enableColorScheme
            disableTransitionOnChange
            themes={Object.keys(AvailableThemes)}
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
