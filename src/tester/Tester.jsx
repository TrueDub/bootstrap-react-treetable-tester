import React from 'react';
import BootstrapTreeTable from 'bootstrap-react-treetable';

import 'bootstrap/dist/css/bootstrap.min.css';
//import 'highlight.js/styles/rainbow.css';

class Tester extends React.Component {

    descriptionRenderer = function (dataRow, dataField) {
        return <span dangerouslySetInnerHTML={{__html: dataRow.data[dataField]}}></span>;
    };

    orderRenderer = function (dataRow, dataField) {
        let newValue = dataRow.data[dataField] + 100;
        return newValue;
    }

    render() {
        const fixedColumns = [
            {
                dataField: "name",
                heading: "Name",
                fixedWidth: true,
                percentageWidth: 20
            },
            {
                dataField: "dataType",
                heading: "Data Type",
                fixedWidth: true,
                percentageWidth: 20
            },
            {
                dataField: "example",
                heading: "Example",
                fixedWidth: true,
                percentageWidth: 20
            },
            {
                dataField: "description",
                heading: "Description",
                fixedWidth: true,
                percentageWidth: 25,
                renderer: this.descriptionRenderer,
                sortUsingRenderer: false
            },
            {
                dataField: "order",
                heading: "Order",
                renderer: this.orderRenderer,
                fixedWidth: true,
                percentageWidth: 15,
                sortOrder: 'desc',
                sortUsingRenderer: true
            }
        ];
        const tableData = [
            {
                data: {
                    name: "name0g",
                    dataType: "string",
                    example: "ex0gb",
                    description: "desc0g7",
                    order: 17.7
                },
                children: [
                    {
                        data: {
                            name: "name0-z",
                            dataType: "string",
                            example: "ex0-0",
                            description: "desc0-0",
                            order: 373
                        },
                        children: []
                    }, {
                        data: {
                            name: "name0-q",
                            dataType: "string",
                            example: "ex0-1",
                            description: "desc0-1",
                            order: 2
                        },
                        children: []
                    }, {
                        data: {
                            name: "name0-b",
                            dataType: "string",
                            example: "ex0-2",
                            description: "desc0-2",
                            order: 111
                        },
                        children: [
                            {
                                data: {
                                    name: "name0-2-1",
                                    dataType: "string",
                                    example: "ex0-2-1",
                                    description: "desc0-2-1",
                                    order: 23
                                },
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                data: {
                    name: "name0x",
                    dataType: "string",
                    example: "ex1",
                    description: "desc1 &euro; &euro;",
                    order: 6.8
                },
                children: []
            },
            {
                data: {
                    name: "name0a",
                    dataType: "string",
                    example: "ex2",
                    description: "desc2 &euro; &euro; &euro; &euro;",
                    order: 9.7
                },
                children: []
            },
            {
                data: {
                    name: "name0m",
                    dataType: "Number",
                    example: "1",
                    description: "number blah",
                    order: 3.04
                },
                children: []
            },
            {
                data: {
                    name: "name0m",
                    dataType: "Number",
                    example: "1",
                    description: "number blah",
                    order: 3.04
                },
                children: []
            },
            {
                data: {
                    name: "name0m",
                    dataType: "Number",
                    example: "1",
                    description: "number blah",
                    order: 3.04
                },
                children: []
            },
            {
                data: {
                    name: "name0m",
                    dataType: "Number",
                    example: "1",
                    description: "number blah",
                    order: 3.04
                },
                children: []
            }
        ];
        const controlWithButton = {
            visibleRows: 1,
            allowSorting: true,
            showExpandCollapseButton: true,
            showPagination: true,
            initialRowsPerPage: 4
        };
        return (
            <BootstrapTreeTable columns={fixedColumns} tableData={tableData} control={controlWithButton}/>
        );
    }

};

export default Tester;
