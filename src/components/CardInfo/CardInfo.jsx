import s from "./style.module.css";

export function CardInfo({ cardInfo }) {
  return (
    <div className={`row ${s.container}`}>
      <div className={`col-xs-6 col-sm-6 ${s.card_img}`}>
        <img
          className={`${s.img}`}
          src={cardInfo.img_url}
          alt={cardInfo.title}
          width="100%"
        />
      </div>
      <div className="col-xs-6 col-sm-6">
        <div className={`${s.title}`}>
          <h4>{cardInfo.title}</h4>
        </div>
        <p className={`${s.bodytext}`}>{cardInfo.descriptions}</p>
        <div className={`${s.card_more}`}>
          <div className={`${s.card_more_wh}`}>
            <p>Chiều cao:</p>
            <p>{cardInfo.height}</p>
          </div>
          <div className={`${s.card_more_wh}`}>
            <p>Cân nặng:</p>
            <p>{cardInfo.weigh}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
