import './RegisterForm.css'
import React, { Component } from 'react'

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        const currentDate = new Date().toISOString().split('T')[0];
        this.state = ({
            fullname: '',
            username: '',
            password: '',
            email: '',
            tel: '',
            object: '',
            favorite: [],
            address: '',
            birthday: currentDate,
            picture: ''

        })
    }

    handleSubmitRegisterForm = (e) => {
        e.preventDefault();
        console.log("Full name: " + this.state.fullname);
        console.log("User name: " + this.state.username);
        console.log("Password: " + this.state.password);
        console.log("Email: " + this.state.email);
        console.log("Telephone number: " + this.state.tel);
        console.log("Object: " + this.state.object);
        console.log("Favorites: " + this.state.favorite);
        console.log("address: " + this.state.address);
        console.log("birthday: " + this.state.birthday);
        console.log("picture: " + this.state.picture);



    }

    handleInputChange = (e) => {

        const { type, name, value, checked } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                this.setState((prevState) => {
                    return { favorite: [...prevState.favorite, value] };
                })
            } else {
                this.setState((prevState) => {
                    return { favorite: prevState.favorite.filter(item => item !== value) };
                })
            }
        } else {
            this.setState({
                [name]: value
            })
        }

    }

    render() {
        return (
            <div className='register-form'>
                <div className='register-form-title'>
                    Register
                </div>

                <div className='register-form-description'>
                    Please <p className='bold-text'>fill this form</p> to create an account
                </div>

                <form onSubmit={this.handleSubmitRegisterForm}>
                    <div className='form-items'>
                        <label className='form-label'>Full Name</label>
                        <input type='text' className='form-control' name='fullname' value={this.state.fullname} onChange={this.handleInputChange} placeholder='Input Your Full Name' />
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Username</label>
                        <input type='text' className='form-control' name='username' value={this.state.username} onChange={this.handleInputChange} placeholder='Input Your User name' />
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Password</label>
                        <input type='password' className='form-control' name='password' value={this.state.password} onChange={this.handleInputChange} placeholder='Input Your password' />
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Email</label>
                        <input type='email' className='form-control' name='email' value={this.state.email} onChange={this.handleInputChange} placeholder='Input Your Email' />
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Telephone number</label>
                        <input type='tel' className='form-control' name='tel' value={this.state.tel} onChange={this.handleInputChange} placeholder='Input Your Telephone number' />
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Input Object</label>
                        <input type='radio' name='object' value='Student' checked={this.state.student} onChange={this.handleInputChange} /> Student
                        <input type='radio' name='object' value='Teacher' checked={this.state.teacher} onChange={this.handleInputChange} /> Teacher
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Favorite</label>
                        <input type='checkbox' name='favorite' value='badminton' checked={this.state.favorite.includes('badminton')} onChange={this.handleInputChange} />Badminton
                        <input type='checkbox' name='favorite' value='volleyball' checked={this.state.favorite.includes('volleyball')} onChange={this.handleInputChange} />Volleyball
                        <input type='checkbox' name='favorite' value='football' checked={this.state.favorite.includes('football')} onChange={this.handleInputChange} />Football

                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Address</label>
                        <select className='form-control' name='address' value={this.state.address} onChange={this.handleInputChange}>
                            <option value='' checked>-----Chọn địa chỉ-----</option>
                            <option value='TP.HCM'>TP Hồ Chí Minh</option>
                            <option value='HN'>Hà Nội</option>
                            <option value='DN'>Đà nẵng</option>
                        </select>
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Birthday</label>
                        <input type='date' className='form-control' name='birthday' value={this.state.birthday} onChange={this.handleInputChange} defaultValue={Date.now()} />
                    </div>

                    <div className='form-items'>
                        <label className='form-label'>Your picture</label>
                        <input type='file' className='form-control' name='picture' value={this.state.picture} onChange={this.handleInputChange} />
                    </div>

                    <div className='form-items'>
                        <input type='submit' value="Dang ky" />
                    </div>

                </form>
            </div>
        )
    }
}

export default RegisterForm;