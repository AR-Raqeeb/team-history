
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;

    return (
        <div className= 'col-md-4 container'>
            <div class="card m-3 text-center" style={{width: "18rem"}}>
                <img src={strTeamBadge} class="card-img-top p-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{strTeam}</h5>
                    <p class="card-text">Sports Type: {strSport}</p>
                    <Link to={`/team/${idTeam}`}>
                    <button className="btn btn-primary">Explore <span><FontAwesomeIcon icon={faArrowRight} /></span></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Team;