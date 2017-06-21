import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

var products = [{
      id: 1,
      name: "Samsung LCD TV",
      price: 12000
  }, {
      id: 2,
      name: "MIUI Redmi 4",
      price: 5999
  }, {
      id: 3,
      name: "LG Top Loader Washing Machine",
      price: 40000
  }, {
      id: 4,
      name: "Sony Bravia LED TV",
      price: 300000
  }, {
      id: 5,
      name: "MI Smart Watch",
      price: 5000
  }];

class table extends Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'price',  // default sort column name
      defaultSortOrder: 'asce'  // default sort order
    };
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h3>React and Bootstrap Sortable Table</h3>
        </div>
        <div className="react-table-wrap">
	        <BootstrapTable ref='table' data={ products } multiColumnSort={ 2 }>
            <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price' dataSort={ true }>Product Price</TableHeaderColumn>
          </BootstrapTable>
      </div>
      </div>
    );
  }
}

export default table;
