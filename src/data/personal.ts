export interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  //master: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  profileImage: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Huỳnh Như",
  title: "Quality Control Engineer",
  university: "Posts And Telecommunication Institute Of Technology In HCM City",
  //master: "Master of Software Engineering - FPT University",
  email: "caohuynhnhu30051997@gmail.com",
  phone: "+84 354715794",
  location: "TP Ho Chi Minh, Viet Nam",
  bio: "I hope to become a talented and professional Quality Control (Senior) in the next year. With the knowledges and experiences in the old companies I hope to take more the challenges, advantages of the test skills. Handle the requirements at work well, from there, bring the best products to customers, contribute to the development of the company.",
  profileImage: "images/avatar.jpg",
  socialLinks: {
    github: "https://github.com/caohuynhnhu",
    linkedin: "https://www.linkedin.com/in/caohuynhnhu30597",
    twitter: "https://twitter.com/404"
  }
};