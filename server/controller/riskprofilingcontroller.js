// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import Riskprofiling from "../model/riskprofiling.js";

export const createriskprofile = async (req, res) => {
  try {
    const riskprofileData = new Riskprofiling(req.body);
    if (!riskprofileData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedscope = await riskprofileData.save();
    await sendEmail(
      "Risk Profile Created",
      "A new Risk Profile is created",
      req.body
    );
    res.status(200).json({ msg: "Risk Profile created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getriskprofile = async (req, res) => {
  try {
    const riskprofileData = await Riskprofiling.find();
    if (!riskprofileData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(riskprofileData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOneriskprofile = async (req, res) => {
  try {
    const id = req.params.id;
    const riskprofileExist = await Riskprofiling.findById(id);
    if (!riskprofileExist) {
      return res.status(404).json({ msg: "Risk Profile not found" });
    }
    res.status(200).json(riskprofileExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedriskprofile = async (req, res) => {
  try {
    const id = req.params.id;
    const riskprofileExist = await Riskprofiling.findById(id);
    if (!riskprofileExist) {
      return res.status(401).json({ msg: "Risk Profile not found" });
    }
    const updatedriskprofile = await Riskprofiling.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    await sendEmail(
      "Risk Profile Updated",
      "Risk Profile has been updated!",
      updatedriskprofile
    );

    res.status(200).json({ msg: "Risk Profile Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deleteriskprofile = async (req, res) => {
  try {
    const id = req.params.id;
    const riskprofileExist = await Riskprofiling.findById(id);
    if (!riskprofileExist) {
      return res.status(404).json({ msg: "Risk Profile not found!" });
    }
    await Riskprofiling.findByIdAndDelete(id);
    await sendEmail(
      "Risk Profile Deleted",
      "Risk Profile was deleted",
      riskprofileExist
    );

    res.status(200).json({ msg: "Risk Profile deleted!" });
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

      Please note that Risk Profile has been added and here is the summary:
      
      Risk Profile Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};