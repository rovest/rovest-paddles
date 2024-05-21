import { SignUp } from "@clerk/nextjs";

import Container from "@/layouts/Container";

export default function Page() {
  return (
    <Container type="main" verticalAlign="middle" className="justify-center">
      <SignUp path="/account/sign-up" />
    </Container>
  );
}
