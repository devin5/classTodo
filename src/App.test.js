import React from "react";
import { render } from "@testing-library/react";
// import '@testing-library/react/cleanup-after-each'
import App from "./App";

describe("renders learn react link", () => {
  it("renders without crashing", () => {
    render(<App />)
  })

it("todo", () => {
  const {getByText} = render(<App />)
  getByText(/todo app/i)
})
})

