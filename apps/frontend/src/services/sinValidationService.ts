import axios from 'axios';

interface ValidationResult {
  isValid: boolean;
  message: string;
}

export async function validateSINWithAPI(sin: string): Promise<ValidationResult> {
  try {
    const response = await axios.post('http://localhost:3000/api/sin/validate', { sin });
    return response.data;
  } catch (error) {
    console.error('Error validating SIN:', error);
    return {
      isValid: false,
      message: 'An error occurred while validating the SIN'
    };
  }
}
