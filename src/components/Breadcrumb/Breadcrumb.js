import React from 'react';
import s from './Breadcrumb.module.scss';
import { Breadcrumbs, Link, makeStyles } from "@material-ui/core";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyle = makeStyles({
    root: {
        color: "#16395B",
        fontSize: "1rem",
        fontWeight: "300"
    }
})

function Breadcrumb() {
    const classes = useStyle();

    return (
        <Breadcrumbs 
            separator={<ArrowRightAltIcon fontSize="small" />}
            className={s.main}
        >
            <Link className={classes.root} style={{textDecoration: "underline"}}>
                Головна
            </Link>
            <Link className={classes.root}>
                Клініки
            </Link>
            <Link className={classes.root} style={{color: "#A7C0E2"}}>
                Smart Medical Center
            </Link>
        </Breadcrumbs>
    )
}

export default Breadcrumb;
