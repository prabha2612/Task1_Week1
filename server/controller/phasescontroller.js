// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import Phases from "../model/phasesmodal.js";

export const createphase = async (req, res) => {
  try {
    const phaseData = new Phases(req.body);
    if (!phaseData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedphase = await phaseData.save();
    await sendEmail(
      "Phase/Miletsone Created",
      "A new Phase/Miletsone is created",
      req.body
    );
    res.status(200).json({ msg: "Phase/Miletsone created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getphase = async (req, res) => {
  try {
    const phaseData = await Phases.find();
    if (!phaseData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(phaseData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnephase = async (req, res) => {
  try {
    const id = req.params.id;
    const phaseExist = await Phases.findById(id);
    if (!phaseExist) {
      return res.status(404).json({ msg: "Phase not found" });
    }
    res.status(200).json(phaseExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedphase = async (req, res) => {
  try {
    const id = req.params.id;
    const phaseExist = await Phases.findById(id);
    if (!phaseExist) {
      return res.status(401).json({ msg: "Phase not found" });
    }
    const updatedphase = await Phases.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail(
      "Phase Updated",
      "Phase has been updated!",
      updatedphase
    );

    res.status(200).json({ msg: "Phase Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletephase = async (req, res) => {
  try {
    const id = req.params.id;
    const phaseExist = await Phases.findById(id);
    if (!phaseExist) {
      return res.status(404).json({ msg: "Phase not found!" });
    }
    await Phases.findByIdAndDelete(id);
    await sendEmail("Phase Deleted", "Phase was deleted", phaseExist);

    res.status(200).json({ msg: "Phase deleted!" });
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

      Please note that Phases/Milestones have been added and here is the summary:
      
      Phases Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
