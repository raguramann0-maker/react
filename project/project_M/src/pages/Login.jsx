import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const loginUser = () => {
    navigate("/products");
  };

  return (
    <div className="login" 
    style={{ display: "flex",
     flexDirection: "column", 
     alignItems: "center",
      justifyContent: "center",
       height: "400px",
       width: "400px",
        margin: "100px auto",
       borderRadius: "10px",
       boxShadow: "0 4px 8px rgba(75, 37, 37, 0.1)",
       padding: "20px",
       fontFamily: "Arial, sans-serif" }}>
      <h1>MADICALAPP</h1> <br />
      <h2>Login Page</h2>

      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      <button onClick={loginUser}>Login</button>
    </div>
  );
}

export default Login;