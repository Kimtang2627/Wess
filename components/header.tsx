import style from '../styles/header.module.scss'
import Image from 'next/image'
import Link from 'next/link';

export default function Header ({menuList} : {menuList : string []}) {
    
    return (
        <>
        <div className={style.wrapper}>
            <div className={style.container}  >
            <div className={style.logo} > 
                <Image className={style.wess} src={'/logo.png'} alt={'logo'} width={154} height={59}></Image>
                <div className={style.burger} > 
                <Image src={'/burger.svg'} alt={'logo'} width={26} height={16}></Image>
            </div>
            </div>
            <div className={style.items_container}>
              {menuList.map((i : any) => (
                <Link
                href={{
                  pathname: `/${i}`,
                }}
                key={i}
              >
                <a>{i}</a> 
              </Link>
           ))}
            </div>
           

            </div>      
        </div>
        </>
    )
}