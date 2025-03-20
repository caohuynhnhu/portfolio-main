export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
}

export const awardsData: Award[] = [
  {
    id: 1,
    title: "Golden Key Students semester SU24",
    issuer: "FPT University - Master of Software Engineering",
    date: "2024",
    description: "Recognized for outstanding academic performance in the Master of Software Engineering program."
  },
  {
    id: 2,
    title: "Best performance Quarter 4/2023",
    issuer: "APOLLO TECHNOLOGICAL SOLUTIONS CO., LTD",
    date: "2023",
    description: "Awarded for exceptional performance and contributions to company projects during the fourth quarter of 2023."
  },
  {
    id: 3,
    title: "MVP Quarter 4/2022",
    issuer: "rakumo Co., Ltd",
    date: "2022",
    description: "Recognized as the Most Valuable Player for outstanding contributions and performance in the fourth quarter of 2022."
  }
];