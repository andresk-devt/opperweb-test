import Login from "./Login"
import TimeZone from "./TimeZone"

const repositories = {
  login: Login,
  timezone: TimeZone
}

export default {
  service: (name) => repositories[name],
}