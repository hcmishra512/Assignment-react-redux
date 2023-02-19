import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import classes from "./AddData.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// { contacts, addContact }

const AddData = ({ listDatas, addList }) => {
  const [enterVehicle, setEnterVehicle] = useState("");
  const [enterGrace, setEnterGrace] = useState("");
  const [enterUom, setEnterUom] = useState("");
  const [enterAmount, setEnterAmount] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enterVehicle || !enterGrace || !enterUom || !enterAmount) {
      return toast.warning("Please fill in all fields!!");
    }
    const data = {
      id: listDatas.length > 0 ? listDatas[listDatas.length - 1].id + 1 : 0,
      enterVehicle,
      enterGrace,
      enterUom,
      enterAmount,
    };
    addList(data);
    toast.success("Contact added successfully!!");
    navigate("/");
  };

  return (
    <div className={classes.entry_container}>
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_container}>
          <div className={classes.input}>
            <label>Vehicle Type</label>
            <input
              type="text"
              name="vehicle"
              value={enterVehicle}
              onChange={(e) => setEnterVehicle(e.target.value)}
            />
            <ExpandMoreIcon className={classes.expend_icon} />
            <hr />
          </div>
          <div className={classes.input}>
            <label>Grace</label>
            <input
              type="text"
              name="grace"
              value={enterGrace}
              onChange={(e) => setEnterGrace(e.target.value)}
            />
          </div>
          <div className={classes.input}>
            <label>UOM</label>
            <input
              type="text"
              name="uom"
              value={enterUom}
              onChange={(e) => setEnterUom(e.target.value)}
            />
            <ExpandMoreIcon className={classes.expend_icon} />
            <hr />
          </div>
          <div className={classes.input}>
            <label>Amount</label>
            <input
              type="text"
              name="amount"
              value={enterAmount}
              onChange={(e) => setEnterAmount(e.target.value)}
            />
          </div>
        </div>
        <div className={classes.btn_container}>
          <button onClick={() => navigate("/")}>Close</button>
          <button typy="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listDatas: state,
});
const mapDispatchToProps = (dispatch) => ({
  addList: (data) => {
    dispatch({ type: "ADD_LIST", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddData);
