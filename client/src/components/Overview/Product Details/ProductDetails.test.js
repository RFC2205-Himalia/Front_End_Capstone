import React from 'react';
import {render as rtlRender, act, fireEvent, waitFor, screen} from "@testing-library/react";
import ProductDetails from "./ProductDetails.jsx";
import { Provider } from 'react-redux';
import store from '../../../reducer.js'

const render = component => rtlRender(
<Provider store = {store}>
  {component}
</Provider>
)



describe("Product Details Component", () => {
  it("rendered product name", () => {
    const { getByTestId } = render(<ProductDetails />)
    const productName = getByTestId("productName")
    expect(productName).toBeInTheDocument;
  })

  it("rendered correct name", async () => {
      const { getByTestId } = render(<ProductDetails />)
      const productName = getByTestId("productName")
      await waitFor(() => expect(productName.innerHTML).toBe('Morning Joggers'), {timeout: 4000})

  })

})