import { useNavigate } from "react-router-dom";
import desktop from "../../assets/illustration-sign-up-desktop.svg";
import mobile from "../../assets/illustration-sign-up-mobile.svg";
import {
  Button,
  Header,
  InputText,
  ListItem,
  Paragraph,
} from "../../components";
export const NewsletterForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/success", { state: { email: "soy un email via state" } });
  };

  return (
    <div className="flex flex-col bg-white m-auto max-w-3xl h-screen sm:flex-row-reverse sm:items-center sm:h-min sm:p-4 sm:rounded-lg">
      <picture className="mx-auto">
        <source srcSet={desktop} media="(min-width:640px)" />
        <img src={mobile} alt="heroImage" />
      </picture>
      <div className="pt-10 px-5 flex flex-col gap-5">
        <Header size="lg">Stay Updated!</Header>
        <Paragraph>
          Join 60,000+ product managers receiving monthly updates on:
        </Paragraph>
        <ul className="flex flex-col sm:gap-2">
          <ListItem>Product discovery and building what matters </ListItem>
          <ListItem>Measuring to ensure updates are a success </ListItem>
          <ListItem>And much more! </ListItem>
        </ul>
        <form className="pt-5 flex flex-col gap-5 " onSubmit={handleSubmit}>
          <InputText id="email">Email address</InputText>
          <Button size="large">Subscribe to monthly newsletter</Button>
        </form>
      </div>
    </div>
  );
};
