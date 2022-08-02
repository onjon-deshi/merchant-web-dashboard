import React from 'react';
import { Link } from 'react-router-dom';
import InputMask from "react-input-mask";
import Button from '../../components/Button';
import SignUpOrLogin from '../../components/SignUpOrLogin';
import { ImArrowRight2 } from "react-icons/im";
import postFetchApi from '../../utilities/postFetch';



export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileNumber: "",
            password: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = async (event) => {

        event.preventDefault();

        var mobileNumberFinal = this.state.mobileNumber.split(" ").join("");
        mobileNumberFinal = mobileNumberFinal.replace(/_+/g, '');

        if (mobileNumberFinal.length !== 14) {
            alert("Please enter valid phone number.");
            return;
        }

        if (this.state.password.length < 3) {
            alert("Please password at least 3 character long.");
            return;
        }

        try {
            // await fetch(process.env.REACT_APP_API_BASE_URL + "api/v1/auth/signin", {
            //     method: 'POST',
            //     headers: new Headers({
            //         'Content-Type': 'application/json',
            //     }),

            //     body: JSON.stringify({
            //         mobile_number: mobileNumberFinal,
            //         password: this.state.password
            //     })
            // })
            //     .then((response) => response.text())
            //     .then((responseJSON) => {
            //         let response = JSON.parse(responseJSON);
            //         if (response["code"] !== 200) {
            //             alert(response["code"] + " : " + response["messages"]);
            //             return;
            //         }

            //         if (response["data"]["token"] !== undefined) {
            //             let token = response["data"]["token"];

            //             window.localStorage.setItem("UserToken", token);
            //             document.location.href = "/dashboard/home";
            //             return;
            //         }
            //     })
            //     .catch((error) => {
            //         console.log(error);
            //     });

            let response = await postFetchApi('api/v1/auth/signin',JSON.stringify(
                {
                    mobile_number: mobileNumberFinal,
                    password: this.state.password
                }),
                true
            )

            response.text()
                .then((responseJSON) => {
                    let response = JSON.parse(responseJSON);
                    if (response["code"] !== 200) {
                        alert(response["code"] + " : " + response["messages"]);
                        return;
                    }

                    if (response["data"]["token"] !== undefined) {
                        let token = response["data"]["token"];

                        window.localStorage.setItem("UserToken", token);
                        document.location.href = "/dashboard/home";
                        return;
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        }


        catch (err) {
            console.log(err);
        }


        // RESET FORM
        event.target.reset();
    }


    render = () => {
        return (
            <div className="w-3/5">
                <h1 className="font-bold text-4xl mb-8">{this.props.title}</h1>
                <SignUpOrLogin />
                <div className="bg-neutral-100 p-9 text-secondary ">
                    <p className="mb-5">{this.props.subtitle}</p>
                    <form onSubmit={this.handleSubmit} method="POST" className="form-body">

                        <div className="mb-4">
                            <InputMask mask="+880 999 999 9999" value={this.state.value} type={this.props.type} name={this.props.name1} onChange={this.handleInputChange} className="w-full p-3 rounded-lg mb-4" min-length="16" autoComplete='off' placeholder={this.props.placeholder1} required />
                            <input type={this.props.type2} name={this.props.name2} value={this.state.value} onChange={this.handleInputChange} className="w-full p-3 rounded-lg border-none" placeholder={this.props.placeholder2} required />
                        </div>
                        <Button name={this.props.btnName} />
                        <Link to="/forget-password-step-one" className='font-bold text-primary inline-block mb-3'>Forgot Password?</Link>
                        <p>Don’t have any account? <Link to="/signup" className="font-bold text-primary">Signup Instead <ImArrowRight2 className='inline ml-1 mb-0.5' /></Link> </p>
                    </form>
                </div>
            </div>
        );
    }

}