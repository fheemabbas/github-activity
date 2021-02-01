import React from "react";
import "../App.css";
const Table = (props) => {
  const { commit, username } = props;
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <React.Fragment>
      {commit.length < 1 ? (
        <div className="bold">No data found</div>
      ) : (
        <React.Fragment>
          <div>
            Commite data from Repository :{" "}
            <span className="bold">{username} </span>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <td className="bold">Commit Sr</td>
                <td className="bold">Name</td>
                <td className="bold">Email</td>
                <td className="bold">Message</td>
              </tr>
            </thead>
            <tbody>
              {commit.map((data, index) => {
                return (
                  <tr>
                    <td className="bold">{index + 1}</td>
                    <td>{capitalize(data.commit.author.name)}</td>
                    <td>{data.commit.author.email}</td>
                    <td>{capitalize(data.commit.message)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Table;
