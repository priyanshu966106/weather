import * as React from 'react';
import {Alert} from 'react-bootstrap';
export interface IAlertProps{
    msg:string
}
 export class Alerter extends React.Component<IAlertProps>{
     constructor(props:IAlertProps){
         super(props)
     }
     render(){
         return(
          <div>
          <Alert bsStyle="danger">
            {this.props.msg}
          </Alert>
          </div>
         )
     }
 }