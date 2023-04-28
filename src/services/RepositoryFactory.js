import Login from "./Login"

const repositories = {
  login: Login
}

export default {
  service: (name) => repositories[name],
}