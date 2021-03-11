import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import maleImage from '../../Photo/male.png';
import femaleImage from '../../Photo/female.png';
import { faFlag, faFutbol, faMapMarkerAlt, faMars } from '@fortawesome/free-solid-svg-icons';

const TeamDetails = () => {
    const {teamId} = useParams();
    const [team, setTeam] = useState({});
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    }, [teamId])

    const bannerDivStyle = {
        backgroundImage: `url(${team.strStadiumThumb})`,
        backgroundSize: '1400px 300px',
        backgroundRepeat: 'no-repeat'
    }

    const iconStyle = {
        height: '50px',
        width: '50px',
        padding: '10px'
    }
    const bannerImageStyle = {height:'150px', width:"150px", borderRadius:"10px"}
    return (
        <div>
            <div className="text-center p-5" style= {bannerDivStyle}> 
            <img src={team.strTeamBadge} style= {bannerImageStyle} alt=""/>
            </div>
            <div className="text-center container">
                <div class="card m-3 p-2" style={{maxWidth: '1050px', backgroundColor: 'blue'}}>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card-body text-white" style={{width: '100%'}}>
                                <h2>{team.strTeam}</h2>
                                <p><FontAwesomeIcon style={iconStyle} icon={faMapMarkerAlt} /> Founded in: {team.intFormedYear}</p>
                                <p><FontAwesomeIcon style={iconStyle} icon={faFlag} /> Country: {team.strCountry}</p>
                                <p><FontAwesomeIcon style={iconStyle} icon={faFutbol} /> Sport Type: {team.strSport}</p>
                                {
                                    team.strGender === 'Male' ?  <p><FontAwesomeIcon style={iconStyle} icon={faMars} /> Gender: Male</p>:  <p>Gender: Female</p>
                                 }
                               
                            </div>
                        </div>
                        <div class="col-md-6">
                            {
                                team.strGender === 'Male' ? <img style={{width:"100%"}} src={maleImage} alt="..."/>: <img style={{width:"100%"}} src={femaleImage} alt="..."/>
                            }
                        </div>
                    </div>
                </div>
                    <p className='text-white'>{team.strDescriptionEN}</p>
            </div>
                    <div className='text-center m-3'>
                        <a href={`https://${team.strFacebook}`}><FontAwesomeIcon style={iconStyle} icon={faFacebook} /></a>
                        <a href={`https://${team.strTwitter}`}><FontAwesomeIcon style={iconStyle} icon={faTwitter} /></a>
                        <a href={`https://${team.strInstagram}`}><FontAwesomeIcon style={iconStyle} icon={faInstagram} /></a>
                    </div>

        </div>
    );
};

export default TeamDetails;