import React from "react";
import InvestModal from "./InvestModal"
import { Button, Card, Image } from "semantic-ui-react";

export default class Dashboard extends React.Component {
  state = {modalContent: false}
  modalHandler(name){
    // console.log(name+"ssss")
    // return (e) => {
      console.log(name)
      this.setState({modalContent: name})
      console.log(this.state.modalContent)
    //}
  }
  modalCloseHandler(){
    console.log("modalCloseHandler clicked")
    this.setState({modalContent: false})
  }
  render() {
    return (
      <div>
        {[
          { name: "SC", pts: 1000 },
          { name: "HSBC", pts: 1000 },
          { name: "CITI", pts: 500 }
        ].map(val => {
          return <DashItem name={val.name} pts={val.pts} modalHandler={this.modalHandler.bind(this)}/>;
        })}
        <InvestModal popen={this.state.modalContent} clh = {this.modalCloseHandler.bind(this)}/>
      </div> 
    );
  }
}

class DashItem extends React.Component {
  render() {
    return (
      <div
        style={{
          margin: "10px auto",
          width: "95%",
          display: "flex",
          flexDirection: "row",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 18px 0 #e5e5e5"
        }}
      >
        <img
          src="https://dummyimage.com/400x400/000/fff"
          width="70px"
          height="70px"
          style={{
            marginLeft: "20px",
            marginTop: "20px"
          }}
        />
        <div
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            marginBottom: "10px",
            width: '100%',
            marginRight: '15px'
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: "-0.2px",
              textAlign: "left",
              color: "#4b4d5a"
            }}
          >
            Societe General
          </span>
          <div
            style={{
              marginTop: "5px",
              color: "#7d819a"
            }}
          >
            <div>Account number:</div>
            <div>Account number:</div>
            <div>Account number:</div>
            <div onClick={e => this.props.modalHandler(this.props.name)}
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                textAlign: "left",
                color: "#005cff",
                float: 'right',
                marginTop: '10px'
              }}
            >
              Invest Now >
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

