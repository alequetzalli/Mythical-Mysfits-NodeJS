import React, {Component} from 'react'

export class MythicalMysfitsProfileGrid extends Component {
    constructor (props){

        super(props); 

        this.state = {
            mysfits: [
                {name:'Canela',
                species: 'Dog',
                age: '12',
                goodevil: 'she-devil',
                lawchaos: 'illegal alien',
                thumbImageUri: 'https://www.okhumane.org/wp-content/uploads/2016/02/chocolate-lab.jpg'
            }, ]
        }; 
    }

    render (){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4 border border-warning">
                    {
                        this.state.mysfits.map(mysfit => {
                            return (
                                <div>
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
