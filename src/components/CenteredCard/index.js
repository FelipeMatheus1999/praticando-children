const Children = ({ title, string }) => {
  return (
    <div className="children">
      <span>
        <h1 className="children__title">{title}</h1>
        <p className="children__text">{string}</p>
      </span>
    </div>
  );
};

export default Children;
