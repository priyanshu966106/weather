import * as React from 'react';
export interface IFrontPageProps {
    imgUrl: string;
    weatherCondition:string;
    
  }

 export class DateRen extends React.Component<IFrontPageProps>{
     constructor(props:IFrontPageProps){
         super(props)
}
 render(){
     return(
         <div>
           <img src={this.props.imgUrl}/><b>{this.props.weatherCondition}</b>          
         </div>
     )
 }
}