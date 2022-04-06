/* eslint-disable @next/next/no-img-element */
import style from "../styles/box.module.scss";

export default function Box({
  background,
  picture,
  hasLogo,
  location,
  textColor,
  description,
}: {
  background: string;
  picture: string;
  hasLogo: boolean;
  location: string;
  textColor: string;
  description: string;
}) {
  return (
    <>
      <div className={style.wrapper} style={{ background: background }}>
        <img className={style.picture} src={`${picture}`} alt="Image" />
        {hasLogo && (
          <img className={style.logo} src="../newspaper.svg" alt="Logo" />
        )}
        <span className={style.location} style={{ color: textColor }}>
          {location}
        </span>
        <span className={style.description} style={{ color: textColor }}>
          {description}
        </span>
        <div className={style.button}>
          <span>Learn More</span>
        </div>
        <img className={style.arrow} src="../Arrow.svg" alt="" />
      </div>
    </>
  );
}
