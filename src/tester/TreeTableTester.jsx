import React from 'react';
import BootstrapTreeTable from 'bootstrap-react-treetable';
import 'bootstrap/dist/css/bootstrap.min.css';

import cityData from './euroCapitals.json';

export const TreeTableTester = () => {

    const columns = [
        {
            dataField: "name",
            heading: "Name",
            filterable: true
        },
        {
            dataField: "population",
            heading: "Population"
        },
        {
            dataField: "bill",
            heading: "Dummy 1"
        },
        {
            dataField: "fred",
            heading: "Dummy 2"
        },
        {
            dataField: "john",
            heading: "Dummy 3"
        }
    ];
    const controls = {
        visibleRows: 1,
        allowSorting: true,
        showPagination: true,
        initialRowsPerPage: 50,
        allowFiltering: true
    };

    return (
        <BootstrapTreeTable columns={columns} tableData={cityData} control={controls}/>
    );

};

export default TreeTableTester;
