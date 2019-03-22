import React, {Component} from 'react'
import data from '../mythicalmysfitsdata'

export class MythicalMysfitsProfileGrid extends Component {
    constructor (props){

        super(props); 

        this.state = { mysfits: data};  
    }

    render (){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 border border-warning">
                    {
                        this.state.mysfits.map(mysfit => {
                            return (
                                <div key={mysfit.mysfitId}>
                                <p>
                                    <strong> {mysfit.name}</strong>
                                   
                                    <img src={mysfit.thumbImageUri} alt={mysfit.name}/>
                                </p>
                                <p>
                                  
                                    <b>Species: {mysfit.species}</b> 
                                  
                                    <b>Age: {mysfit.age}</b> 
                                   
                                    <b>Good/Evil: {mysfit.goodevil}</b> 
                                
                                    <b>Lawful/Chaotic: {mysfit.lawchaos}</b> 
                                </p>
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div> 

        ) 
    }
}
