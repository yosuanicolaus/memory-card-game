const imgPlaceholder = "http://via.placeholder.com/300x200";
const namePlaceholder = "Bob Ross";

export function Card({ image = imgPlaceholder, name = namePlaceholder }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="bg-danger bg-gradient text-light border border-2 rounded-3 p-2">
        <img
          src={image}
          alt={name}
          className="img-fluid img-thumbnail"
          width={300}
        />
        <div>{name}</div>
      </div>
    </div>
  );
}
