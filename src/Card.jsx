export function Card({ image, name, updateData }) {
  const handleClick = () => {
    updateData(name);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <button
        className="btn btn-danger bg-gradient text-light border border-2 rounded-3 p-2"
        onClick={handleClick}
      >
        <img
          src={image}
          alt={name}
          className="img-fluid img-thumbnail"
          width={300}
          height={200}
        />
        <div>{name}</div>
      </button>
    </div>
  );
}
