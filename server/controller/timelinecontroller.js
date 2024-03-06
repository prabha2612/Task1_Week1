// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import Timeline from "../model/timelinemodel.js";

export const createtimeline = async (req, res) => {
  try {
    const timelineData = new Timeline(req.body);
    if (!timelineData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedtimeline = await timelineData.save();
    await sendEmail(
      "Timeline is updated",
      "A Timeline has been updated",
      req.body
    );
    res.status(200).json({ msg: "Timeline updated successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const gettimeline = async (req, res) => {
  try {
    const timelineData = await Timeline.find();
    if (!timelineData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(timelineData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnetimeline = async (req, res) => {
  try {
    const id = req.params.id;
    const timelineExist = await Timeline.findById(id);
    if (!timelineExist) {
      return res.status(404).json({ msg: "Timeline not found" });
    }
    res.status(200).json(timelineExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedtimeline = async (req, res) => {
  try {
    const id = req.params.id;
    const timelineExist = await Timeline.findById(id);
    if (!timelineExist) {
      return res.status(401).json({ msg: "Timeline not found" });
    }
    const updatedphase = await Timeline.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await sendEmail("Timeline Updated", "Timeline has been updated!", updatedtimeline);

    res.status(200).json({ msg: "Timeline Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletetimeline = async (req, res) => {
  try {
    const id = req.params.id;
    const timelineExist = await Timeline.findById(id);
    if (!timelineExist) {
      return res.status(404).json({ msg: "Timeline not found!" });
    }
    await Phases.findByIdAndDelete(id);
    await sendEmail("Timeline Deleted", "Timeline was deleted", timelineExist);

    res.status(200).json({ msg: "Timeline deleted!" });
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

      Please note that Timeline has been added and here is the summary:
      
      Timeline Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
