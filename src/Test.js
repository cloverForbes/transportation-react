import React from "react";
import { getMarkersFromGroup } from "./Helpers";

export default class Test extends React.Component {
  state = {
    markers: []
  };
  componentWillMount() {
    let headers = new Headers();
    let myInit = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default"
    };

    fetch(
      'https://data.austintexas.gov/resource/g8w2-8uap.json?$query=SELECT * WHERE retime_status="COMPLETED"',
      myInit
    )
      .then(function(res) {
        return res;
      })
      .then(resp => {
        return resp.json();
      })
      .then(data => {
        getMarkersFromGroup(
          data,
          "https://data.austintexas.gov/resource/efct-8fs9",
          "system_id",
          this
        );
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.markers.map((i, j) => {
          return <div key={j}>{i.location_name}</div>;
        })}
      </div>
    );
  }
}
