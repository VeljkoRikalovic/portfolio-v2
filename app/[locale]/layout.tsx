"use client";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import { Providers } from "../_providers/Providers";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout(props: Props) {
  const [messages, setMessages] = useState();
  async function importMessages(locale: string) {
    try {
      const messages = await import(`../../messages/${locale}.json`);
      setMessages(messages);
    } catch (error) {
      notFound();
    }
  }

  const { locale } = props.params;

  useEffect(() => {
    importMessages(locale);
  }, [locale]);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head />
      <body
        className={`${GeistSans.variable} font-sans antialiased text-neutral-900 dark:text-text bg-white dark:bg-background min-h-screen`}
      >
        {messages ? (
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>{props.children}</Providers>
          </NextIntlClientProvider>
        ) : null}
      </body>
    </html>
  );
}
