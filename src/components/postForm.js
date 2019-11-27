import React, { Component } from 'react';
import MenuComponent from './partials/MenuComponent';
import './Authentication/Auth.scss';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../App.scss';

export default class postForm extends Component {

    state = {
        description: '',
        category: '',
        type: '',
        image: '',
        selectedValue: 'Nothing selected',
        items:[]
    };
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        var token = localStorage.getItem("token");
        const { description, type, category } = this.state;

        var formData = new FormData();
        var imagefile = document.querySelector('#image');
        formData.append("image", imagefile.files[0]);
        formData.append("description", description);
        formData.append("type", type);
        formData.append("category_id", category);

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        axios.post('https://ifind-backend.herokuapp.com/api/v1/posts', formData, { headers: headers })
            .then((res) => {
                Swal.fire({
                  icon: 'success',
                  title: 'Yay!',
                  text: res.data.message,
                });
              })
            .catch((err) => {
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops...',
                  text: err.response.data.message,
                });
              });
    
        this.setState({
            description: '',
            category: '',
            type: '',
            image: ''
        });

    };
    componentDidMount() {
        axios.get('https://ifind-backend.herokuapp.com/api/v1/category')
        .then(response => {
            this.setState({ items: response.data })
        })
        .catch(error => {
            console.log(error);   
        })
    }

    render() {
        const { data} = this.state.items
        
        return (
            <div>

            <div className="App">
        <MenuComponent />
        <div className="container">
            <div className="devider">
                <div className="postsContainer">
                    <postForm />
                </div>
            </div>
           </div>
         </div>

            <div className="FormCenter">
                <div className="Auth__Form">
                <form onSubmit={e => this.onSubmit(e)}>
     
                <div className="FormField">
                  <label className="FormField__Label" htmlFor="description">DESCRIPTION</label>
                  <input type="text" id="description"
                  className="FormField__Input"
                  required 
                  placeholder="Enter descriptions"
                  name="description"
                  autoComplete="off"
                  value={this.state.description} onChange={e=> this.change(e)} />
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="description">CATEGORY </label>
                    <select name="category" onChange={e => this.change(e)} className="FormField__Input">
                    {
                     data && data.map(item => (
                     <option key={item.id} name={item.id} value={item.id}>{item.name}</option>

                        ))
                    }
                    </select>
                </div>

                <div className="FormField">
                <label className="FormField__Label" htmlFor="type">TYPE</label>
                <select id="type" name="type" onChange={e => this.change(e)} className="FormField__Input">
                  <option name="lost" value="lost">lost</option>
                  <option name="found" value= "found">found</option>
                </select>
                </div>

                <div className="FormField">
                  <label className="FormField__Label" htmlFor="image">IMAGE</label>
                  <input type="file" id="image"
                  className="FormField__Input"
                  required placeholder="Enter image"
                  name="image"
                  autoComplete="off"
                  value={this.state.image} onChange={e=> this.change(e)} />
                </div>
                   <div className="FormField">
                    <button type="submit" className="FormField__Button mr-20">ADD POST</button> 
                </div>
                </form>
            </div>    
            </div>
            </div>
        )
    }
}
