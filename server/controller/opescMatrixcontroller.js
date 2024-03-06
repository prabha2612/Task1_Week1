// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import OpescMatrix from "../model/opescmatrix.js";

export const createopescmatrix = async (req, res) => {
  try {
    const opescmatrixData = new OpescMatrix(req.body);
    if (!opescmatrixData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedopescmatrix = await opescmatrixData.save();
    await sendEmail(
      "Operational Escalation Matrix is Created",
      "A new Operational Escalation Matrix is created",
      req.body
    );
    res
      .status(200)
      .json({ msg: "Operational Escalation Matrix created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getopescmatrix = async (req, res) => {
  try {
    const opescmatrixData = await OpescMatrix.find();
    if (!opescmatrixData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(opescmatrixData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOneopescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const opescmatrixExist = await OpescMatrix.findById(id);
    if (!opescmatrixExist) {
      return res
        .status(404)
        .json({ msg: "Operational Escalation Matrix not found" });
    }
    res.status(200).json(opescmatrixExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedopescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const opescmatrixExist = await OpescMatrix.findById(id);
    if (!opescmatrixExist) {
      return res
        .status(401)
        .json({ msg: "Operational Escalation Matrix not found" });
    }
    const updatedopescmatrix = await OpescMatrix.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail(
      "Operational Escalation Matrix Updated",
      "Operational Escalation Matrix has been updated!",
      updatedopescmatrix
    );

    res.status(200).json({ msg: "Operational Escalation Matrix  Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deleteopescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const opescmatrixExist = await OpescMatrix.findById(id);
    if (!opescmatrixExist) {
      return res
        .status(404)
        .json({ msg: "Operational Escalation Matrix not found!" });
    }
    await OpescMatrix.findByIdAndDelete(id);
    await sendEmail(
      "Operational Escalation Matrix Deleted",
      "Operational Escalation Matrix was deleted",
      opescmatrixExist
    );

    res.status(200).json({ msg: "Operational Escalation Matrix deleted!" });
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

      Please note that Operational Escalation Matrix has been updated and here is the summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
