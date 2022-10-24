
import React from 'react'

const UserList = (props) => {

    const renderedUserList = Object.values(props.users).map((item,index) => {
        return (
            <tr key={item._id}>
                <th scope="row">{index+1}</th>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.department}</td>
            </tr>
        )
    });

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedUserList}
                </tbody>
            </table>
        </div>
    )
}

export default UserList
