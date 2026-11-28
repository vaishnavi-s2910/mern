
import React, { useState } from 'react'

function Registration() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        number: ""
    });

    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    // usernamne:"s"
    // email:'s@gmai.com

    function handleSubmit(e) {
        e.preventDefault();

        if (editIndex === null) {
            setUsers([...users, formData]);
        } else {
            const updated = [...users];
            updated[editIndex] = formData;
            setUsers(updated);
            setEditIndex(null);
        }

        setFormData({ username: "", email: "", number: "" });
    }

    function handleEdit(index) {
        setFormData(users[index]);
        setEditIndex(index);
    }

    function handleDelete(index) {
        setUsers(users.filter((user, i) => i !== index));
    }

    return (
        <>
            <h2>Registration Form</h2>

            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Enter Name" value={formData.username} onChange={handleChange} required /><br /><br />
                <input name="email" type="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required /><br /><br />
                <input name="number" placeholder="Enter Number" value={formData.number} onChange={handleChange} required /><br /><br />
                <button type="submit">{editIndex === null ? "Submit" : "Update"}</button>
            </form>

            <h2>Registration Details</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.number}</td>
                            <td><button type="button" onClick={() => handleEdit(index)}>Edit</button></td>
                            <td><button type="button" onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Registration
