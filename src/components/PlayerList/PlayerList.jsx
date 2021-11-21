import { React, useEffect, useState } from "react";
// import { connect } from 'react-redux'
import {
  getData,
  increaseData,
  decreaseData,
  increaseMoney,
  decreaseMoney,
} from "../../api/index.js";
import Header from "../Header/Header";

import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { Button } from "@progress/kendo-react-buttons";
import "@progress/kendo-theme-default/dist/all.css";
import "./PlayerList.css";

const PlayerList = (props) => {
  const [player, setPlayer] = useState([]);
  useEffect(() => {
    setPlayer();
  }, []);

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

  const increaseMon = (id) => {
    increaseMoney(id);
    getData().then((res) => {
      setPlayer(res);
    });
  };

  const decreaseMon = (id) => {
    decreaseMoney(id);
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
          <GridColumn field="country" width="100px"></GridColumn>
          <GridColumn field="username" width="250px"></GridColumn>
          <GridColumn field="rank" width="100px"></GridColumn>
          <GridColumn field="money"></GridColumn>
          <GridColumn
            field="dailyDiff"
            width="100px"
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
            field="DailyDiff || Money"
            cell={(data) => (
              <td>
                <th style={{ textAlign: "center" }}>
                  DailyDiff
                  <Button
                    icon="minus"
                    style={{ marginLeft: "10px" }}
                    onClick={() => decrease(data.dataItem._id)}
                  ></Button>
                  <Button
                    icon="plus"
                    onClick={() => increase(data.dataItem._id)}
                  ></Button>
                </th>

                <th style={{ textAlign: "center" }}>
                  Money
                  <Button
                    icon="minus"
                    style={{ marginLeft: "10px" }}
                    onClick={() => decreaseMon(data.dataItem._id)}
                  ></Button>
                  <Button
                    icon="plus"
                    onClick={() => increaseMon(data.dataItem._id)}
                  ></Button>
                </th>
              </td>
            )}
          ></GridColumn>
        </Grid>
      }
    </>
  );
};

export default PlayerList;
