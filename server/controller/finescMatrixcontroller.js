// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import FinescMatrix from "../model/finescMatrix.js";

export const createfinescmatrix = async (req, res) => {
  try {
    const FinescmatrixData = new FinescMatrix(req.body);
    if (!FinescmatrixData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedFinescmatrix = await FinescmatrixData.save();
    await sendEmail(
      "Financial Escalation Matrix is Created",
      "A new Financial Escalation Matrix is created",
      req.body
    );
    res
      .status(200)
      .json({ msg: "Financial Escalation Matrix created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getfinescmatrix = async (req, res) => {
  try {
    const finescmatrixData = await FinescMatrix.find();
    if (!finescmatrixData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(finescmatrixData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnefinescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const FinescmatrixExist = await FinescMatrix.findById(id);
    if (!FinescmatrixExist) {
      return res
        .status(404)
        .json({ msg: "Financial Escalation Matrix not found" });
    }
    res.status(200).json(FinescmatrixExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedfinescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const FinescmatrixExist = await FinescMatrix.findById(id);
    if (!FinescmatrixExist) {
      return res
        .status(401)
        .json({ msg: "Financial Escalation Matrix not found" });
    }
    const updatedFinescmatrix = await FinescMatrix.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    await sendEmail(
      "Financial Escalation Matrix Updated",
      "Financial Escalation Matrix has been updated!",
      updatedFinescmatrix
    );

    res.status(200).json({ msg: "Financial Escalation Matrix  Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletefinescmatrix = async (req, res) => {
  try {
    const id = req.params.id;
    const FinescmatrixExist = await FinescMatrix.findById(id);
    if (!FinescmatrixExist) {
      return res
        .status(404)
        .json({ msg: "Financial Escalation Matrix not found!" });
    }
    await OpescMatrix.findByIdAndDelete(id);
    await sendEmail(
      "Financial Escalation Matrix Deleted",
      "Financial Escalation Matrix was deleted",
      FinescmatrixExist
    );

    res.status(200).json({ msg: "Financial Escalation Matrix deleted!" });
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

      Please note that Financial Escalation Matrix has been updated and here is the summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
