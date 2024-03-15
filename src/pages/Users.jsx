import Heading from "../ui/Heading";
import SignupForom from "../features/authentication/SignupForm";

function NewUsers() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForom />;
    </>
  );
}

export default NewUsers;
