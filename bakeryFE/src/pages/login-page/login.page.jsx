

const Login = (props) => {

  return (
    <div className="login">
      <div className="container">
        <div className="login-inner">
          <h2>Пройдіть авторизацію</h2>
          <div className="login-form">
            <form action="">
              <label htmlFor="login">Логін</label>
              <input type="text" id="login" name="login" />
              <label htmlFor="password">Пароль</label>
              <input type="text" id="password" name="password" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;