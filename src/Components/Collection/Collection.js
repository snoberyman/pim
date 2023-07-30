import "./Collection.css";

function Collection() {
  const cardData = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      title: "Card 1 Title",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150",
      title: "Card 2 Title",
    },

    {
      id: 3,
      imageUrl: "https://via.placeholder.com/150",
      title: "Card 3 Title",
    },
  ];

  const Card = ({ imageUrl, title }) => (
    <div className="card">
      <img src={imageUrl} alt="Card" />
      <h3>{title}</h3>
    </div>
  );

  return (
    <div className="card-list">
      {cardData.map((card) => (
        <Card key={card.id} imageUrl={card.imageUrl} title={card.title} />
      ))}
    </div>
  );
}

export default Collection;
