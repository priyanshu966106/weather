import * as React from 'react';
import loaderr from '../assets/wpic.png'
export interface ILoaderProps{
    showLoaderp:boolean;
}
export class Web_loader extends React.Component<ILoaderProps>{
    constructor(props:ILoaderProps)
    {
        super(props)

    }
    render(){
        return(
            <div>
                {
                    this.props.showLoaderp?<img src={loaderr} height="80" width="80"/>:<div/>
                }
            </div>
        )
    }

}