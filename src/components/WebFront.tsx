import * as React from 'react';
import{Button} from 'react-bootstrap';
import {FormPage} from './FormPage';
import wpic from '../assets/wpic.png';
import './WebF.css'
export interface IWebFrontPageState {
    ShowFormPage:boolean;
} 

export class WebFront extends React.Component<{},IWebFrontPageState>{
    constructor(props:{}) {
        super(props)
        this.state={
         ShowFormPage:false
        }
    }

    private showst = () => {
      this.setState({ShowFormPage:true})
    }
    
   public render() :JSX.Element{
        return(
            <div className="fc">
                <h1>Weather app</h1>
            <img src={wpic} height="100" width="100"/>
            <br/>
          {!this.state.ShowFormPage?
                <div>
            
            <h3> Welcome Click On button to get Started</h3>
            <br/>
            <Button bsStyle="danger" onClick={this.showst}>
               Get Todays Weather 
            </Button>
            </div>:<div><FormPage/></div>
            }
            </div>
        )
    }
}