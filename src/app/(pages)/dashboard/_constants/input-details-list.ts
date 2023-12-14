type TInputDetailProps = {
  label: string;
  id: string;
  placeholder: string;
  inputType: "Input" | "Textarea";
}


export const inputFieldDetails: TInputDetailProps[] = [
  {
    id: "name",
    inputType: "Input",
    label: "Enter your name",
    placeholder: "e.g. John Doe",
  },
  {
    id: "email",
    inputType: "Input",
    label: "Enter your email",
    placeholder: "e.g. johndoe1234@gmail.com",
  },
  {
    id: "bio",
    inputType: "Textarea",
    label: "Enter something about you",
    placeholder: "e.g. I'm a software engineer having 10+year of experience and.....",
  },
  {
    id: "githubLink",
    inputType: "Input",
    label: "Enter your GitHub Link",
    placeholder: "e.g. https://github.com/rohitmondal03",
  },
  {
    id: "linkedinLink",
    inputType: "Input",
    label: "Enter your LinkedIn Link",
    placeholder: "e.g. https://www.linkedin.com/in/rohit-mondal-61662a16b/",
  },
  {
    id: "twitterLink",
    inputType: "Input",
    label: "Enter your Twitter Link",
    placeholder: "e.g. https://twitter.com/RohitMo62534745",
  },
  {
    id: "portfolioLink",
    inputType: "Input",
    label: "Enter your Portfolio Link",
    placeholder: "e.g. https://portfolio-ten-virid-46.vercel.app/",
  }
]
