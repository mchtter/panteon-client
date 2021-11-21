import axios from "axios";

export const getData = async () => {
  let players = await axios.get("http://localhost:5000/players");
  console.log(players.data);
  return players.data;
};

export const increaseData = async (data) => {
  await axios.post("http://localhost:5000/update/increase", data);
};

export const decreaseData = async (data) => {
  await axios.post("http://localhost:5000/update/decrease", data);
};

export const increaseMoney = async (data) => {
  await axios.post("http://localhost:5000/money/increase", data);
};

export const decreaseMoney = async (data) => {
  console.log(data, "buraya geldi");
  await axios.post("http://localhost:5000/money/decrease", data);
};
