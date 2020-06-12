import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

const EditUser = () => {
    let history = useHistory();
    const { id } = useParams();
    //alert(id);
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        contact: ""
         
    });
    const { name, username, email, contact } = user;

    const onInputChange = e => {
        //console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async e => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUser(result.data);

    };
    return (
        <div class="container">
            <h3>Add User</h3>
            <form onSubmit={e => onSubmit(e)}>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" id="name" name="name" value={name} onChange={e => onInputChange(e)} />
                </div>
                <div class="form-group">
                    <label>Username</label>
                    <input type="text" class="form-control" id="username" name="username" value={username} onChange={e => onInputChange(e)} />
                </div>
                <div class="form-group">
                    <label>Email address</label>
                    <input type="email" class="form-control" id="email" name="email" value={email} onChange={e => onInputChange(e)} />
                </div>
                <div class="form-group">
                    <label>Contact</label>
                    <input type="text" class="form-control" id="contact" name="contact" value={contact} onChange={e => onInputChange(e)} />
                </div>
                <button type="submit" class="btn btn-primary">Update User</button>
            </form>
        </div>
    )
};

export default EditUser;