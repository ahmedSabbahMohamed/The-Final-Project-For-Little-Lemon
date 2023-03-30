import { render, screen, within } from "@testing-library/react";
import React from "react";
import BookingForm from "./Components/BookingForm";
import user from "@testing-library/user-event";

describe("BookingForm", () => {
    const onSubmit = jest.fn();
    beforeEach(() => {
        onSubmit.mockClear();
        render(<BookingForm onSubmit = {onSubmit} />);
    });
    it("onSubmit is callled when all fields pass validation", () => {
          user.type(getName(), "ahmed");
          user.type(getEmail(), "ahmed@gamil.com");
          user.type(getPhone(), "1234567890");
          user.type(getGuests(), "2");
          user.selectOptions(getOccasion(), within(getOccasion()).getByRole('option', {name: 'Birthday'}));
          const dropdown = screen.getByRole('combobox', {
            name: /choose time: you didn't select a time/i
          });
          user.selectOptions(dropdown, within(dropdown).getByRole('option', {name: '17:00'}));
          user.click(screen.getByRole('button', {name: /on click/i}));

    });
});

function getName() {
    return screen.getByRole('textbox', {
        name: /name: name isn't valid/i
      });
}

function getEmail () {
    return screen.getByRole('textbox', {
        name: /email: email isn't valid/i
      });
}

function getPhone () {
    return screen.getByRole('textbox', {
        name: /phone: phone isn't valid/i
      });
}

function getGuests () {
    return screen.getByRole('textbox', {
        name: /number of guests: there is no guests/i
      });
}

function getOccasion () {
    return screen.getByRole('combobox', {
        name: /occasion: you didn't select a occasion/i
      });
}