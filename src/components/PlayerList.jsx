import {React, useEffect, useState} from 'react'
// import { connect } from 'react-redux'
import Logo from '../images/panteon.png'
import getData  from '../api/index.js'

import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Button } from "@progress/kendo-react-buttons";
import '@progress/kendo-theme-default/dist/all.css';




const PlayerList = (props) => {
    const [player, setPlayer] = useState([])

    getData().then((res) => {
        console.log(res)
        setPlayer(res)
    })


    

      return (
        <div className="PlayerList">
          <div className="header" style={{textAlign: "center"}}>
            <img src={Logo} style={{height: "100px"}} alt="logo"></img>
          </div>
          <div className="content">
            { 
              <Grid
                data={player}
              >
                <GridColumn field="country"></GridColumn>
                <GridColumn field="username"></GridColumn>
                <GridColumn field="rank"></GridColumn>
                <GridColumn field="money"></GridColumn>
                <GridColumn field="dailyDiff"></GridColumn>
                <GridColumn field="Actions"></GridColumn>
              </Grid>
            }
          </div>
        </div>
      );
}

export default PlayerList
