import { useEffect, useState } from 'react';
import React from 'react';
import Team from '../Team/Team';
import TeamDetails from '../TeamDetails/TeamDetails';
import Header from '../Header/Header';
const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League"
        fetch(url)
        .then(res => res.json())
        .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className= 'row container' style={{marginLeft: '100px'}}>
                {
                    teams.map(team => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Home;