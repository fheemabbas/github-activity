import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "./table";
import "../App.css";
const MainComponent = (props) => {
  const [commit, setCommit] = useState([]);
  const [username, setUsername] = useState("fheemabbas");
  const [repo, setRepo] = useState("github-activity");
  useEffect(() => {
    getCommite("fheemabbas", "github-activity");
  }, []);
  const getCommite = async (username, repo) => {
    await axios
      .get(`https://api.github.com/repos/${username}/${repo}/commits`)
      .then((res) => {
        setCommit(res.data);
        return res.data;
      })
      .catch((err) => {
        console.log("err:", err);
        setCommit([]);
      });
  };
  const handleChange = (username, repo) => {
    getCommite(username, repo);
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
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter Repository Name"
        onChange={(e) => setRepo(e.target.value)}
      />
      <button
        type="submit"
        class="btn btn-primary"
        onClick={() => handleChange(username, repo)}
      >
        Get Commites
      </button>

      <Table commit={commit} username={username} repo={repo} />
    </div>
  );
};
export default MainComponent;
