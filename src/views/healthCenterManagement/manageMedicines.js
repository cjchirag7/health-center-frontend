import React, { Component } from "react";
import { API } from '../../config';
import axios from "axios";
import MaterialTable from "material-table";
import Session from "react-session-api";
import {Table} from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

class ManageMedicines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicines: []
    };
  }

  getMedicinesDetails() {
    axios.get(`${API}/medicines`)
      .then(response => {
        this.setState({
          medicines: response.data.data,
        });
      })
      .catch(error => console.log(error));
  }

  editMedicineWithId = (id) => {
    // console.log("Medicine with id: "+id+" is redirected to edit - " + `/medicineManagement/edit_medicine/${id}`);
    this.props.history.push(`/healthCenter/edit_medicine/${id}`);
  }

  componentDidMount() {
    this.getMedicinesDetails();
  }

  render(props) {
    return (
      <div>
        <h1>Manage Medicines</h1>
        <div>
          <Link className="btn btn-primary"  to="/healthCenter/add_medicine"><i className="fa fa-plus"></i>&nbsp; <span>Add Medicine</span></Link>
        </div>
        <br/>
        <Table bordered className="bg-light" >
          <thead>
            <tr>
              <th>#</th>
              <th>Name of Medicine</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Edit Medicine</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.medicines && this.state.medicines.map((medicine,i) => {
                const {id, name, description, quantity} = medicine;
                return (
                  <tr key={id} className="text-dark">
                    <th scope="row">{i+1}</th>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{quantity}</td>
                    <td><i className="fa fa-pencil-alt" onClick={() => this.editMedicineWithId(id)} style={{cursor:'pointer'}}></i></td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
export default withRouter(ManageMedicines);
