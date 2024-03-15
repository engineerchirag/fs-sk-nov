import { useRef } from 'react';

const LoginUnControlled = () => {
    const userNameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userNameRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div>
            <div>
                <label>Username</label>
                <input ref={userNameRef} type="text" placeholder="username" />
            </div>
            <div>
                <label>Password</label>
                <input ref={passwordRef} type="password" placeholder="Password" />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default LoginUnControlled;