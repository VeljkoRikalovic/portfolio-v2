"use client";
import "../globals.css";
import { Roboto } from "next/font/google";
import { Providers } from "../_providers/Providers";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout(props: Props) {
  const [messages, setMessages] = useState<unknown>();
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
        className={`${roboto.className} antialiased text-background dark:text-text bg-text dark:bg-black min-h-screen`}
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
