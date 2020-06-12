import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';


const ViewUser = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        contact: ""

    });

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async e => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUser(result.data);

    };

    const { id } = useParams(); 
    return (
        <div class="container">
            <Link class="btn btn-outline-primary" to="/">Back</Link>
            <h1 class="display-4 py-4">User Id- {user.id}</h1>
            <ul class="list-group">
                <li class="list-group-item">Name- {user.name}</li>
                <li class="list-group-item">Username- {user.username}</li>
                <li class="list-group-item">Email - {user.email}</li>
                <li class="list-group-item">Phone - {user.phone}</li>
            </ul>
        </div>
    );
};

export default ViewUser;