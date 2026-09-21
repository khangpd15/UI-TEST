import { eyeIllustrations } from './eyeImages';

export const eyeProblems = [
  {
    id: 1,
    caseId: "blunt-trauma",
    title: "Mắt bị va đập",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    image: eyeIllustrations.bluntTrauma
  },
  {
    id: 2,
    caseId: "foreign-object",
    title: "Dị vật vào mắt",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    image: eyeIllustrations.foreignObject
  },
  {
    id: 3,
    caseId: "chemical-splash",
    title: "Hóa chất vào mắt",
    severity: "emergency",
    badgeText: "Cần xử lý ngay",
    image: eyeIllustrations.chemicalSplash
  },
  {
    id: 4,
    caseId: "red-eye",
    title: "Mắt đỏ + ghèn",
    severity: "warning",
    badgeText: "Cần được khám",
    image: eyeIllustrations.redEye
  },
  {
    id: 5,
    caseId: "blurry-vision",
    title: "Nhìn mờ",
    severity: "warning",
    badgeText: "Cần được khám",
    image: eyeIllustrations.blurryVision
  },
  {
    id: 6,
    caseId: "dry-fatigue",
    title: "Mắt khô / mỏi",
    severity: "safe",
    badgeText: "Chăm sóc tại nhà",
    image: eyeIllustrations.dryFatigueEye
  }
];
