import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: "30px" }}>
        <h2 className="move-left">Welcome</h2>
        <div className="explanation-text">
          <p>
            OpenInvest is a platform for investing into startups, or companies
            looking to raise funds.
          </p>
          <p>
            If you are a business owner looking raise funds, enlisting on
            OpenInvest will work similar to having an IPO in a public stock
            marketplace. However, instead of having an IPO, we will be hosting
            an ICO for you instead.
          </p>
          <p>But what is an ICO?</p>
          <p>
            An ICO is an <b>Initial Coin Offering</b>. At OpenInvest, we offer
            you the opportunity to own your own <b>blockchain</b>. Owning your
            own blockchain means you can have your own tokens which you can sell
            to investors.
          </p>
          <p>
            But why? Why not just list my company on the public stock exchange?
          </p>
          <p>
            The advantage of running a blockchain is that all transactions are
            recorded and saved forever, and can <b>never</b> be changed or
            modified. Additionally, you can receive funding from all over the
            world, as blockchain technology specializes in being decentralised,
            meaning available everywhere and everytime.
          </p>
          <p>
            The incentive for investors would be the ease of access and
            availability of your token due to the fact that it is served on a
            decentralised blockchain. Additionally, they are incentivised by the
            increase in value of your token if it is gaining momentum and is
            succesful, similar to how stocks work.
          </p>
          <p>
            <b>If you are an investor, </b> investing in a company on OpenInvest
            means you can sell, buy or trade at any place or time. Additionally,
            when you buy a token, you really own it, as it is cryptographically
            bound to you and your address on the blockchain.
          </p>
          <h4>
            <b>
              So, <Link to="/addBusiness">enlist your company now.</Link>
            </b>
          </h4>
        </div>
        <div className="flex-container-home">
          <div className="flex-item-home">
            <h3>test</h3>
          </div>
          <div className="flex-item-home">
            <h3>test</h3>
          </div>
        </div>
      </div>
    );
  }
}
