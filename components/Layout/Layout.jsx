import React from 'react'
import Head from "next/head";
import { useRouter } from 'next/router'
import AppNavbar from '../Navbar/AppNavbar'
import AppFooter from '../Footer/AppFooter'
export default function Layout({ children, pageMeta }) {
    const meta = {
        title: "KASU SMS",
        description: "KASU School management system",
        type: "website",
        ...pageMeta,
    };
    const router = useRouter()
    return (
        <div className='px-3 py-3'>
            <Head>
                <title>{meta.title}</title>
                <meta name="description" content={meta.description} />
                <link rel="icon" href="/favicon.ico" />
                {/* open graph meta tag */}
                <meta
                    property="og:url"
                    content={`http://localhost:3000${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:description" content={meta.description} />
                <meta property="og:site_name" content="KASU SMS" />

                {meta.date && (
                    <meta property="article:published_time" content={meta.date} />
                )}
            </Head>
            <AppNavbar />
            <main>{children}</main>
            <AppFooter />
        </div>
    )
}
