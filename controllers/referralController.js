const { createReferral } = require("../services/referral.service");
const { sendReferralEmail } = require("../services/email.service");

const handleCreateReferral = async (req, res) => {
  try {
    const { referrerName, referrerEmail, refereeName, refereeEmail, course } =
      req.body;

    if (
      !referrerName ||
      !referrerEmail ||
      !refereeName ||
      !refereeEmail ||
      !course
    ) {
      return res.status(400).json({ error: "Please enter all the fields" });
    }

    // Send referral email asynchronously
    sendReferralEmail(refereeName, refereeEmail, referrerName, course);

    // Create referral in database
    const newReferral = await createReferral(
      referrerName,
      referrerEmail,
      refereeName,
      refereeEmail,
      course
    );

    res.status(201).json(newReferral);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to create referral and send email" });
  }
};

module.exports = {
  handleCreateReferral,
};
