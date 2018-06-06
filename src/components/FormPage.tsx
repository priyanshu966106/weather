import * as React from 'react';
import {Button,Form,FormControl} from 'react-bootstrap'

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
</div>

)
}


}