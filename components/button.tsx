import style from "../styles/button.module.scss";

export default function Button({
  checkFunction,
  buttonColor,
  content,
}: {
  checkFunction: boolean;
  buttonColor: string;
  content: string;
}) {
  return (
    <div
      className={style.button}
      style={{
        background: !checkFunction ? buttonColor : "rgb(193 132 134)",
      }}
    >
      <span>{content}</span>
      <svg
        width="26"
        height="18"
        viewBox="0 0 26 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0.860107"
          y1="9.00635"
          x2="23.2262"
          y2="9.00635"
          stroke="#F7F7F7"
          strokeWidth="2.5"
        />
        <line
          y1="-1.25"
          x2="11.6648"
          y2="-1.25"
          transform="matrix(0.706409 0.707804 -0.706409 0.707804 14.9861 2)"
          stroke="#F7F7F7"
          strokeWidth="2.5"
        />
        <line
          y1="-1.25"
          x2="12.498"
          y2="-1.25"
          transform="matrix(-0.706409 0.707804 -0.706409 -0.707804 23.8148 7.30762)"
          stroke="#F7F7F7"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}
