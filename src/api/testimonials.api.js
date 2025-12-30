import api from "./axios";

/**
 * Fetch all testimonials from the backend
 * @returns {Promise} Response with testimonials array
 */
export const getTestimonials = async () => {
  try {
    // baseURL already includes /api, so use /testimonials
    const endpoint = "/testimonials";
    console.log("Fetching testimonials from:", api.defaults.baseURL + endpoint);
    const response = await api.get(endpoint);
    console.log("Raw API response:", response);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    console.error("Error response:", error.response);
    console.error("Error config:", error.config);
    throw error;
  }
};

