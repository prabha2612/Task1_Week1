// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import TechescMatrix from "../model/techescMatrix.js";

export const createtechescmatrix = async (req, res) => {
  try {
    const techescmatrixData = new TechescMatrix(req.body);
    if (!techescmatrixData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedtechescmatrix = await techescmatrixData.save();
    await sendEmail(
      "Technical Escalation Matrix is Created",
      "A new Technical Escalation Matrix is created",
      req.body
    );
    res
      .status(200)
      .json({ msg: "Technical Escalation Matrix created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const gettechescmatrix = async (req, res) => {
  try {
    const techescmatrixData = await TechescMatrix.find();
    if (!techescmatrixData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(techescmatrixData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnetechescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const techescmatrixExist = await TechescMatrix.findById(id);
    if (!techescmatrixExist) {
      return res
        .status(404)
        .json({ msg: "Technical Escalation Matrix not found" });
    }
    res.status(200).json(techescmatrixExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedtechescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const techescmatrixExist = await TechescMatrix.findById(id);
    if (!techescmatrixExist) {
      return res
        .status(401)
        .json({ msg: "Financial Escalation Matrix not found" });
    }Technical;
    const updatedtechescmatrix = await TechescMatrix.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    await sendEmail(
      "Technical Escalation Matrix Updated",
      "Technical Escalation Matrix has been updated!",
      updatedtechescmatrix
    );

    res.status(200).json({ msg: "Technical Escalation Matrix  Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletetechescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const techescmatrixExist = await TechescMatrix.findById(id);
    if (!techescmatrixExist) {
      return res
        .status(404)
        .json({ msg: "Technical Escalation Matrix not found!" });
    }
    await OpescMatrix.findByIdAndDelete(id);
    await sendEmail(
      "Technical Escalation Matrix Deleted",
      "Technical Escalation Matrix was deleted",
      techescmatrixExist
    );

    res.status(200).json({ msg: "Technical Escalation Matrix deleted!" });
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

      Please note that Technical Escalation Matrix has been updated and here is the summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
