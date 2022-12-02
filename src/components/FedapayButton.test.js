import { render, fireEvent } from "@testing-library/react";
import FedapayButton from "./FedapayButton"

describe("Check Cart product render", () => {
    it("expect to have cart product", () => {
        const { getByTestId } = render(() => <FedapayButton />)

    })
})