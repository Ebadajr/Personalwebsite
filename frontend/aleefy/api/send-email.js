import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    const {
      name,
      email,
      phone,
      weight,
      gender,
      age,
      bodyFat,
      calories,
      TDE,
      protein,
      carbs,
      fats,
      height,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ebada.jr@gmail.com",
        pass: "fhst viyu ldpe ndlq",
      },
    });

    const mailOptions = {
      from: "ebada.jr@gmail.com",
      to: "omar.hazem.khayal@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
      Client ${name} has submitted the contact form with the following details:
        
        Email: ${email}
        Phone: ${phone}
        Weight: ${weight} kg
        Gender: ${gender}
        Age: ${age}
        Height: ${height}
        Body Fat: ${bodyFat}
        needed calories: ${calories}
        TDE: ${TDE}
        Protein: ${protein}
        Carbs: ${carbs}
        Fats: ${fats}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.log("a7a neek");
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
