import React from "react";
import { Link } from "react-router";

import {StyleRoot} from 'radium';
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      width: '100%',
      margin: '0',
      padding: '0',
    };

    return (
      <StyleRoot>
        <div>     

          <div class="container-fluid" style={containerStyle}>
            <div class="row">
              <div class="col-lg-12">

                {this.props.children}

              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </StyleRoot>

    );
  }
}
