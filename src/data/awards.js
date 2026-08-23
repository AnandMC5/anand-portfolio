import internship1 from "../assets/awards/ANAND M C(WEB INTERNSHIP CERTIFICATE 1).pdf";
import internship2 from "../assets/awards/ANAND M C(WEB INTERNSHIP CERTIFICATE 2).pdf";
import ieeeExpo from "../assets/awards/IEEE_Project_Expo.pdf";
import phase1 from "../assets/awards/Kudos_Kittos_Award_phase1(Tecnotree).pdf";
import phase2 from "../assets/awards/Kudos_Kittos_Award_phase2(Tecnotree).pdf";
import teamAward from "../assets/awards/Team_Award.pdf";

export const awards = [
  {
    id: 1,
    title: "MTNC Phase 1 – Non-GSM Full Go-Live",
    category: "Project Certification",
    organization: "Tecnotree",
    description:
      "Recognition for successful contribution to the MTNC Phase 1 Non-GSM Full Go-Live.",
    file: phase1,
    type: "pdf",
  },
  {
    id: 2,
    title: "MTNC Phase 2 – GSM Full Go-Live",
    category: "Project Certification",
    organization: "Tecnotree",
    description:
      "Recognition for successful contribution to the MTNC Phase 2 GSM Full Go-Live.",
    file: phase2,
    type: "pdf",
  },
  {
    id: 3,
    title: "Alpha Team Award",
    category: "Award",
    organization: "Tecnotree",
    description:
      "Award for outstanding performance, dedication, and valuable contribution.",
    file: teamAward,
    type: "pdf",
  },
  {
    id: 4,
    title: "Web Development Internship",
    category: "Internship",
    organization: "Web Development",
    description:
      "Certificate of internship completion in web development.",
    file: internship1,
    type: "pdf",
  },
  {
    id: 5,
    title: "Web Development Internship",
    category: "Internship",
    organization: "Web Development",
    description:
      "Certificate of internship completion in web development.",
    file: internship2,
    type: "pdf",
  },
  {
    id: 6,
    title: "IEEE Project EXPO – 2023",
    category: "Project Participation",
    organization: "IEEE",
    description:
      "Certificate of participation in the 7th National Level IEEE Project EXPO – 2023.",
    file: ieeeExpo,
    type: "pdf",
  },
];