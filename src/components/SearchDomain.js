import "../styles/SearchContainer.css";

const SearchDomain = (props) => {
  const setValues = (c) => {
    props.setViewDomain(false);
    props.setSelectDomain(c);
    console.log(props.domain);
  };
  return (
    <div className="searchDomain">
      <div className="searchGrid">
        {props.domain.map((el) => (
          <div className="elGrid">
            <p onClick={() => setValues(el.domain)}>{el.domain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDomain;
