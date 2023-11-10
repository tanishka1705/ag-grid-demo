// import React, { useState, useEffect, useMemo} from 'react';
// import { AgGridReact } from 'ag-grid-react'; 
// import './styles.css';
// import 'ag-grid-community/styles/ag-grid.css'; 
// import 'ag-grid-community/styles/ag-theme-alpine.css'; 


// const App = () => {

 
//   const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

 
//   // const [columnDefs, setColumnDefs] = useState([
//   //   {
//   //     // Add CheckboxSelection column definition
//   //     headerCheckboxSelection: true,
//   //     checkboxSelection: true,
//   //     maxWidth: 50, // Set a specific width for the checkbox column
//   //   },
//   //   {field: 'make', filter: true},
//   //   {field: 'model', filter: true},
//   //   {field: 'price', filter: true}
//   // ]);

//   const [columnDefs, setColumnDefs] = useState([
//     {
//       headerName: 'Group 1',
//       children: [
//         { field: 'athlete', minWidth: 170, resizable: true, filter: true, floatingFilter : true , flex: 1},
//         { field: 'age', resizable: true, filter: true, flex: 1},
//       ],
//     },
//     {
//       headerName: 'Group 2',
//       children: [
//         { field: 'country', filter: true },
//         { field: 'year', filter: true },
//         { field: 'date', filter: true },
//         { field: 'sport', filter: true },
//         { field: 'gold', filter: true },
//         { field: 'silver', filter: true },
//         { field: 'bronze', filter: true },
//         { field: 'total', filter: true },
//       ],
//     },
//   ]);

  

//   const defaultColDef = useMemo(() => {
//     return {
//       editable: true,
//       sortable: true,
//       filter: true,
//     };
//   }, []);
  
//   useEffect(() => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//     .then(result => result.json())
//     .then(rowData => setRowData(rowData))
//   }, []);

//   let gridApi;

//   const onGridReady = (params) => {
//     gridApi = params.api
//   }

//   const onExportClick=()=>{
//     gridApi.exportDataAsCsv();
//   }

//   return (
//     <div>
//       <div style={{  marginTop: '2em', marginLeft: '2em' }}>
//         <button onClick={() => onExportClick()}>Export</button>
//       </div>
       
//       <div className="ag-theme-alpine" style={{width: 1000, height: 500, marginTop: '5em', marginLeft: '2em' }}>

//         <AgGridReact
        
//             rowData={rowData} 
//             columnDefs={columnDefs} 
//             animateRows={true} 
//             rowSelection='multiple'
//             defaultColDef={defaultColDef}    
//             onGridReady={onGridReady}
//             />
//       </div>
   
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react'; 
import './styles.css';
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css'; 

const App = () => {
  const [rowData, setRowData] = useState();
  const [columnDefs, setColumnDefs] = useState([
    {
      headerName: 'Group 1',
      children: [
        { field: 'athlete', minWidth: 170, resizable: true, filter: true, floatingFilter: true, flex: 1 },
        { field: 'age', resizable: true, filter: true, flex: 1 },
      ],
    },
    {
      headerName: 'Group 2',
      children: [
        { field: 'country', filter: true },
        { field: 'year', filter: true },
        { field: 'date', filter: true },
        { field: 'sport', filter: true },
        { field: 'gold', filter: true },
        { field: 'silver', filter: true },
        { field: 'bronze', filter: true },
        { field: 'total', filter: true },
      ],
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      editable: true,
      sortable: true,
      filter: true,
    };
  }, []);

  const gridApiRef = useRef(null);

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  const onExportClick = () => {
    gridApiRef.current.exportDataAsCsv();
  };

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  return (
    <div>
      <div style={{ marginTop: '2em', marginLeft: '2em' }}>
        <button onClick={onExportClick}>Export</button>
      </div>

      <div className="ag-theme-alpine" style={{ width: 1000, height: 500, marginTop: '5em', marginLeft: '2em' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          animateRows={true}
          rowSelection='multiple'
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
        />
      </div>
    </div>
  );
};

export default App;
