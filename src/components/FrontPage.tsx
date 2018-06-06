import * as React from 'react'
export interface IFrontPageProps {
    rtg: string;
    
  }

  export interface IFrontPageState {
      id: number;
  }

class FrontPage extends React.Component<IFrontPageProps, IFrontPageState> {
  
    constructor(props: IFrontPageProps) {
        super(props);

        this.state = {
            id: 0
        }
    }

   // private state: IFrontPageState = {id: 0}
  
    public render(): JSX.Element {

    return(
        <div>
            {this.props.rtg}
        </div>
    )
}


}
export default FrontPage;