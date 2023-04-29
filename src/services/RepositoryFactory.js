import TimeZone from "./TimeZone"
import Login from "./Login"
import Register from "./Register"
import Me from "./Me"

const repositories = {
  login: Login,
  timezone: TimeZone,
  register: Register,
  me: Me
}

export default {
  service: (name) => repositories[name],
}