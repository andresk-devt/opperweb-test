import TimeZone from "./TimeZone"
import Login from "./Login"
import Register from "./Register"

const repositories = {
  login: Login,
  timezone: TimeZone,
  register: Register
}

export default {
  service: (name) => repositories[name],
}