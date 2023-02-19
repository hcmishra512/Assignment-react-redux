import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import classes from "./EditData.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const EditData = ({ listDatas, updateData }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentData = listDatas.find(
    (listData) => listData.id === parseInt(id)
  );

  useEffect(() => {
    setEnterVehicle(currentData.enterVehicle);
    setEnterGrace(currentData.enterGrace);
    setEnterUom(currentData.enterUom);
    setEnterAmount(currentData.enterAmount);
  }, [currentData]);

  const [enterVehicle, setEnterVehicle] = useState("");
  const [enterGrace, setEnterGrace] = useState("");
  const [enterUom, setEnterUom] = useState("");
  const [enterAmount, setEnterAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enterVehicle || !enterGrace || !enterUom || !enterAmount) {
      return toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: currentData.id,
      enterVehicle,
      enterGrace,
      enterUom,
      enterAmount,
    };

    updateData(data);
    toast.success("Contact updated successfully!!");
    navigate("/");
  };

  return (
    <div className={classes.entry_container}>
      <h1>Add Event</h1>

      {currentData ? (
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
            <button typy="submit">Update</button>
          </div>
        </form>
      ) : (
        <h1 className="text-center">No Contact Found</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  listDatas: state,
});
const mapDispatchToProps = (dispatch) => ({
  updateData: (data) => {
    dispatch({ type: "UPDATE_LIST", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditData);

//_____________________________________________________________________
