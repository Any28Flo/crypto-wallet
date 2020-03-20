import React, {useState , useContext} from 'react'
import AuthService from "./auth-service";
import MyContext from "../../context";
const Signup = props=>{

    const [formState, setForm] = useState({username: '' , password : ''});
    let service = new AuthService();
    const {updateUser} = useContext(MyContext);

    const handleFormSubmit  = e =>{
        e.preventDefault();
        const username = formState.username;
        const password = formState.password;

        service.signup(username, password)
            .then(response =>{

                setForm({
                    username: '' ,
                    password : ''
                });
                updateUser(response)

            })
            .catch( e => console.log(e))
    };
    const handleChange = e =>{
        const {name, value} = e.target;
        setForm(Object.assign({}, formState, {[name]: value}));
    };

    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>Username:</label>
                <input type="text" name="username" value={formState.username} onChange={ e => handleChange(e)} />

                <label>Password:</label>
                <input type="password" name="password" value={formState.password} onChange={ e => handleChange(e)}/>


                <button type="submit"> Signup</button>
            </form>
        </div>
    )

};
export default Signup;