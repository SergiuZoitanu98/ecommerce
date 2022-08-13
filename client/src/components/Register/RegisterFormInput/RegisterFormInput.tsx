import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { REGISTER_URL } from "../../../costants/endpoints";
const RegisterFormInput = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  
  const register = () => {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    };
    fetch(REGISTER_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));




  };
  return (
    <>
      <div className="mb-4">
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setUsername(e.currentTarget.value)
          }
          type="text"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Username"
        />
      </div>
      <div className="mb-4">
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setEmail(e.currentTarget.value)
          }
          type="email"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Email"
        />
      </div>
      <div className="mb-4">
        <input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setPassword(e.currentTarget.value)
          }
          type="password"
          className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlInput1"
          placeholder="Password"
        />
      </div>
      <div className="text-center pt-1 mb-12 pb-1">
        <button
          onClick={() => register()}
          className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          style={{
            background:
              " linear-gradient( to right, #ee7724, #d8363a, #dd3675,  #b44593  )",
          }}
        >
          Register
        </button>
      </div>
      <div className="flex items-center justify-between pb-6">
        <p className="mb-0 mr-2">Already have an account?</p>
        <button
          type="button"
          className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          onClick={() => navigate("/")}
        >
          Go to Login
        </button>
      </div>
    </>
  );
};

export default RegisterFormInput;
