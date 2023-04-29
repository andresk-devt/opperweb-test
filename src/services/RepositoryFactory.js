import TimeZone from "./TimeZone"
import Login from "./Login"
import Register from "./Register"
import Me from "./Me"
import Categories from "./Categories"

const repositories = {
  login: Login,
  timezone: TimeZone,
  register: Register,
  me: Me,
  categories: Categories
}

export default {
  service: (name) => repositories[name],
}