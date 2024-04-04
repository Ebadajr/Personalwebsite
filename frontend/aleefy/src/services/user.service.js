import http from "./http-common";

class UserService {
  login(user) {
    
    return http.post("/login", user);
  }
  createUser(user){
    return http.post("/add", user);
  }

  logout() {
    return http.get("/logout");
  }

  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
