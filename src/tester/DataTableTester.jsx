import React from 'react';
import BootstrapTreeTable from 'bootstrap-react-treetable';
import 'bootstrap/dist/css/bootstrap.min.css';

import odiData from './odi.json';

export const DataTableTester = () => {

    const columns = [
        {
            dataField: "opposition",
            heading: "Opposition"
        },
        {
            dataField: "score",
            heading: "Score"
        },
        {
            dataField: "overs",
            heading: "Overs"
        },
        {
            dataField: "RPO",
            heading: "RPO"
        },
        {
            dataField: "inns",
            heading: "Inns"
        },
        {
            dataField: "result",
            heading: "Result"
        },
        {
            dataField: "ground",
            heading: "Ground",
            filterable: true
        },
        {
            dataField: "date",
            heading: "Date",
            sortType: "date",
            sortDateFormat: "dd/MM/yyyy",
            sortOrder: "asc"
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
        <BootstrapTreeTable columns={columns} tableData={odiData} control={controls}/>
    );

};

export default DataTableTester;
