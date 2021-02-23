import React from 'react';
import DataTableTester from "./tester/DataTableTester";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TreeTableTester from "./tester/TreeTableTester";

function App() {

    const [showValue, setShowValue] = React.useState(1);

    const showDataTable = () => {
        setShowValue(1);
    }

    const showTreeTable = () => {
        setShowValue(2);
    }

    const showMultiHeaderTable = () => {
        setShowValue(3);
    }

    const showMultiRowTable = () => {
        setShowValue(4);
    }

    return (
        <div className="App">
            <div className="container">
                <h3>Bootstrap React Treetable Tester Application</h3>
                <p/>
                <div>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td>
                                <button className="btn btn-outline-primary" onClick={showDataTable.bind(null)}>DataTable</button>
                            </td>
                            <td>
                                <button className="btn btn-outline-primary" onClick={showTreeTable.bind(null)}>TreeTable</button>
                            </td>
                            <td>
                                <button className="btn btn-outline-primary" onClick={showMultiHeaderTable.bind(null)}>Multi-header</button>
                            </td>
                            <td>
                                <button className="btn btn-outline-primary" onClick={showMultiRowTable.bind(null)}>Multi-row</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={showValue === 1 ? 'shown' : 'hidden'}>
                    <h5>DataTable - Ireland ODI Match Record</h5>
                    <DataTableTester/>
                </div>
                <div className={showValue === 2 ? 'shown' : 'hidden'}>
                    <h5>TreeTable - Euro Capitals</h5>
                    <TreeTableTester/>
                </div>
                <div className={showValue === 3 ? 'shown' : 'hidden'}>
                    <h5>Multi-Header - Not implemented yet</h5>

                </div>
                <div className={showValue === 4 ? 'shown' : 'hidden'}>
                    <h5>Multi-Row - Not implemented yet</h5>
                </div>
            </div>
        </div>
    );
}

export default App;
