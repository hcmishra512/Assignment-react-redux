import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Home.module.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Home = ({ listDatas, deleteListData }) => {
  const navigate = useNavigate();

  return (
    <div>
      <table className={classes.table}>
        <tr className={classes.head_row}>
          <th>Sr. No.</th>
          <th>Vehicle Type</th>
          <th>Amount</th>
          <th>Grace</th>
          <th>Action</th>
        </tr>
        {listDatas.length > 0 ? (
          listDatas?.map((listData, id) => (
            <tr key={id} className={classes.body_row}>
              <td>{id + 1}</td>
              <td>{listData.enterVehicle}</td>
              <td>{listData.enterAmount}</td>
              <td>{listData.enterGrace}</td>
              <td>
                <Link to={`/edit/${listData.id}`}>
                  <EditIcon className={classes.edit_icon} />
                </Link>

                <DeleteIcon
                  onClick={() => deleteListData(listData.id)}
                  className={classes.delete_icon}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <th>No contacts found</th>
          </tr>
        )}
      </table>
      <div className={classes.btn}>
        <button onClick={() => navigate("/add")}>Add</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listDatas: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteListData: (id) => {
    dispatch({ type: "DELETE_LIST", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
