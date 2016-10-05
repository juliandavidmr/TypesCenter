import React, {Component, PropTypes} from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ListarRolesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row_selected: []
    };

    this.handleClickRow = this.handleClickRow.bind(this);
  }

  handleClickRow(row, isSelected, event) {
    if (isSelected) {
      console.log('Click en row ', row, isSelected);

      this.setState({
        row_selected: row
      });
    }
  }

  render() {
    //Row select setting
    const selectRowProp = {
      mode: "checkbox", //checkbox for multi select, radio for single select.
      clickToSelect: true, //click row will trigger a selection on that row.
      bgColor: "rgb(238, 193, 213)", //selected row background color
      onSelect: this.handleClickRow
    };

    const { tabla_datos } = this.props;

    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="box">
            <div className="box-header">
              <h3 className="box-title">Listado de roles</h3>

              <div className="box-body">
                <BootstrapTable data={tabla_datos}
                  striped={true}
                  hover={true}
                  condensed={true}
                  pagination={true}
                  selectRow={selectRowProp}
                  insertRow={false}
                  deleteRow={false}
                  columnFilter={true}
                  searchPlaceholder="Buscar"
                  search={true}>

                  <TableHeaderColumn
                    dataField="ROL_IDROL"
                    isKey={true}
                    hidden={false}
                    dataSort={true}>ID</TableHeaderColumn>

                  <TableHeaderColumn
                    dataField="ROL_NOMBREROL"
                    dataSort={true}>Nombre</TableHeaderColumn>

                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ListarRolesComponent.propTypes = {
  tabla_datos: PropTypes.any.isRequired
};

export default ListarRolesComponent;
