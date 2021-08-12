
import React from "react";
import './data3.css';

function pri(){
    return(
        <div className="Wrapper">
            <Card img='https://www.tourmyindia.com/states/kerala/images/Vadakkumnathan-Temple-Thrissur-1.jpg'
            title="THRISSUR"
            description="'Cultural Capital of Kerala'"/>
            <Card img='https://irisholidays.com/backend/web/destination-details/1567410031975.jpg'
            title="THIRUVANANTHAPURAM"
            description=" 'City of lord Anantha'"/>
            <Card img='https://lp-cms-production.imgix.net/2019-06/GettyImages-477678650_high.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4'
            title="ALAPPUZHA"
            description="'Venice of east'"/>

        </div>
    )
}
function Card(props){
    return(
            <div className="card">
            <div className="card__body">
            <img src={props.img} class="card__image"/>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
            </div>
            <a href="https://en.wikipedia.org/wiki/Kerala"target="_blank"><button className="card__btn">
                for more details
            </button>
            <br></br>
            </a>
            </div>
    )
}
export default pri;