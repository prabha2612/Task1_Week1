// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import VersionHistory from "../model/versionHistoryModel.js";

export const createversion = async (req, res) => {
  try {
    const versionData = new VersionHistory(req.body);
    if (!versionData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedversion = await versionData.save();
    await sendEmail(
      "Version History Created",
      "A new Version is created",
      req.body
    );
    res.status(200).json({ msg: "Version History created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getversion = async (req, res) => {
  try {
    const versionData = await VersionHistory.find();
    if (!versionData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(versionData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOneversion = async (req, res) => {
  try {
    const id = req.params.id;
    const versionExist = await VersionHistory.findById(id);
    if (!versionExist) {
      return res.status(404).json({ msg: "Version History not found" });
    }
    res.status(200).json(versionExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedversion = async (req, res) => {
  try {
    const id = req.params.id;
    const versionExist = await VersionHistory.findById(id);
    if (!versionExist) {
      return res.status(401).json({ msg: "Version History not found" });
    }
    const updatedversion = await VersionHistory.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    await sendEmail(
      "Version History Updated",
      "A Version History has been updated!",
      updatedversion
    );

    res.status(200).json({ msg: "Version History Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deleteversion = async (req, res) => {
  try {
    const id = req.params.id;
    const versionExist = await VersionHistory.findById(id);
    if (!versionExist) {
      return res.status(404).json({ msg: "Version History not found!" });
    }
    await VersionHistory.findByIdAndDelete(id);
    await sendEmail(
      "Version History Deleted",
      "A Version History was deleted",
      versionExist
    );

    res.status(200).json({ msg: "Version History deleted!" });
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

      Please note that Version History has been completed and here is the Version summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
