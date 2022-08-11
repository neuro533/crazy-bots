import React from "react";
import Card from "./Card";
//import {robots} from './robots'

const CardList=(props)=>{
  return (
    <div>
      {
      
    props.robo.map((element,i)=>{ 
    return <Card key={i} id={props.robo[i].id} name={props.robo[i].name} email={props.robo[i].email}/>
    
  })

}
  </div>
  
  );
}


export default CardList; 