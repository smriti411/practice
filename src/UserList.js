import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UserList = () => {
    const [persons, setPersons] = useState([]);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setPersons(res.data);
                setPending(false);
            });
    }, [])

    if (pending) {
        return (
            <div className="loading">
                LOADING...
            </div>
        )
    }
    else {
        return (
            <div className="content">
                <h2>List of Users</h2>
                <div className="box">
                    {persons.map(person =>
                        <div className="card" key={person.id}>
                            <div className="container" >
                                {person.name}
                            </div>
                            <Link to={"/users/" + person.id}>
                                <button >
                                    Show Detail
                                </button>
                            </Link>

                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default UserList;