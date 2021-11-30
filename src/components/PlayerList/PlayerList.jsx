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
  const [stateChange, setStateChange] = useState(true);

  useEffect(() => {
    getData().then((res) => {
      setPlayer(res);
    });
  }, [stateChange]);

  const increase = (data) => {
    const existingPlayerItem = player.find(
      (playerItem) => playerItem._id === data._id
    );

    if (existingPlayerItem) {
      let newPlayer = player.map((playerItem) =>
        playerItem._id === data._id
          ? {
              ...playerItem,
              dailyDiff: playerItem.dailyDiff + 1,
              weeklyDiff: playerItem.weeklyDiff + 1,
            }
          : playerItem
      );
      setPlayer(newPlayer);
    }
    increaseData(data);
    setStateChange(!stateChange);
  };

  const decrease = (data) => {
    const existingPlayerItem = player.find(
      (playerItem) => playerItem._id === data._id
    );

    if (existingPlayerItem) {
      let newPlayer = player.map((playerItem) =>
        playerItem._id === data._id
          ? {
              ...playerItem,
              dailyDiff: playerItem.dailyDiff - 1,
              weeklyDiff: playerItem.weeklyDiff - 1,
            }
          : playerItem
      );
      setPlayer(newPlayer);
    }
    decreaseData(data);
    setStateChange(!stateChange);
  };

  const increaseMon = (data) => {
    const existingPlayerItem = player.find(
      (playerItem) => playerItem._id === data._id
    );

    if (existingPlayerItem) {
      let newPlayer = player.map((playerItem) =>
        playerItem._id === data._id
          ? {
              ...playerItem,
              dailyDiff: playerItem.money + 100,
            }
          : playerItem
      );
      setPlayer(newPlayer);
    }
    increaseMoney(data);
    setStateChange(!stateChange);
  };

  const decreaseMon = (data) => {
    const existingPlayerItem = player.find(
      (playerItem) => playerItem._id === data._id
    );

    if (existingPlayerItem) {
      let newPlayer = player.map((playerItem) =>
        playerItem._id === data._id
          ? {
              ...playerItem,
              dailyDiff: playerItem.money - 100,
            }
          : playerItem
      );
      setPlayer(newPlayer);
    }
    decreaseMoney(data);
    setStateChange(!stateChange);
  };

  return (
    <>
      <Header />
      {
        <Grid
          // pageable={true}
          data={player}
          style={{ height: "600px", marginLeft: "30px", marginRight: "30px" }}
        >
          <GridColumn
            field="country"
            title="Country"
            className="country"
          ></GridColumn>
          <GridColumn field="username" title="Username"></GridColumn>
          <GridColumn
            field="rank"
            title="User Rank"
            className="userRank"
          ></GridColumn>
          <GridColumn field="money" title="User Money"></GridColumn>
          <GridColumn
            field="dailyDiff"
            title="Daily Change"
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
            title="DailyDiff || Money"
            cell={(data) => (
              <td className="actions" style={{ textAlign: "center" }}>
                <div className="actionsButton">
                  <Button
                    icon="minus"
                    onClick={() => decrease(data.dataItem)}
                  ></Button>
                  <Button
                    icon="plus"
                    onClick={() => increase(data.dataItem)}
                  ></Button>
                </div>
                <div className="actionsButton">
                  <Button
                    icon="minus"
                    onClick={() => decreaseMon(data.dataItem)}
                  ></Button>
                  <Button
                    icon="plus"
                    onClick={() => increaseMon(data.dataItem)}
                  ></Button>
                </div>
              </td>
            )}
          ></GridColumn>
        </Grid>
      }
      <style>{`
          .k-cell-inner > .k-link {
            justify-content: space-around;
          }
          .k-grid tr {
            text-align: center;
          }
          .actions {
            display: flex;
            justify-content: space-between
          }
          .actionsButton {
            margin: 10px;
            
          }
      
      `}</style>
    </>
  );
};

export default PlayerList;
