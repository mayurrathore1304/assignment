// import React,{ useState,useEffect } from "react";
import React,{useState,useEffect} from 'react';

const CreateDepartmentReduxComponent = (props) => {
const [dept, setDept] = useState({
    DeptNo: 0,
    DeptName: "",
    Location: "",
    Capacity: 0,
  });
const [message,setMessage] =useState('');
  const clear = () => {
    setDept({
      DeptNo: 0,
      DeptName: "",
      Location: "",
      Capacity: 0,
    });
  };
const save=()=>{
    props.AddDepartment(dept); 
  };

  return (
    <div className="container">
      <h2>The Department Functional Component using Hooks</h2>
     
      <form>
        <div className="form-group">
          <label htmlFor="DeptNo">DeptNo</label>
          <input
            type="text"
            name="DeptNo"
            className="form-control"
            value={dept.DeptNo}
            onChange={(evt) =>
              setDept({ ...dept, DeptNo: parseInt(evt.target.value) })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="DeptName">DeptName</label>
          <input
            type="text"
            name="DeptName"
            className="form-control"
            value={dept.DeptName}
            onChange={(evt) => setDept({ ...dept, DeptName: evt.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Location">Location</label>
          <input
            type="text"
            name="Location"
            className="form-control"
            value={dept.Location}
            onChange={(evt) => setDept({ ...dept, Location: evt.target.value })}
          />
          <div className="form-group">
            <label htmlFor="Capacity">Capacity</label>
            <input
              type="text"
              name="Capacity"
              className="form-control"
              value={dept.Capacity}
              onChange={(evt) =>
                setDept({ ...dept, Capacity: parseInt(evt.target.value) })
              }
            />
          </div>
        </div>
        <hr />
        <div className="btn-group">
          <input type="button" value="Clear" className="btn btn-primary" onClick={clear} />
          <input type="button" value="Save" className="btn btn-success" onClick={save}/>
        </div>
      </form>
      <hr />
      <strong>
          {message}
      </strong>
   
    </div>

  );
};

export default CreateDepartmentReduxComponent;