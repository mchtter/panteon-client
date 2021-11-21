import { React, useEffect, useState } from "react";
// import { connect } from 'react-redux'
import { getData, increaseData, decreaseData } from "../../api/index.js";
import Header from "../Header/Header";

import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import "@progress/kendo-theme-default/dist/all.css";

const PlayerList = (props) => {
  const [player, setPlayer] = useState([]);

  getData().then((res) => {
    setPlayer(res);
  });

  const increase = (id) => {
    increaseData(id);
    getData().then((res) => {
      setPlayer(res);
    });
  };

  const decrease = (id) => {
    decreaseData(id);
    getData().then((res) => {
      setPlayer(res);
    });
  };

  return (
    <>
      <Header />
      {
        <Grid
          pageable={true}
          data={player}
          style={{ height: "600px", marginLeft: "100px", marginRight: "100px" }}
        >
          <GridColumn field="country"></GridColumn>
          <GridColumn field="username"></GridColumn>
          <GridColumn style={{ display: "none" }} field="rank"></GridColumn>
          <GridColumn field="money"></GridColumn>
          <GridColumn
            field="dailyDiff"
            cell={(data) => (
              <td
                style={{
                  color:
                    data.dataItem.dailyDiff === 0
                      ? "#FBBC05"
                      : data.dataItem.dailyDiff > 0
                      ? "#34A853"
                      : "#EA4335",
                  margin: "10px",
                }}
              >
                {data.dataItem.dailyDiff}
              </td>
            )}
          ></GridColumn>
          <GridColumn
            field="Actions"
            cell={(data) => (
              <td style={{ textAlign: "center" }}>
                <Button
                  icon="minus"
                  style={{ marginRight: "10px" }}
                  onClick={() => decrease(data.dataItem._id)}
                ></Button>
                <Button
                  icon="plus"
                  style={{ marginLeft: "10px" }}
                  onClick={() => increase(data.dataItem._id)}
                ></Button>
              </td>
            )}
          ></GridColumn>
        </Grid>
      }
    </>
  );
};

export default PlayerList;
