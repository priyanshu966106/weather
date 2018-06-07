import * as React from 'react';
import {Button,Form} from 'react-bootstrap'
export interface IFrontPageState {
    country: any;
    reps:any;
}


export class FormPage extends React.Component<any,IFrontPageState>{
    constructor(props:any){
        super(props)
        this.state={
           country: "india",
           reps:''
        }
    }
  
handleChange=(event:any)=>{
    this.setState({country: event.target.value});
}

showState=()=>{
    console.log("called");
  let cstring:string=this.state.country;
  const AppId:string="f7aa90d5e6f9b6337399b73f70e00b0a";
  const url:string=`http://api.openweathermap.org/data/2.5/weather?q=${cstring}&APPID=${AppId}`;
  console.log('url',url);
  fetch(url,{
      method:'GET'

  }).then(response => response.json())
     .then(json=>console.log('gotit',json)); 
}
    public render(){
       
return(

<div className="afpage">
    
    <Form>
        <input type="text"  onChange={this.handleChange} />
        <br/><br/>
        <Button bsStyle="primary"  onClick={this.showState}>
          Find weather
        </Button>
    </Form>
 
</div>

)
}}

    


