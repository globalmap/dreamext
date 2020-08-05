import React, {useState} from 'react';
import s from './Language.module.scss';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Icon, Paper, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root: {
        position: "absolute",

        "& ul": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "0",
            textAlign: "center",

            "& li": {
                borderBottom: "solid 1px #cacaca",
                width: "100%",
                marginLeft: "0.7rem",
                marginRight: "0.7rem"
            }
        }
    }
})

function Language() {
    const classes = useStyle();
    
    const [arrayLanguage, setArrayLanguage] = useState(['Укр', 'Eng']);
    const [currentLanguage, setCurrentLanguage] = useState(arrayLanguage[0]);
    const [clickIcon, setClickIcon] = useState(false);

    return (
        <div className={s.main}>
            <div>
                <p>{currentLanguage}</p>
                <Icon onClick={() => setClickIcon(!clickIcon)}>
                    <ExpandMoreIcon />
                </Icon>
            </div>

            <Paper className={classes.root} elevation={3} style={clickIcon ? {display: "block"} : {display: "none"}}>
                <ul>
                    {arrayLanguage.map((data, index) => (
                        <li key={index}>{data}</li>
                    ))}
                </ul>
            </Paper>
        </div>
    )
}

export default Language;