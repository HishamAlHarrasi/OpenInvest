import React, { Component } from "react";

export default class ViewBusinesses extends Component {
  // componentDidMount;
  render() {
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="move-left">
          <p>
            <b>
              Check out these upcoming businesses, and buy and trade tokens that
              are cryptographically bound to the blockchain.
            </b>
          </p>
        </div>
        <div>
          <div className="flex-container-vb">
            <div className="inner-row">
              <div className="inner-column">
                <b>Company Name: </b> MEOW
              </div>
              <div className="inner-column">
                <b>Website: </b> URL
              </div>
              <div className="inner-column">
                <b>Location: </b> مصر
              </div>
              <div className="inner-row">
                <div className="inner-column">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente aliquid blanditiis error soluta quos. Autem dicta
                    tempore illum placeat laudantium rerum molestias? Ad ullam
                    est rem dolore natus. Veniam, perspiciatis.
                  </p>
                </div>
              </div>
              <button
                className="btn btn-primary"
                style={{ marginBottom: "10px" }}
              >
                Buy Token
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
