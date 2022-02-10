import './UserList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { userRows} from '../home/dummyDatas'
import { Link} from 'react-router-dom'
import { useState} from 'react'
function UseList() {
    const [data, setData] = useState(userRows)
    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id !==id));
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <div className='userListUser'>
                    <img src={params.row.avatar} alt='' className='userListImg' />
                    {params.row.username}
                </div>
            )
        }},

        { field: 'email', headerName: 'Email', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volum',
            width: 160,
          },
          {
            field:"action",
            headerName: "Action",
             with:150,
             renderCell: (params) => {
                 return(
                     <>
                     <Link to={"/user/"+params.row.id}>
                     <button className="userListEdit">Edit</button>

                     </Link>
                     <DeleteOutline className="userListDelete" onClick={() =>handleDelete(params.row.id)} />
                     </>
                 ) ;
             },
          },
      ];
      
      
      
    return (
        <div className='userList'>
             <DataGrid disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        
        </div>
    )
}

export default UseList
