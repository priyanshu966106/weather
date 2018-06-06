import weather_json from './weatheyr'

function weathers(state=weather_json,action:any){

    switch(action.type){
        default:
        return state;
    }
}
export default weathers;