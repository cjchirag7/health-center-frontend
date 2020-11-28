import React, { Component } from "react";
import { API } from '../../config';
import axios from "axios";
import MaterialTable from "material-table";
import Session from "react-session-api";
import {Table} from 'reactstrap';
import { Link, withRouter } from "react-router-dom";

class ManageManufacturers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturers: []
    };
  }

  getManufacturersDetails() {
    axios.get(`${API}/manufacturers`)
      .then(response => {
        this.setState({
          manufacturers: response.data.data,
        });
      })
      .catch(error => console.log(error));
  }

  editManufacturerWithId = (id) => {
    // console.log("Manufacturer with id: "+id+" is redirected to edit - " + `/manufacturerManagement/edit_manufacturer/${id}`);
    this.props.history.push(`/healthCenter/edit_manufacturer/${id}`);
  }

  componentDidMount() {
    this.getManufacturersDetails();
  }

  render(props) {
    return (
      <div>
        <h1>Manage Manufacturers</h1>
        <div>
          <Link className="btn btn-primary"  to="/healthCenter/add_manufacturer"><i className="fa fa-plus"></i>&nbsp; <span>Add Manufacturer</span></Link>
        </div>
        <br/>
        <Table bordered className="bg-light" >
          <thead>
            <tr>
              <th>#</th>
              <th>Name of Manufacturer</th>
              <th>Address</th>
              <th>City</th>
              <th>Email</th>              
              <th>Edit Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.manufacturers && this.state.manufacturers.map((manufacturer,i) => {
                const {id, name, address, city, email} = manufacturer;
                return (
                  <tr key={id} className="text-dark">
                    <th scope="row">{i+1}</th>
                    <td>{name}</td>
                    <td>{address}</td>
                    <td>{city}</td>
                    <td><a href={`mailto:${email}`}>{email}</a></td>                                        
                    <td><i className="fa fa-pencil-alt" onClick={() => this.editManufacturerWithId(id)} style={{cursor:'pointer'}}></i></td>
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
export default withRouter(ManageManufacturers);
