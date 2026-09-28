import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const submitEnquiry = async (enquiryData) => {
  try {
    const response = await axios.post(`${API_URL}/enquiries`, enquiryData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || 'We could not submit your enquiry.');
    }
    throw new Error(error.message || 'We could not submit your enquiry. Please try again.');
  }
};
