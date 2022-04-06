import { useState, useEffect, useRef } from 'react';
import style from '../styles/dropdown-navigator.module.scss';

export default function Dropdown(props: any) {
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onBodyClick = (event: any) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener('click', onBodyClick);

    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  // Dropdown menu

  return (
    <div ref={ref} className={style.select_container}>
      <div onClick={() => setOpen(!open)} className={style.dropdown_container}>
        <div className={style.dropdown}>
          <div
            className={style.title}
            style={{
              color: props.selection == 'Select' ? 'rgba(43, 45, 66, 0.4)' : '',
            }}
          >
            {props.selection}
          </div>
          <span className={style.downarrow}>
            <svg
              width="13"
              height="9"
              viewBox="0 0 13 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.510972 2.383L1.95397 0.927L6.65997 5.711L11.366 0.927L12.809 2.383L6.65997 8.532L0.510972 2.383Z"
                fill="#BB060A"
              />
            </svg>
          </span>
          <div className={style.options}>
            {open
              ? props.option.map((option: string, index: number) => (
                  <span
                    className={style.option}
                    onClick={() => props.setSelection(option)}
                    key={index}
                  >
                    {option}
                  </span>
                ))
              : ''}
          </div>
        </div>
      </div>
    </div>
  );
}
