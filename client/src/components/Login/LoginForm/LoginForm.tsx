import LoginFormInput from "../LoginFormInput/LoginFormInput";

const LoginForm = () => {
  return (
    <>
      <div className="md:p-12 md:mx-6">
        <div className="text-center">
          <img
            className="mx-auto w-48"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
          />
          <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
            We are The Lotus Team
          </h4>
        </div>
        <form>
          <p className="mb-4">Please login to your account</p>
          <LoginFormInput />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
