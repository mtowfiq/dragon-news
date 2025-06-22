import React from 'react';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftNavbar from '../Components/Layout Component/LeftNavbar';
import RightNavbar from '../Components/Layout Component/RightNavbar';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='poppins-font'>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <section className='w-11/12 mx-auto py-2'>
                    <Navbar></Navbar>
                </section>
            </nav>
            <main className='w-11/12 mx-auto py-2 grid md:grid-cols-12 gap-3'>
                <aside className='col-span-3'>
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;