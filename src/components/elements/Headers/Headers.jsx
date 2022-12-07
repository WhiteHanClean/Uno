import React from 'react';
import s from 'Header.module.scss'
import logo from "../../../assets/Logo.png"

const Headers = () => {
    return (
        <div className={s.header}>
            <img src={Logo} alt="logo" />
        </div>
    );
};

export default Headers;