import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
