// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import SprintWise from "../model/sprintwisemodel.js";

export const createsprint = async (req, res) => {
  try {
    const sprintData = new SprintWise(req.body);
    if (!sprintData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedscope = await sprintData.save();
    await sendEmail("Sprint Created", "A new Sprint is created", req.body);
    res.status(200).json({ msg: "Sprint created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getsprint = async (req, res) => {
  try {
    const sprintData = await SprintWise.find();
    if (!sprintData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(sprintData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnesprint = async (req, res) => {
  try {
    const id = req.params.id;
    const sprintExist = await SprintWise.findById(id);
    if (!sprintExist) {
      return res.status(404).json({ msg: "Sprint not found" });
    }
    res.status(200).json(sprintExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedsprint = async (req, res) => {
  try {
    const id = req.params.id;
    const sprintExist = await SprintWise.findById(id);
    if (!sprintExist) {
      return res.status(401).json({ msg: "Sprint not found" });
    }
    const updatedsprint = await SprintWise.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail(
      "Sprint Updated",
      "Sprint has been updated!",
      updatedsprint
    );

    res.status(200).json({ msg: "Sprint Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletesprint = async (req, res) => {
  try {
    const id = req.params.id;
    const sprintExist = await SprintWise.findById(id);
    if (!sprintExist) {
      return res.status(404).json({ msg: "Sprint not found!" });
    }
    await SprintWise.findByIdAndDelete(id);
    await sendEmail("Sprint Deleted", "Sprint was deleted", sprintExist);

    res.status(200).json({ msg: "Sprint deleted!" });
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

      Please note that Sprint wise detail has been added and here is the summary:
      
      Sprint Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};