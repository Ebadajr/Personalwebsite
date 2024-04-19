import http from "./http-common";

class formService {
  newForm(book) {
    console.log("here");

    return http.post("/newForm", book);
  }
  newContact(form) {
    console.log("hena");
    return http.post("/addContact", form);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new formService();
