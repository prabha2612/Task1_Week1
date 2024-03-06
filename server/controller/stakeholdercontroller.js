// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import Stakeholders from "../model/stakeholdersmodel.js";

export const createstakeholder = async (req, res) => {
  try {
    const stakeholderData = new Stakeholders(req.body);
    if (!stakeholderData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedstakeholder = await stakeholderData.save();
    await sendEmail(
      "Stakeholder Created",
      "A new Stakeholder is created",
      req.body
    );
    res.status(200).json({ msg: "Stakeholder created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getstakeholder = async (req, res) => {
  try {
    const stakeholderData = await Stakeholders.find();
    if (!stakeholderData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(stakeholderData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnestakeholder = async (req, res) => {
  try {
    const id = req.params.id;
    const stakeholderExist = await Stakeholders.findById(id);
    if (!stakeholderExist) {
      return res.status(404).json({ msg: "Stakeholder not found" });
    }
    res.status(200).json(stakeholderExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedstakeholder = async (req, res) => {
  try {
    const id = req.params.id;
    const stakeholderExist = await Stakeholders.findById(id);
    if (!stakeholderExist) {
      return res.status(401).json({ msg: "Stakeholder not found" });
    }
    const updatedstakeholder = await projectScope.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail(
      "Stakeholder Updated",
      "Stakeholder has been updated!",
      updatedstakeholder
    );

    res.status(200).json({ msg: "Stakeholder Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletestakeholder = async (req, res) => {
  try {
    const id = req.params.id;
    const stakeholderExist = await Stakeholders.findById(id);
    if (!stakeholderExist) {
      return res.status(404).json({ msg: "Stakeholder not found!" });
    }
    await projectScope.findByIdAndDelete(id);
    await sendEmail(
      "Stakeholder Deleted",
      "Stakeholder was deleted",
      stakeholderExist
    );

    res.status(200).json({ msg: "Stakeholder deleted!" });
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

      Please note that Stakeholder has been added and here is the summary:
      
      Stakeholder Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
