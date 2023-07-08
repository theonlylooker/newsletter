import { Check } from "../../assets";
import { Button, Header, Paragraph } from "../../components";

export const NewsletterSuccess = () => {
  return (
    <div className="bg-white h-screen px-8 py-12 mx-auto flex flex-col justify-between sm:h-fit max-w-lg sm:rounded-3xl sm:gap-5">
      <div className="flex flex-col gap-7 mt-32 sm:mt-0">
        <Check height={70} width={70} />
        <div className="flex flex-col gap-5 max-w-[300px]">
          <Header size="lg">Thanks for subscribing!</Header>
          <Paragraph>
            A confirmation email has been sent to email. Please open it and
            click the button inside to confirm your subscription
          </Paragraph>
        </div>
      </div>
      <Button size="large">Dismiss message</Button>
    </div>
  );
};
