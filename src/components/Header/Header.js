import React from 'react';
import s from './Header.module.scss';
import logo from '../../assets/Logo.svg';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Search from './components/Search/Search';
import Button from '../Button/Button';
import Language from './components/Language/Language';
import Menu from './components/Menu/Menu';

function Header() {
    return (
        <header className={s.main}>
            <div className={s.content}>
                <img src={logo} alt="logo" />
                <Search />
                <Language />
                <Button 
                    startIcon={<LockOpenIcon />}
                >
                    Увійти
                </Button>
                <Menu />
            </div>
        </header>
    )
}

export default Header;