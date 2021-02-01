import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table";
import "../App.css";
const MainComponent = (props) => {
  const [commit, setCommit] = useState([]);
  const [username, setUsername] = useState("fheemabbas/github-activity");
  useEffect(() => {
    getCommite("fheemabbas/github-activity");
  }, []);
  const getCommite = async (username) => {
    // console.log("repo :", repos.split(" ").join(""));
    const repo = username.split(" ").join("");
    await axios
      .get(`https://api.github.com/repos/${repo}/commits`)
      .then((res) => {
        setCommit(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("err:", err);
        setCommit([]);
      });
  };
  const handleChange = (username) => {
    getCommite(username);
  };
  return (
    <div>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter Github User Name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => handleChange(username)}
      >
        Get Commites
      </button>

      <Table commit={commit} username={username} />
    </div>
  );
};
export default MainComponent;
