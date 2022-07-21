import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class UserList extends React.Component {
    state = {
        persons: [],
        pending: true,
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ persons: res.data });
                this.setState({ pending: false });
            });
    }



    render() {
        if (this.state.pending) {
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
                        {this.state.persons.map(person =>
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
}
