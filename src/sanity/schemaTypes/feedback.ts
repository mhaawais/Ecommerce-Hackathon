/* eslint-disable import/no-anonymous-default-export */
// feedback of customer
export default {
    name: "feedback",
    title: "Feedback",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "email",
        title: "Email",
        type: "string",
      },
      {
        name: "subject",
        title: "Subject",
        type: "string",
      },
      {
        name: "message",
        title: "Message",
        type: "text",
      },
    ],
  };
  