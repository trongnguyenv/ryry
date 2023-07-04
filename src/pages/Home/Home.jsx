import { API } from "api/api";
import { CardInfo } from "components/CardInfo/CardInfo";
import { CardList } from "components/CardList/CardList";
import { cardData } from "data";
import { useEffect, useState } from "react";

export function Home() {
  const [currentCard, setCurrentCard] = useState();
  const [cardDataList, setCardDataList] = useState([]);
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (idx) => {
    setActiveItem(idx);
    setCurrentCard(cardDataList[idx]);
  };

  async function fetchData() {
    const dataList = await API.fetchAll();
    if (dataList.length > 0) {
      setCurrentCard(dataList[0]);
      setCardDataList(dataList);
    }
  }

  useEffect(() => {
    // fetchData();
    setCurrentCard(cardData[0]);
    setCardDataList(cardData);
  }, []);

  return (
    <div>
      <CardList
        dataList={cardDataList}
        activeItem={activeItem}
        onClickCard={handleItemClick}
      />
      <div className="card_info">
        {currentCard && (
          <CardInfo key={currentCard.id} cardInfo={currentCard} />
        )}
      </div>
    </div>
  );
}
