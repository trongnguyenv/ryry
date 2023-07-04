import { CardIcon } from "components/CardIcon/CardIcon";

export function CardList({ dataList, onClickCard, activeItem }) {
  return (
    <div className="card_list">
      <CardIcon
        _dataList={dataList}
        activeItem={activeItem}
        onItemClick={onClickCard}
      />
    </div>
  );
}
