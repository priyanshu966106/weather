import * as React from 'react';
import {connect} from 'react-redux'


class weaEx extends React.Component<any,any>{
    constructor(props:any)
    {
        super(props)
        
    }
    
   

    render() {
        return(
          <div>
            { this.props.loc.map(function(user:any, id:number){
              return <ul key={id}>{user.location}</ul>
            })}
          </div>
        )
       }
       


}
 function mapStateToProps(state:any ){
    console.log('state',state)
    return{
         loc:state.forms
         
    };

}
export default connect(mapStateToProps,null)(weaEx)