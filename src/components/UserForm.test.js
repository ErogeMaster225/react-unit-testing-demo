import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserSettingsForm from "./UserSettingsForm";

test("must fill all field in user form", async () => {
  const user = {
    id: "t45AiwidW",
    uuid: "6383f84e-b511-44c5-a835-3ece1d781fa8",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    password: "$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW",
    email: "john@doe.com",
    phoneNumber: "625-316-9882",
    avatar: "https://cypress-realworld-app-svgs.s3.amazonaws.com/t45AiwidW.svg",
    defaultPrivacyLevel: "public",
    balance: 9593200,
    createdAt: "2019-08-27T23:47:05.637Z",
    modifiedAt: "2020-05-21T11:02:22.857Z",
  };
  render(<UserSettingsForm userProfile={user} updateUser={() => {}} />);

  expect(await screen.findByRole("button", { name: /save/i })).toBeEnabled();
  userEvent.clear(screen.getByPlaceholderText(/Email/i));

  expect(await screen.findByRole("button", { name: /save/i })).toBeDisabled();
  userEvent.type(screen.getByPlaceholderText(/Email/i), "johndoe@gmail.com");
  expect(await screen.findByRole("button", { name: /save/i })).toBeEnabled();
});
