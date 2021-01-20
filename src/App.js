import React from "react";
import ContentEditable from "react-contenteditable";
import "./App.css";

class MyNumber extends React.Component {
  constructor(props) {
    super(props);

    this.contentEditable = React.createRef();
    this.state = { html: props.value };
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
    console.log("Change: ", evt.target.value, evt);
  };

  handleKeyPress = (evt) => {
    if (evt.key === "Enter") this.handleFinishedInput(evt);
  };

  handleBlur = (evt) => {
    console.log("Blur", evt);
    this.handleFinishedInput(evt);
  };

  handleFinishedInput = (evt) => {
    alert(this.state.html);
  };

  render = () => (
    <ContentEditable
      innerRef={this.contentEditable}
      html={this.state.html} // innerHTML of the editable div
      disabled={false} // use true to disable editing
      onChange={this.handleChange} // handle innerHTML change
      onKeyPress={this.handleKeyPress}
      onBlur={this.handleBlur}
      tagName="span" // Use a custom HTML tag (uses a div by default)
    />
  );
}

const App = () => {
  const cur = "GBP";
  const value = "100000";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "30rem",
        padding: "0.5rem",
        background: "#aaaaaa",
      }}
    >
      <span style={{ marginRight: "1rem" }}>😀</span>
      <span>
        <MyNumber value={value} />
        <span style={{ marginLeft: "0.5rem" }}>{cur}</span>
      </span>
      <span style={{ marginLeft: "1rem" }}>👍</span>
    </div>
  );
};

export default App;
