import Slider from "react-slick";
import s from "./style.module.css";

export function CardIcon({ _dataList, activeItem, onItemClick }) {
  const settings = {
    slidesToShow: 12,
    slidesToScroll: 1,
    centerPadding: 0,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {_dataList.map((card, idx) => {
        return (
          <div
            className={`${s.card_info}`}
            key={idx}
            onClick={() => onItemClick(idx)}
          >
            <div className={`${s.week_pill} ${idx === activeItem ? `${s.active}` : ""}`}>
              <div className={`${s.card_icon}`}>
                <img src={card.icon} alt={card.title} />
              </div>
              <p>{card.title}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
