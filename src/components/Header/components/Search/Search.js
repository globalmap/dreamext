import React from 'react';
import s from './Search.module.scss';
import { InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../../../Button/Button';

const useStyles = makeStyles((theme) => ({
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    }
}))

function Search() {
    const classes = useStyles();

    return (
        <div className={s.main}>
            <InputBase
                className={classes.input}
                placeholder="Пошук фохівця"
            />
            <Button disableElevation>Знайти</Button>
        </div>
    )
}

export default Search;