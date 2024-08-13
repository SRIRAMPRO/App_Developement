import React, { useEffect, useState } from 'react';
import '../styles/Repairs.css';
import { FaMapMarkedAlt, FaStar } from 'react-icons/fa';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Container } from "reactstrap";

const Repair = ({ repair }) => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FaStar
                    key={i}
                    size={20}
                    color={i <= rating ? 'gold' : 'gray'}
                />
            );
        }
        return stars;
    };

    return (
        <div>
            <div className='repair-body-img'></div>
            <div className='repair-body-bg'></div>
            <div className='repair-body-content'>
                <div className={`repair-body repair-${repair.id}`}>
                    <img src={repair.image} alt={repair.garageName} className="repair-image" />
                    <div className="repair-details">
                        <h3>{repair.garageName}</h3>
                        <p><span className='repair-p'>Contact: </span>{repair.contact}</p>
                        <p><span className='repair-p'>Email: </span>{repair.email}</p>
                        <p><span className='repair-p'>Address: </span>{repair.address}</p>
                        <p><span className='repair-p'>Rating: </span></p>
                        <span className='repair-rating'>{renderStars(parseInt(repair.rating))}</span>
                    </div>
                    <a href={repair.mapLink} target="_blank" rel="noopener noreferrer" className="repair-map-link">
                        <FaMapMarkedAlt size={30} color='red' style={{ position: 'relative', right: '3vw' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Repairs = () => {
    const [repairs, setRepairs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/repairs')
            .then(response => response.json())
            .then(data => setRepairs(data))
            .catch(error => console.error('Error fetching repairs:', error));
    }, []);

    return (
        <Helmet title="Repairs">
            <CommonSection title="AutoGarage's LocalShops" />
            <Container style={{ marginTop: '-7%' }}>
                <div className="repairs">
                    {repairs.map(repair => (
                        <Repair key={repair.id} repair={repair} />
                    ))}
                </div>
            </Container>
        </Helmet>
    );
};

export default Repairs;
