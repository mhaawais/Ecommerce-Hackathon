import { defineType } from "sanity";

export default defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
    },
    {
      name: "companyName",
      title: "Company Name",
      type: "string",
    },
    {
      name: "country",
      title: "Country",
      type: "string",
    },
    {
      name: "streetAddress",
      title: "Street Address",
      type: "string",
    },
    {
      name: "town",
      title: "Town/City",
      type: "string",
    },
    {
      name: "province",
      title: "Province",
      type: "string",
    },
    {
      name: "zipCode",
      title: "ZIP Code",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "additionalInfo",
      title: "Additional Information",
      type: "text",
    },
    {
      name: "paymentMethod",
      title: "Payment Method",
      type: "string",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          title: "Order Item",
          fields: [
            { name: "id", title: "ID", type: "string" }, // ✅ FIXED (Changed `_id` to `id`)
            { name: "name", title: "Name", type: "string" },
            { name: "price", title: "Price", type: "number" },
            { name: "quantity", title: "Quantity", type: "number" },
            {
              name: "image",
              title: "Image",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "subtotal",
      title: "Subtotal",
      type: "number",
    },
    {
      name: "total",
      title: "Total",
      type: "number",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
    },
  ],
});
