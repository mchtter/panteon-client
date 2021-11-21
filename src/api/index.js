import axios from 'axios'
import { useEffect, useState } from 'react'

export const getData = async () => {
    let players
    await axios.get("http://localhost:5000/players").then((res) => {
        players = res.data
    })
    return players
}

export const increaseData = (data) => {
    console.log(data, "buraya geldi")
    axios.post("http://localhost:5000/update/increase", data)
    .then((res) => {
        console.log('res', res)
    }).catch((err) => {
        console.log('err', err)
    })
}

export const decreaseData = (data) => {
    console.log(data, "buraya geldi")
    axios.post("http://localhost:5000/update/decrease", data)
    .then((res) => {
        console.log('res', res)
    }).catch((err) => {
        console.log('err', err)
    })
}