'use client'

import {TEST_2} from "../constants";

export default function RootLayout({children}) {
    console.log(TEST_2)
    return (
        <html>
        <head/>
        <body>{children}</body>
        </html>
    );
}
