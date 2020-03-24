import React, { Component } from 'react'
import axios from "axios";
import { FacebookProvider, LoginButton } from 'react-facebook';


class FacebookLogin extends Component {


    handleResponse = async data => {
        const response = await axios.post("https://vibefmapi.herokuapp.com/api/v1/auth", {
            uid: data.profile.id,
            email: data.profile.email,
            provider: "facebook"
        });

        if (response.status === 200) {
            debugger;
        } else {
            debugger;
        }
    }

    render() {
        return (
            <div>
                <FacebookProvider appId="931150830637424">
                  <LoginButton
                    scope="email"
                    onCompleted={this.handleResponse}>
                    <span>Login via Facebook</span>
                  </LoginButton>
                </FacebookProvider>
            </div>
        )
    }
}

export default FacebookLogin;