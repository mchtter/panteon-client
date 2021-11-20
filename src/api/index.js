import axios from 'axios'
import { useEffect, useState } from 'react'

const getData = async () => {
    let players
    await axios.get("http://localhost:5000/players").then((res) => {
        players = res.data
    })
    return players
}

export default getData