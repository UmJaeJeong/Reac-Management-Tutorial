import React from 'react';

class Customer extends React.Component{
    render() {
        return(
            <div>
               <CustomerInfo image={this.props.image} name={this.props.name} id={this.props.id}/>
                <CustomerProfile name={this.props.id} birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}

class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <h2>{this.props.name}</h2>
                <h2>{this.props.birthday}</h2>
                <h2>{this.props.gender}</h2>
                <h2>{this.props.job}</h2>
            </div>
        )
    }
}

class CustomerInfo extends React.Component{
    render() {
        return(
            <div>
                <img src={this.props.image} alt="profile"/>
                <h2>{this.props.name}{this.props.id}</h2>
            </div>
        )
    }
}
export default Customer;