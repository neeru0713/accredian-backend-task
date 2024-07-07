const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createReferral = async (
  referrerName,
  referrerEmail,
  refereeName,
  refereeEmail,
  course
) => {
  try {
    const newReferral = await prisma.referral.create({
      data: {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
        course,
      },
    });
    return newReferral;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createReferral,
};
