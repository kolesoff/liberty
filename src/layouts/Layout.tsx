import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * @prop children Дочерний компонент.
 */
interface IProps {
    children: React.ReactNode;
}

/**
 * Компонент базовой разметки.
 * @param props Пропсы компонента.
 */
const Layout = (props: IProps) => (
    <>
        <Header/>
        {props.children}
        <Footer />
    </>
);

export default Layout;
