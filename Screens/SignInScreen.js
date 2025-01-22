import React from "react";
import TextInputR from "../components/common/TextInputR";
import Template from "../components/common/Template";
import ButtonR from "../components/common/ButtonR";

const UserPasswordField = () => {

    const [password, setPassword] = React.useState('');


    return (
        <TextInputR
            value={password}
            onChangeText={setPassword}
            type={"password"}
        />
    );
}

const UserEmailField = () => {

    const [email, setEmail] = React.useState('');


    return (
        <TextInputR
            value={email}
            onChangeText={setEmail}
            type={"email"}
        />
    )
}

const SignInButton = () => {

}

const SignInScreen = () => {

    return (
        <Template>
            <UserEmailField />
            <UserPasswordField />
            <ButtonR/>
        </Template>
    )
};

export default SignInScreen;