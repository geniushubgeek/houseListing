import React from "react";

export default class Card extends React.Component {
  render() {
    var houseStyle = {
      display: "inline-block",
      height: "10%",
      width: "10%",
      padding: "20px",
      fontFamily: "Times New Roman Times serif",
      textAlign: "center",
      filter: "drop-shadow(8px 8px 10px gray)",
      margin: "20px",
      backgroundColor: "white"
    };
    var imageStyle = {
      width: "40%"
    };
    return (
      <div style={houseStyle}>
        <h1>{this.props.name}</h1>
        <img style={imageStyle} src={this.props.img} alt="images" />
        <p>{this.props.desc}</p>
        <h3>Cost: {this.props.cost}</h3>
      </div>
    );
  }
}
