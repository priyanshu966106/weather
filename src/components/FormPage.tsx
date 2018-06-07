import * as React from 'react';
import {Button,Form} from 'react-bootstrap'
import {DateRen} from './DateRen';
import {Web_loader} from './Web_loader';
import {Alerter} from './alerter'
export interface IFrontPageState {
    country: any; 
    reps:any;
    icon:string;
    showWeaStat:boolean
    showLoader:boolean
    showAlert:boolean
}

export class FormPage extends React.Component<any,IFrontPageState>{
 
    constructor(props:any){
        super(props)
        this.state={
           country:null,
           reps:'',
           icon:'',
           showWeaStat:false,
           showLoader:false,
           showAlert:false
        }
    }
  
handleChange=(event:any)=>{
    this.setState({country: event.target.value});
}

showState=()=>{
    console.log("called");
    
    this.setState({showLoader:true})
    if(this.state.country!=null){
        this.setState({showAlert:false})
  let cstring:string=this.state.country;
  const AppId:string="f7aa90d5e6f9b6337399b73f70e00b0a";
  const url:string=`http://api.openweathermap.org/data/2.5/weather?q=${cstring}&APPID=${AppId}`;
  console.log('url',url); 
  fetch(url,{
      method:'GET'

  }).then(response => response.json())
     .then(json=>this.setState({reps:json.weather[0].description,icon:json.weather[0].icon}));
    this.setState({showLoader:false});  
    this.setState({showWeaStat:true})
}else{
 this.setState({showAlert:true})    
}
}

public render(){
       
return(

<div className="afpage">
    {
        this.state.showAlert?<Alerter msg="Please fill the input box"/> :<div/>
    }
    <Form>
        <input type="text"  onChange={this.handleChange} placeholder="Enter Area" />
        <br/><br/>
        <Button bsStyle="primary"  onClick={this.showState}>
          Find weather
        </Button><br/><br/>
        
    </Form>
     { this.state.showWeaStat?
     <DateRen imgUrl={`http://openweathermap.org/img/w/${this.state.icon}.png`} weatherCondition={this.state.reps}/>
     :
     <div><Web_loader  showLoaderp={this.state.showLoader} /> </div>
     }
     
     </div>

)
}}

    


