import { useState } from 'react';
import style from '../styles/navigator.module.scss';
import Dropdown from './dropdown';
import Link from 'next/link';
import Button from './button';

export default function Navigator({
  background,
  heading,
  headingColor,
  dropdownTitle,
  buttonColor,
  dataA,
  dataB,
  dataC,
}: {
  background: string;
  heading: string;
  headingColor: string;
  dropdownTitle: string[];
  buttonColor: string;
  dataA: string[];
  dataB: string[];
  dataC: string[];
}) {
  const [selectionA, setSelectionA] = useState('Select');
  const [selectionB, setSelectionB] = useState('Select');
  const [selectionC, setSelectionC] = useState('Select');

  const checkSelector =  (
    selectionA == 'Select' ||
    selectionB == 'Select' ||
    selectionC == 'Select'
  ) && true 
   
  return (
    <div className={style.wrapper} style={{ background: background }}>
      <div className={style.heading_wrapper}>
        <span style={{ color: headingColor }}>{heading}</span>
      </div>
      <div className={style.dropdown_wrapper}>
        <div className={style.dropdown_container}>
          <span>{dropdownTitle[0]}</span>
          <Dropdown
            option={dataA}
            selection={selectionA}
            setSelection={setSelectionA}
          />
        </div>
        <div className={style.dropdown_container}>
          <span>{dropdownTitle[1]}</span>
          <Dropdown
            option={dataB}
            selection={selectionB}
            setSelection={setSelectionB}
          />
        </div>
        <div className={style.dropdown_container}>
          <span>{dropdownTitle[2]}</span>
          <Dropdown
            option={dataC}
            selection={selectionC}
            setSelection={setSelectionC}
          />
        </div>
        <Link
          href={{
            pathname: `/${selectionA}/${selectionB}/${selectionC}`,
          }}
        >
          <a className={style[checkSelector ? 'unselected' : 'selected']} style={{width : '118px'}}>
            <Button checkFunction={checkSelector} buttonColor={buttonColor} content='Go'/>
          </a>
        </Link>
      </div>
    </div>
  );
}
