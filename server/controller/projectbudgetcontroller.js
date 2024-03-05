import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import ProjectBudget from "../model/projectBudget.js";

export const createbudget = async (req, res) => {
  try {
    const budgetData = new ProjectBudget(req.body);
    if (!budgetData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const savedBudget = await budgetData.save();
    await sendEmail("Project Budget Created", "A new Project Budget is created", req.body);
    res.status(200).json({ msg: "Project Budget created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getbudget = async (req, res) => {
  try {
    const budgetData = await ProjectBudget.find();
    if (!budgetData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(budgetData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnebudget = async (req, res) => {
  try {
    const id = req.params.id;
    const budgetExist = await ProjectBudget.findById(id);
    if (!budgetExist) {
      return res.status(404).json({ msg: "Project Budget not found" });
    }
    res.status(200).json(budgetExist);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export const updatedbudget = async (req, res) => {
  try {
    const id = req.params.id;
    const budgetExist = await ProjectBudget.findById(id);
    if (!budgetExist) {
      return res.status(401).json({ msg: "Project Budget not found" });
    }
    const updatedAudit = await ProjectBudget.findByIdAndUpdate(id, req.body, {new: true});
    await sendEmail(
      "Budget Updated",
      "A Project Budget has been updated!",
      updatedbudget
    );

    res.status(200).json({ msg: "Project Budget Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletebudget = async (req, res) => {
  try {
    const id = req.params.id;
    const budgetExist = await ProjectBudget.findById(id);
    if (!budgetExist) {
      return res.status(404).json({ msg: "Project Budget not found!" });
    }
    await ProjectBudget.findByIdAndDelete(id);
    await sendEmail("Project Budget Deleted", "A Project Budget was deleted", budgetExist);

    res.status(200).json({ msg: "Project Budget deleted!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const downlaodbudget = async (req, res) => {
  const url = "http://localhost:4000/getbudget";

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
      text: `Hello [Stakeholder Name],

      Please note that Project Budget has been completed and here is the Budget summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
