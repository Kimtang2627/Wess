import style from "../styles/flip-container.module.scss";
import Box from "./box";
import Card from "./card";

export default function FlipContainer({ box }: { box: boolean }) {
  const card =
    " Up front and open costs. We're here to help you and to enjoy some time with you";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.content_container}>
          <h3>Benefits At West End Support Services</h3>
          {box ? (
            <div className={style.card_container}>
              <Box
                background="#F7F7F7"
                hasLogo={false}
                location="Queensland"
                description={description}
                picture={"../old-couple.png"}
                textColor="#2B2D42"
              />
              <Box
                background="#F7F7F7"
                hasLogo={true}
                location="Queensland"
                description={description}
                picture={"../old-couple.png"}
                textColor="#2B2D42"
              />
              <Box
                background="#F7F7F7"
                hasLogo={true}
                location="Queensland"
                description={description}
                picture={"../old-couple.png"}
                textColor="#2B2D42"
              />
            </div>
          ) : (
            <div className={style.card_container}>
              <Card
                background="#F7F7F7"
                logo="../noun-magnifier.svg"
                content="Free Activities & Meals"
                contentColor="#2B2D42"
                hoverContent={card}
                hoverContentColor={"#F7F7F7"}
              />
              <Card
                background="#F7F7F7"
                logo="../noun-magnifier.svg"
                content="Free Activities & Meals"
                contentColor="#2B2D42"
                hoverContent={card}
                hoverContentColor={"#F7F7F7"}
              />
              <Card
                background="#F7F7F7"
                logo="../noun-magnifier.svg"
                content="Free Activities & Meals"
                contentColor="#2B2D42"
                hoverContent={card}
                hoverContentColor={"#F7F7F7"}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
