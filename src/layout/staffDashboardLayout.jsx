import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Overlay from "../components/Overlay/Overlay";
import Topbar from "../components/Topbar/Topbar";
import DashboardProvider from "../context/dashboard.context";
import Sidenav from "../components/Sidenav/StaffSideNav";

export default function DashboardLayout({ children, pageMeta }) {
    const meta = {
        title: "KASU SMS",
        description: "KASU School management system",
        type: "website",
        ...pageMeta,
    };
    const router = useRouter();
    const style = {
        container: `bg-black/10 h-screen overflow-hidden relative`,
        mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-0 `,
        main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
    };
    return (
        <>
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
            {/* dashboard provider */}
            <DashboardProvider>
                <div className={style.container}>
                    <div className="flex items-start">
                        {/* <Overlay /> */}
                        <Sidenav mobilePosition="left" />
                        <div className={style.mainContainer}>
                            <Topbar />
                            <main className={style.main}>{children}</main>
                        </div>
                    </div>
                </div>
            </DashboardProvider>
        </>
    );
}
