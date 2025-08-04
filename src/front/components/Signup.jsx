import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom"

export const Signup = () => {
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const navigate = useNavigate
    
    const createUser = (e) => {
        e.preventDefault()
        let data = { email: emailInputValue, password: passwordInputValue }
        fetch('https://refactored-space-bassoon-g46vq9jvgj5xhw7rw-3001.app.github.dev/api/user', {
            method: 'POST',
            body: JSON.stringify(data), // data can be a 'string' or an {object} which comes from somewhere further above in our application
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) throw Error(res.statusText);
                return res.json();
            })
            .then(response => {
                console.log('Success:', response)
                navigate("/");
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="d-flex display-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="border border-1 border-secondary rounded p-3 d-flex justify-content-center align-items-center" style={{ height: "70vh", boxSizing: "border-box" }}>
                                <div>
                                    <h1 className="mx-auto">Sign Up!</h1>
                                    <form onSubmit={createUser}>
                                    <input
                                        className="form-control border-1 border-secondary focus-ring-0 m-1"
                                        value={emailInputValue}
                                        placeholder="email"
                                        onChange={(event) => setEmailInputValue(event.target.value)}
                                    />{/* onKeyDown={(event) => postTodo(event)} - change this to throw an error if both fields are not full */}
                                    <input
                                        className="form-control border-1 border-secondary focus-ring-0 m-1"
                                        value={passwordInputValue}
                                        placeholder="password"
                                        onChange={(event) => setPasswordInputValue(event.target.value)}
                                    />{/* onKeyDown={(event) => postTodo(event)} - change this to throw an error if both fields are not full */}
                                    <Link to="/" className="btn btn-secondary ms-2 text-decoration-none">
                                        Cancel
                                    </Link>
                                    <button type="submit" className="btn btn-success ms-2 text-decoration-none">
                                        Sign up!
                                    </button>
                                    </form>
                                    {/* put link to send signup token here, and onclick (onsubmit?) */}
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}