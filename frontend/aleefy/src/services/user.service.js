import http from "./http-common";

class UserService {
  login(user) {
    
    return http.post("/login", user);
  }
  createUser(user){
    return http.post("/add", user);
  }
  createClinic(user){
    return http.post("/addClinic",user);
  }
  createShelter(user){
    return http.post("/addShelter",user);
  }

  logout() {
    return http.get("/logout");
  }
  getName() {
    return http.get("/getName");
  }

  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
