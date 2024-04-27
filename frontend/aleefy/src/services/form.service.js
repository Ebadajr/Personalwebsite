import http from "./http-common";

class formService {
  newForm(book) {
    console.log(book);

    return http.post("/newForm", book);
  }
  newContact(form) {
    console.log("hena");
    return http.post("/addContact", form);
  }
  newDonation(form) {
    return http.post("/addDonation", form);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new formService();
