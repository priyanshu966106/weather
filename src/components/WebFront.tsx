import * as React from 'react';
import{Button} from 'react-bootstrap';
import wpic from '../assets/wpic.png';
import './WebF.css'
export interface IWebFrontPageState {
    id: number;
} 

export class WebFront extends React.Component<{},IWebFrontPageState>{
    constructor(props:{}) {
        super(props)
        this.state={
         id:0
        }
    }

    private showst = () => {
      console.log('hello', this.state);
    }
    
   public render() :JSX.Element{
        return(
            <div className="fc">
            <h1>Weather app</h1>
            <img src={wpic} height="100" width="100"/>
            <br/>
            <h3> Welcome Click On button to get Started</h3>
            <br/>
            <Button bsStyle="danger" onClick={this.showst}>
               Get Todays Weather 
            </Button>
                
            </div>
        )
    }
}