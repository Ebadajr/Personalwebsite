import http from "./http-common";

class UserService {
  login(user) {
    return http.post("/login", user);
  }
  createUser(user) {
    return http.post("/add", user);
  }
  createClinic(user) {
    return http.post("/addClinic", { id: user });
  }
  createClinicRequest(user) {
    return http.post("/addClinicRequest", user);
  }
  createShelterRequest(user) {
    return http.post("/addShelterRequest", user);
  }
  createShelter(user) {
    return http.post("/addShelter", { id: user });
  }

  logout() {
    return http.get("/logout");
  }
  getName() {
    return http.get("/getName");
  }
  adoptBella(body) {
    return http.post("/newPet", body);
  }
  adoptMax(body) {
    return http.post("/newPet", body);
  }
  adoptDaisy(body) {
    return http.post("/newPet", body);
  }
  adoptOliver(body) {
    return http.post("/newPet", body);
  }
  adoptLuna(body) {
    return http.post("/newPet", body);
  }
  adoptCharlie(body) {
    return http.post("/newPet", body);
  }
  myPets() {
    return http.get("/myPet");
  }
  addPet(form) {
    return http.post("/newPet", form);
  }
  update(form) {
    return http.post("/updateUser", form);
  }
  getMobile() {
    return http.get("/getMobile");
  }
  getBlogs() {
    return http.get("/getblogs");
  }
  addBlogs(form) {
    return http.post("/addblog", form);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new UserService();
