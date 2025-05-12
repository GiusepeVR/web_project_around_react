export default function ImagePopup(props) {
  const { card } = props;
  return (
    <div className="image-popup__frame">
      <img
        src={card.link}
        alt="Landscape overlay"
        className="image-popup__img"
      />
      <span className="image-popup__label">{card.name}</span>
    </div>
  );
}
