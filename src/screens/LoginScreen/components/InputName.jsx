import React,{memo, useState  } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./Login.css";

export const InputName = memo(function(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
                </Button>
                <a class='a' href='https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login'>Quên mật khẩu</a>
                <Button variant="success" block bsSize="large" disabled={!validateForm()} type="submit">
                Tạo tài khoản mới
                </Button>
            </form>
        </div>
    )
})