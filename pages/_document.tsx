import Document, { Head, Main, Html, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <title></title>
                <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet"/>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}