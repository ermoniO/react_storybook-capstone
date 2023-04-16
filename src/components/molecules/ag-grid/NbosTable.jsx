import { AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/styles//ag-grid.css'
import 'ag-grid-community/styles//ag-theme-alpine.css'

const NbosTable = () => {
  const rowData = [
    { make: 'Toyota', model: 'focus', price: 4000 },
    { make: 'Toyota', model: 'focus', price: 4000 },
    { make: 'Toyota', model: 'focus', price: 4000 },
  ]

  const columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true },
  ]

  return (
    <div className="ag-theme-alpine" style={{ height: 250, width: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    </div>
  )
}

export default NbosTable
