/* eslint-disable @next/next/no-img-element */
import style from "../styles/card.module.scss";

export default function Card({
  background,
  logo,
  content,
  contentColor,
  hoverContent,
  hoverContentColor,
}: {
  background: string;
  logo: string;
  content: string;
  contentColor: string;
  hoverContent: string;
  hoverContentColor: string;
}) {
  return (
    <>
      <div className={style.wrapper} style={{ background: background }}>
        <span
          className={style.hover_content}
          style={{ color: hoverContentColor }}
        >
          {hoverContent}
        </span>
        <img src={`${logo}`} alt="Logo" />
        <span className={style.description} style={{ color: contentColor }}>
          {content}
        </span>
      </div>
    </>
  );
}
