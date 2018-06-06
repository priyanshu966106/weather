import * as React from 'react';
import {Button,Form,FormControl} from 'react-bootstrap'

import WebEx from './weaEx'
export class FormPage extends React.Component{
  

    public render(){
       
return(

<div className="afpage">
    
    <Form>
        <FormControl type="text" />
        <br/>
        <Button bsStyle="primary">
          Find weather
        </Button>
    </Form>
    <WebEx/> 
</div>

)
}}




