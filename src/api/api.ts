import axios from "axios";

interface contactform {
  name: string;
  email: string;
  message: string;
}

export const submitContactForm = async (contact: contactform) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      contact,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to submit the form", error);
    throw new Error("Faild to submit the form");
  }
};

export const getContactForm = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/get_contact`);
        return response.data
    } catch (error) {
        console.error("error getting msg",error)
        throw error
    }
};
