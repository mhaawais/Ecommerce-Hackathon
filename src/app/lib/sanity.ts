import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "uww8mh60",  // Replace with your actual Sanity project ID
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-02-01",
  token: process.env.SANITY_API_TOKEN, // Ensure this is in your .env.local file
});

// Function to send feedback data to Sanity
export const sendFeedbackToSanity = async (data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    const response = await sanityClient.create({
      _type: "feedback",  // Make sure this type exists in your schema
      name: data.name,
      email: data.email,
      subject: data.subject || "",  // Ensure subject is optional or handle it accordingly
      message: data.message,
    });
    console.log("Feedback sent successfully:", response);
    return response;
  } catch (error) {
    console.error("Error sending feedback:", error);
    throw new Error("Error sending feedback");
  }
};
