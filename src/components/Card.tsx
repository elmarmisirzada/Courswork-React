import React from 'react'

interface CardinXususiyyeleri {
    shekil:string;
    mukafatinAdi:string;
    mukafatinMetni:string;

}

const Card:React.FC<CardinXususiyyeleri> = ({shekil,mukafatinAdi,mukafatinMetni}) => {
  return (
    <div className="card persons-cards py-5"  >
    <img src={shekil} className="card-img-top " alt="..." />
    <div className="card-body text-center ">
        
        <p className="card-text ">{mukafatinMetni}</p>
        <h2 className="card-title ">{mukafatinAdi}</h2>
        
    </div>
</div>
  )
}

export default Card