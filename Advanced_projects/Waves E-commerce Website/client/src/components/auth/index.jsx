import { useState } from "react";
import { Button } from "@mui/material";
import AuthForm from "./authForm";

const RegisterLogin = (props) => {
    const [formType, setFormType] = useState(false);

    const toggleFormType = () => {
        setFormType(!formType);
    }

    return (
        <div className="page_wrapper">
            <div className="container">
                <div className="register_login_container">
                    <div className="left">
                        {formType ?
                            <>
                                <h1>New Customer</h1>
                                <p>
                                    Eaque amet ullam reiciendis placeat eos minus nostrum obcaecati
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    voluptate iusto laudantium blanditiis accusantium harum voluptatum,
                                    rem magnam alias, provident tenetur maiores!
                                </p>
                            </>
                            :
                            <>
                                <h1>Welcome Back</h1>
                                <p>
                                    Reiciendis placeat eos minus nostrum obcaecati
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    voluptate iusto laudantium blanditiis accusantium harum voluptatum,
                                    rem magnam alias, provident tenetur maiores!
                                </p>
                            </>
                        }
                        <Button
                            variant="contained"
                            size="small"
                            onClick={() => toggleFormType()}
                        >
                            {formType ? "Already registered" : "Need to register"}
                        </Button>
                    </div>
                    <div className="right">
                        <h2>{formType ? "Register" : "Sign In"}</h2>
                        <AuthForm
                            formType={formType}
                            {...props}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterLogin;