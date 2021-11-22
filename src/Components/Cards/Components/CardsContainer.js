import CardItem from "../card";

function CardsContainer() {
  return (
    <section className="card-containers">
      <div className="results">
        <p>7,618 results found</p>
        <a class="likes"></a>
      </div>
      <div className="search-panel">
        <form action="" method="GET">
          <input type="text" placeholder="search" />
        </form>
      </div>
      <CardItem />
    </section>
  );
}

export default CardsContainer;
