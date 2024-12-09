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
      height,
      age,
      bodyFat,
      Goal,
      selectedPlan,
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
      subject: `New signup from ${name}`,
      text: `
      Client ${name} has submitted the signup form for the plan ${selectedPlan.title} with these details:
        
        Email: ${email}
        Phone: ${phone}
        Weight: ${weight} kg
        Gender: ${gender}
        Height: ${height} cm
        Age: ${age}
        Body Fat: ${bodyFat}
        goal: ${Goal}
      `,
    };

    const secondMailOptions = {
      from: "ebada.jr@gmail.com",
      to: `${email}`, // Second recipient
      subject: `Hi ${name},
            Thank you for signing up to our ${selectedPlan.title} `,
      text: `
            You entered the following details: 
            
              Name: ${name}
              Email: ${email}
              Phone: ${phone}
              Selected Plan: ${selectedPlan.title}
              Weight: ${weight} kg
              Gender: ${gender}
              Age: ${age}
              Body Fat: ${bodyFat}
              Goal: ${Goal}
            
            We recieved your information and will be working on constructing the plan that best suits you and your goal!
    
            If you didn't pay yet, make sure you do in order to start your journey now!
              
            KHAYALERGY team,
            `,
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(secondMailOptions);

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
