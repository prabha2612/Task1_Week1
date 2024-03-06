// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import projectScope from "../model/ScopeModel.js";


export const createscope = async (req, res) => {
  try {
    const scopeData = new projectScope(req.body);
    if (!scopeData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedscope = await scopeData.save();
    await sendEmail(
      "Project Scope Created",
      "A new Project Scope is created",
      req.body
    );
    res.status(200).json({ msg: "Project Scope created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getscope = async (req, res) => {
  try {
    const scopeData = await projectScope.find();
    if (!scopeData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(scopeData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnescope = async (req, res) => {
  try {
    const id = req.params.id;
    const scopeExist = await projectScope.findById(id);
    if (!scopeExist) {
      return res.status(404).json({ msg: "Project scope not found" });
    }
    res.status(200).json(scopeExist);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updatedscope = async (req, res) => {
  try {
    const id = req.params.id;
    const scopeExist = await projectScope.findById(id);
    if (!scopeExist) {
      return res.status(401).json({ msg: "Project scope not found" });
    }
    const updatedscope = await projectScope.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    await sendEmail(
      "Project scope Updated",
      "Project scope has been updated!",
      updatedscope
    );

    res.status(200).json({ msg: "Project Scope Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletescope = async (req, res) => {
  try {
    const id = req.params.id;
    const scopeExist = await projectScope.findById(id);
    if (!scopeExist) {
      return res.status(404).json({ msg: "Project scope not found!" });
    }
    await projectScope.findByIdAndDelete(id);
    await sendEmail(
      "Project scope Deleted",
      "Project scope was deleted",
      scopeExist
    );

    res.status(200).json({ msg: "Project scope deleted!" });
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

      Please note that Project scope has been completed and here is the summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
