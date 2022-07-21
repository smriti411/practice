import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserDisplay = () => {
    const { id } = useParams();

    const [person, setPerson] = useState([]);
    const [pending, setPending] = useState(true);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setPerson(res.data);
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
            <div className="content1">
                <h2>Details of {person.name}</h2>
                <div className="box">
                    <div className="card">
                        <div className="container">
                            <b>username:</b> <i>{person.username}</i><br />
                            <b>email:</b> <i>{person.email}</i><br />
                            <b>phone:</b> <i>{person.phone}</i><br />
                            <b>website:</b> <i>{person.website}</i><br />
                            <b>address:</b> <i>{person.address.street}, {person.address.suite},<br />
                                {person.address.city}, zipcode: {person.address.zipcode}</i>
                            <br />
                            <i>Latitude: "{person.address.geo.lat}" Longitude: "{person.address.geo.lng}" </i>
                            <br />
                            <b>company:</b> <i>{person.company.name}<br />
                                Catch Phrase: - " {person.company.catchPhrase} "<br />
                                Business Stratergy: " {person.company.bs}"</i><br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserDisplay;