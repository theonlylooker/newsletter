import { BgMobile } from "../../assets";
import {
  Button,
  Header,
  InputText,
  ListItem,
  Paragraph,
} from "../../components";

export const NewsletterForm = () => {
  return (
    <div>
      <BgMobile />
      <div className="pt-10 px-5 flex flex-col gap-5">
        <Header size="lg">Stay Updated!</Header>
        <Paragraph>
          Join 60,000+ product managers receiving monthly updates on:
        </Paragraph>
        <ul>
          <ListItem>Product discovery and building what matters </ListItem>
          <ListItem>Measuring to ensure updates are a success </ListItem>
          <ListItem>And much more! </ListItem>
        </ul>
        <form className="pt-5 flex flex-col gap-5" action="">
          <InputText id="email">Email address</InputText>
          <Button size="large">Subscribe to monthly newsletter</Button>
        </form>
      </div>
    </div>
  );
};
