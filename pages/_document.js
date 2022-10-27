import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                {/* font */}
                <link
                    rel="preload"
                    href="../public/fonts/LemonMilkBold.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="../public/fonts/LemonMilkMedium.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                <link
                    rel="preload"
                    href="../public/fonts/MomCakeBold.otf"
                    as="font"
                    type="font/otf"
                    crossOrigin="anonymous"
                />
                {/* font */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}