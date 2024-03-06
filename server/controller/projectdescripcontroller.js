// import puppeteer from "puppeteer";
import transporter from "../emailservice/emailtransport.js";
import ProjectDescription from "../model/projectDescription.js";

export const createdescription = async (req, res) => {
  try {
    const descriptionData = new ProjectDescription(req.body);
    if (!descriptionData) {
      return res.status(404).json({ msg: "Data not found!" });
    }
    const saveddescription = await descriptionData.save();
    await sendEmail("Project Description Created", "A new Project Description is created", req.body);
    res.status(200).json({ msg: "Project Description created successfully" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getdescription = async (req, res) => {
  try {
    const descriptionData = await ProjectDescription.find();
    if (!descriptionData) {
      return res.status(404).json({ msg: "Data not found" });
    }
    res.status(200).json(descriptionData);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const getOnedescription = async (req, res) => {
  try {
    const id = req.params.id;
    const descriptionExist = await ProjectDescription.findById(id);
    if (!descriptionExist) {
      return res.status(404).json({ msg: "Project Description not found" });
    }
    res.status(200).json(descriptionExist);
  } catch (error) {
    res.status(500).json({error: error});
  }
}

export const updateddescription = async (req, res) => {
  try {
    const id = req.params.id;
    const descriptionExist = await ProjectDescription.findById(id);
    if (!descriptionExist) {
      return res.status(401).json({ msg: "Project Description not found" });
    }
    const updateddescription = await ProjectDescription.findByIdAndUpdate(id, req.body, {new: true});
    await sendEmail(
      "Project Description Updated",
      "Project Description has been updated!",
      updateddescription
    );

    res.status(200).json({ msg: "Project Description Updated!" });
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

export const deletedescription = async (req, res) => {
  try {
    const id = req.params.id;
    const descriptionExist = await ProjectDescription.findById(id);
    if (!descriptionExist) {
      return res.status(404).json({ msg: "Project Description not found!" });
    }
    await ProjectDescription.findByIdAndDelete(id);
    await sendEmail("Project Description Deleted", "Project Description was deleted", descriptionExist);

    res.status(200).json({ msg: "Project Description deleted!" });
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

      Please note that Project Description has been completed and here is the Version summary:
      
      Budget Data:
      ${JSON.stringify(data, null, 2)}
      
      Thanks and Regards,
      Promact Infotech Pvt Ltd`,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};
