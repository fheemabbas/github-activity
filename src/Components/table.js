import React from "react";
const Table = (props) => {
  const { commit } = props;
  console.log("in table COmponent Commit :", commit);
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <React.Fragment>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Commit Sr</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {commit.map((data, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{capitalize(data.commit.committer.name)}</td>
                <td>{data.commit.committer.email}</td>
                <td>{capitalize(data.commit.message)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Table;
