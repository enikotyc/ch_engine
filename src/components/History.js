import React, {Component} from 'react';
import axios from 'axios';

export default class History{
    constructor(props)
    {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            description: '',
            date: new Date(),
            users: []
        }
    }
    componentDidMount(){
        axios.get('asdfjkl;').then(Response=>{
            if(Response.data.length > 0){
                this.setState({
                    users:Re
                })
            }
        })
    }
}