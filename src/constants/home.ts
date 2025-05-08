interface Student {
  imageUrl: string;
  NamaSekolah:string;
  JurusanMu:string;
  Location:string;
  startStudent:string;
}

interface CareerList {
  imageUrl: string;
  role: string;
  companyName: string;
  location: string;
  startWork: string;
  ariaLabel: string;
}


export const STUDENT_LIST: Student[] = [
  {
    imageUrl:
      "",
      NamaSekolah:"Smk Negeri 1 Tampaksiring",
      JurusanMu:"DESAIN KOMUNIKASI VISUAL",
      Location:"Sanding,Tampaksiring, Gianyar, Bali",
      startStudent:" June 2022",
  },
];

export const CAREERS_LIST: CareerList[] = [
  {
    imageUrl:
      "",
    role: "Frontend Developer",
    companyName: "Blue Creative",
    location: "Monky Forest Ubud",
    startWork: "October 2024",
    ariaLabel: "Visit the Teknologi Digital Company Profile",
  },
];


