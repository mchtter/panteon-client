import axios from "axios";

export const getData = async () => {
  let players = await axios.get("https://panteon-node-server.herokuapp.com/players");

  return players.data;
};

export const increaseData = async (data) => {
  await axios.post("https://panteon-node-server.herokuapp.com/update/increase", data);
};

export const decreaseData = async (data) => {
  await axios.post("https://panteon-node-server.herokuapp.com/update/decrease", data);
};

export const increaseMoney = async (data) => {
  await axios.post("https://panteon-node-server.herokuapp.com/money/increase", data);
};

export const decreaseMoney = async (data) => {
  await axios.post("https://panteon-node-server.herokuapp.com/money/decrease", data);
};
