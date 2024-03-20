import Audit from "../model/auditModel.js";
import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";

export const createaudit = async (req, res) => {
  try {
    const auditData = new Audit(req.body);
    if (!auditData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedAudit = await auditData.save();
    await sendEmail("Audit Created", "A new Audit is created", req.body);
    res.status(200).json({ msg: "Audit created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getaudit = async (req, res) => {
  try {
    const auditData = await Audit.find();
    if (!auditData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(auditData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOneaudit = async (req, res) => {
  try {
    const id = req.params.id;
    const auditExist = await Audit.findById(id);
    if (!auditExist) {
      return res.status(404).json({ msg: "Audit not found" });
    }
    res.status(200).json(auditExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateaudit = async (req, res) => {
  try {
    const id = req.params.id;
    const auditExist = await Audit.findById(id);
    if (!auditExist) {
      return res.status(401).json({ msg: "Audit not found" });
    }
    const updatedAudit = await Audit.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail(
      "Audit Updated",
      "An Audit has been updated!",
      updatedAudit
    );

    res.status(200).json({ msg: "Audit Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

// export const deleteaudit = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const auditExist = await Audit.findById(id);
//     if (!auditExist) {
//       return res.status(404).json({ msg: "Audit not found!" });
//     }
//     await Audit.findByIdAndDelete(id);
//     await sendEmail("Audit Deleted", "An Audit was deleted", auditExist);

//     res.status(200).json({ msg: "Audit deleted!" });
//   } catch (error) {
//     res.status(500).json({ Error: error });
//   }
// };

export const downlaod = async (req, res) => {
  const url = "http://localhost:4000/getaudit";

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=auditreport.pdf"
    );
    res.send(pdfBuffer);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred during PDF conversion.");
  }
};

const sendEmail = async (subject, text, data) => {
  try {
    const info = await transporter.sendMail({
      from: "fortestingcrud123@gmail.com",
      to: "pravinfriends12@gmail.com",
      subject: subject,
      text: `Hello ,

      Please note that audit has been completed and here is the audit summary:
      
      Audit Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
