const Box = (props) => {
  const { boxClass, text } = props;
  return (
    <div className={"box " + boxClass}>
      <p className="box-text">{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Boxes</h1>
    <div className="box-container">
      <Box boxClass="small" text="Small" />
      <Box boxClass="medium" text="Medium" />
      <Box boxClass="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
