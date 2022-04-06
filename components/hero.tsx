import style from '../styles/hero.module.scss'

export default function Hero ({picture , quote} : {picture : string , quote : string}) {

    return (
        <>
        <div className={style.big_wrapper}>
        <div className={style.wrapper} >
            <h1>{quote}</h1>
            <div className={style.blur}></div>
            <div className={style.hero} style={{backgroundImage: `url(../homepageHero.png)`}}></div>
            <div className={style.hero_mobile} style={{backgroundImage: `url(../mobile.png)`}}></div>
            {/* <img className={style.hero} src={`${picture}`} alt="" /> */}
            <div className={style.logo} style={{backgroundImage: `url(../Wave.svg)`}}></div>
            <div className={style.logo_mobile} style={{backgroundImage: `url(../wave-mobile.svg)`}}></div>
        </div>
        </div>
       
        </>
    )
}