/* eslint-disable @next/next/no-img-element */
import style from "../styles/footer.module.scss";
import Link from "next/link";

export default function Footer() {
  const a = ["About Us", "Services", "Newsroom", "Work With Us", "Contact"];
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.background}>
          <img className={style.logo} src="../footer-logo.png" alt="Logo" />
          <div className={style.contact}>
            <h3>Get in Touch</h3>
            <div className={style.contact_item}>
              <h5>Phone :</h5>
              <span>0438 517 201</span>
            </div>
            <div className={style.contact_item}>
              <h5>General/Housing Enquires</h5>
              <span>admin@westends.com.au</span>
            </div>
            <div className={style.contact_item}>
              <h5>Support Coordination</h5>
              <span>
                sharon@westendss.com.au
                <br />
              </span>
              <span>ashleigh@westendss.com.au</span>
            </div>
          </div>
          <div className={style.links}>
            {a.map((i: string) => (
              <>
                <Link
                  href={{
                    pathname: `/${i}`,
                  }}
                  key={i}
                >
                  <a>
                    <h3>{i}</h3>
                  </a>
                </Link>
              </>
            ))}
          </div>
          <div className={style.social}>
            <h3>Connect With Us</h3>
            <div className={style.icons_container}>
              <img src="../fb.svg" alt="Social Icon" />
              <img src="../instagram.svg" alt="Social Icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
