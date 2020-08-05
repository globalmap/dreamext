import React from 'react';
import s from './Menu.module.scss';
import { Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

function Menu() {
    return (
        <div className={s.main}>
            <p>Меню</p>
            <Icon>
                <MenuIcon />
            </Icon>
        </div>
    )
}

export default Menu;