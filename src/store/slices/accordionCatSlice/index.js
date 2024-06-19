import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        category:"Men",
        items:["Coats","Jackets","Party Wear","Shirt"]
    },
    {
        category:"Women",
        items:["Coats","Jackets","Party Wear","Shirt"]
    },
    {
        category:"Kids",
        items:["Coats","Jackets","Party Wear","Shirt"]
    },
];
const accordionSlice = createSlice({
    name:"AccordionSlice",
    initialState:initialState
});

export default accordionSlice;