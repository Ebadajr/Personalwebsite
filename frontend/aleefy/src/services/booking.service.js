import http from "./http-common";

class BookingService {
  newBooking(book){
    console.log('here');

    return http.post("/newBooking", book);
  }
  homeBooking(book){
    return http.post("/homeBooking", book);
  }

  
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new BookingService();
