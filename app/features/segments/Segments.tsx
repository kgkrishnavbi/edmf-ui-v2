import React from 'react'
import Header from '../../containers/Header';
import { AgGridReact } from 'ag-grid-react';
import { Link } from 'react-router-dom'
import CampainActionRenderert from '../../components/renderers/CampainActionRenderer'
import routes from '../../constants/routes.json'

const defaultColDef = {  sortable: true }

export default ({ segments, createSegment, deleteSegment }: any) => {

	const columnDefs = [
		{ headerName: "Name", field: "name",cellRenderer: 'nameRenderer' },
		{ headerName: "Description", field: "description" },
		{ headerName: "Created At", field: "createdAt" },
		{ headerName: "Last Modified", field: "updatedAt" },
		{ 
			headerName: "Action",cellRenderer: 'actionRenderer',
			cellRendererParams: { 
				onDelete: deleteSegment,
				onEdit: (id) => console.log('Edit Campaign', id)
			}
		}
	]

	const frameworkComponents = { actionRenderer: CampainActionRenderert }

	return (
		<div className="w-full">
			<Header name="Segments"/>
			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="flex items-center mb-5">
					<Link to={`${routes.SEGMENTS}/create`}>
						<button onClick={createSegment} className="bg-indigo-700 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">
							Create Segment
						</button>
					</Link>
				</div>
				<div className="ag-theme-alpine" style={{ height: 'calc(100vh - 100px)', width: '100%' }}>
					<AgGridReact 
						columnDefs={columnDefs}
						rowData={segments}
						defaultColDef={defaultColDef}
						frameworkComponents={frameworkComponents}
					>
					</AgGridReact>
				</div>
			</main>
		</div>
	)
}