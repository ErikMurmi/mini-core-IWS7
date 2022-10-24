import React, { useState } from 'react'

import Button from 'components/UI/Button'

const UserForm = (props) => {

    const options = [
        { value: '1' , label : 'Management'},
        { value: '2' , label : 'Systems'},
        { value: '3' , label : 'Administration'},
    ]

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [department, setDepartment] = useState('')

    const onHandlerSubmit = (event) => {
        event.preventDefault();
        
        props.addNewUser( {
            'firstname' : firstname,
            'lastname' : lastname,
            'department' : department
        })

        setFirstName('');
        setLastName('');
        setDepartment('');
    }

    const selectChooseOption = Object.values(options).map( item => {
        return (
            <option key={item.label} value={item.label}>{item.label}</option>
        )
    })

    return (
        <div>
            <form onSubmit={onHandlerSubmit}>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Firstname</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={firstname}
                        onChange={({ target: { value } }) => setFirstName(value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Lastname</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={lastname}
                        onChange={({ target: { value } }) => setLastName(value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Deparment</label>
                    <select 
                        className="form-control" 
                        value={department} onChange={({ target: { value } }) => setDepartment(value) }>
                            <option value="" >...</option>
                            {selectChooseOption}
                    </select>
                </div>
                
                <Button
                    type="submit"
                >
                    Save
                </Button>
            </form>

        </div>
    )
}

export default UserForm;