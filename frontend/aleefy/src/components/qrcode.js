import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import QRCode from "qrcode.react";

class QRCodeGenerator extends React.Component {
  render() {
    // Define the route URL you want to navigate to
    const petProfileRoute = "/home";
    // Generate the full URL of the component based on the current base URL
    const fullUrl = window.location.origin + petProfileRoute;

    return (
      <div>
        <h2>QR Code Generator</h2>
        <p>Scan the QR code to navigate to the pet profile:</p>
        {/* Display the QR code with the full URL as the value */}
        <QRCode value={fullUrl} />
        <p>Or you can click this link:</p>
        {/* Provide a link to navigate to the desired component */}
        <Link to={petProfileRoute}>Go to Pet Profile</Link>
      </div>
    );
  }
}

export default QRCodeGenerator;
