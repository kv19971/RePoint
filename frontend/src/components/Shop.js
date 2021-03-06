import React from "react";
import { Button, Card, Image, Item, Label, Icon } from "semantic-ui-react";

export default class Shop extends React.Component {
  render() {
    return (
      <div
        style={{
          paddingLeft: "10px",
          display: "flex",
          flexBasis: "100%",
          flexWrap: "wrap",
          justifyContent: "space-between",
          paddingTop: '10px'
        }}
      >
        {this.props.products.map(p => {
          let bankImg = this.props.banks.filter(b => b.bankId === p.bankId)[0]
            .logoURL;
          return <ShopItem {...p} bankImg={bankImg} />;
        })}
      </div>
    );
  }
}

class ShopItem extends React.Component {
  render() {
    const { imageURL, name, originalPrice, salePrice, bankImg } = this.props;
    return (
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 18px 0 #e5e5e5",
          width: "46%",
          position: "relative",
          marginBottom: "10px",
          paddingBottom: "10px",
          display: "inline-block",
          marginRight: "10px"
        }}
      >
        <img
          src={"http://"+imageURL}
          style={{
            width: "100%",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
          }}
        />
        <div
          style={{
            fontSize: "16px",
            textAlign: "left",
            color: "#4b4d5a",
            marginLeft: "10px",
            marginBottom: "10px"
          }}
        >
          {name}
        </div>
        <div
          style={{
            fontSize: "12px",
            textAlign: "left",
            color: "#a9a9af",
            marginLeft: "10px"
          }}
        >
          <strike>{originalPrice}</strike>
        </div>
        <div
          style={{
            fontSize: "14px",
            textAlign: "left",
            color: "#005cff",
            marginLeft: "10px"
          }}
        >
          {salePrice}
        </div>
        <img
          src={bankImg}
          width="40px"
          height="40px"
          style={{
            position: "absolute",
            bottom: "12px",
            right: "10px"
          }}
        />
      </div>
    );
  }
}
