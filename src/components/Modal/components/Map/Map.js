import React from 'react';
import s from './Map.module.scss';
import { Icon } from "@material-ui/core";
import GoogleMap  from 'google-map-react';
import StarIcon from '@material-ui/icons/Star';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import MoneyOutlinedIcon from '@material-ui/icons/MoneyOutlined';


const AnyReactComponent = ({ text }) => <div style={{width: "60px", height: "60px", borderRadius: "50%", background: "#2BBB97", border: "5px solid #FFFFFF"}}></div>;

function Map({ data }) {
    const defaultProps = {
        center: [51.014651, 24.409715],
        zoom: 15
    }
    return (
        <div className={s.main}>
            <GoogleMap
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                bootstrapURLKeys={{key: "AIzaSyAW3YILxVOCFChakUmg2sbK8t4LbM9Hh84"}}
            >
                <AnyReactComponent lat="51.014651" lng="24.409715" text="A" />

            </GoogleMap>
            <div className={s.info}>
                <div className={s.title}>
                    <img src="https://i.pinimg.com/originals/ef/b8/eb/efb8eb427dc6c0f35a3d72a82b0dee62.png" alt="logo" />
                    <div style={{marginLeft: "20px"}}>
                        <p className={s.name}>
                            Flexis: Рух без болі
                        </p>
                        <p className={s.type}>
                            Медичний центр
                        </p>
                    </div>
                </div>
                <div className={s.stats}>
                    <div>
                        <p className={s.statsTitle}>Рейтинг</p>
                        <p className={s.icon}>
                            <Icon style={{color: "#25AEF6", display: "flex", alignItems: "center"}}>
                                <StarIcon fontSize="small" />
                            </Icon>
                            <span className={s.value}>4,6</span>
                        </p>
                    </div>
                    <div>
                        <p className={s.statsTitle}>Лікарів</p>
                        <p className={s.icon}>
                            <Icon style={{color: "#25AEF6", display: "flex", alignItems: "center"}}>
                                <PeopleOutlineOutlinedIcon fontSize="small" />
                            </Icon>
                            <span className={s.value}>4,6</span>
                        </p >
                    </div>
                    <div>
                        <p className={s.statsTitle}>Послуг</p>
                        <p className={s.icon}>
                            <Icon style={{color: "#25AEF6", display: "flex", alignItems: "center"}}>
                                <MoneyOutlinedIcon fontSize="small" />
                            </Icon>
                            <span className={s.value}>4,6</span>
                        </p>
                    </div>
                </div>
                <div className={s.addressWork}>
                    <div className={s.address}>
                        <p className={s.addressTitle}>Адреса</p>
                        <p className={s.text}>
                            м. Київ, вул. Михайла Максимовича (Трутенка), 3, Голосіївський район
                        </p>
                    </div>
                    <div className={s.work}>
                        <p className={s.workTitle}>Графік роботи</p>
                        <div className={s.text}>
                            <div class={s.container}>
                                <p сlassName={s.item}>Понеділок:</p>
                                <span>8:30-19:00</span>
                            </div>
                            <div class={s.container}>
                                <p сlassName={s.item}>Вівторок:</p>
                                <span>8:30-19:00</span>
                            </div>
                            <div class={s.container}>
                                <p сlassName={s.item}>Середа:</p>
                                <span>8:30-19:00</span>
                            </div>
                            <div class={s.container}>
                                <p сlassName={s.item}>Четвер:</p>
                                <span>8:30-19:00</span>
                            </div>
                            <div class={s.container}>
                                <p сlassName={s.item}>Пятниця:</p>
                                <span>8:30-19:00</span>
                            </div>
                            <div class={s.container}>
                                <p сlassName={s.item}>Субота:</p>
                                <span>8:30-19:00</span>
                            </div>
                            <div class={s.container}>
                                <p>Неділя:</p>
                                <span>Вихідний</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Map;