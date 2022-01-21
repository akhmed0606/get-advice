import {render, cleanup, waitFor } from '@testing-library/react'
import "@testing-library/jest-dom";
import axiosMock from 'axios'
import Advice from './Advice'

afterEach(cleanup)

it("fetches and displays data", async() => {

axiosMock.get.mockResolvedValue({ advice: { advice: "" }})
    
const url = 'https://api.adviceslip.com/advice'

const { getByTestId } = render(<Advice url={url} />)
expect(getByTestId("getdata")).toHaveTextContent('GIVE ME ADVICE!')

const resolvedData =  await waitFor(() => getByTestId("resolved"));
expect(resolvedData).toHaveTextContent("");
expect(axiosMock.get).toHaveBeenCalledTimes(1);
expect(axiosMock.get).toHaveBeenCalledWith(url);
})