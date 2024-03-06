// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import Techstack from "../model/techstackModel.js";

export const createtechstack = async (req, res) => {
  try {
    const techstackData = new Techstack(req.body);
    if (!techstackData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedtechstack = await techstackData.save();
    await sendEmail(
      "Project Techstack Added",
      "A new Project Techstack is created",
      req.body
    );
    res.status(200).json({ msg: "Project Techstack created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const gettechstack = async (req, res) => {
  try {
    const techstackData = await Techstack.find();
    if (!techstackData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(techstackData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnetechstack = async (req, res) => {
  try {
    const id = req.params.id;
    const techstackExist = await Techstack.findById(id);
    if (!techstackExist) {
      return res.status(404).json({ msg: "Project techstack not found" });
    }
    res.status(200).json(techstackExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedtechstack = async (req, res) => {
  try {
    const id = req.params.id;
    const techstackExist = await Techstack.findById(id);
    if (!techstackExist) {
      return res.status(401).json({ msg: "Project Techstack not found" });
    }
    const updatedtechstack = await Techstack.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail(
      "Project Techstack Updated",
      "Project Techstack has been updated!",
      updatedtechstack
    );

    res.status(200).json({ msg: "Project Techstack  Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletetechstack = async (req, res) => {
  try {
    const id = req.params.id;
    const techstackExist = await Techstack.findById(id);
    if (!techstackExist) {
      return res.status(404).json({ msg: "Project Techstack not found!" });
    }
    await Techstack.findByIdAndDelete(id);
    await sendEmail(
      "Project Techstack Deleted",
      "Project Techstack was deleted",
      techstackExist
    );

    res.status(200).json({ msg: "Project Techstack deleted!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

// export const downlaodbudget = async (req, res) => {
//   const url = "http://localhost:4000/getbudget";

//   try {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url, { waitUntil: "networkidle2" });
//     const pdfBuffer = await page.pdf({ format: "A4" });

//     await browser.close();

//     res.setHeader("Content-Type", "application/pdf");
//     res.setHeader(
//       "Content-Disposition",
//       "attachment; filename=auditreport.pdf"
//     );
//     res.send(pdfBuffer);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("An error occurred during PDF conversion.");
//   }
// };

const sendEmail = async (subject, text, data) => {
  try {
    const info = await transporter.sendMail({
      from: "fortestingcrud123@gmail.com",
      to: "pravinfriends12@gmail.com",
      subject: subject,
      text: `Hello [Stakeholder Name],

      Please note that Techstack has been updated and here is the summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
