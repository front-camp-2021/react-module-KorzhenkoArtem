import Card from "../../../pages/HomePage/components/Card/Card";
import SearchBar from "../../../pages/HomePage/components/SearchBar/SearchBar";

const CardsContainer = () => {
  return (
    <section className="card-containers">
      <div className="results">
        <p>7,618 results found</p>
        <a className="likes"></a>
      </div>
      <SearchBar/>
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
        <Card title="Test" />
    </section>
  );
}

export default CardsContainer;
