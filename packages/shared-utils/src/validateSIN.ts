export type ValidationResult = {
  isValid: boolean;
  message: string;
};

export function validateSIN(sin: string): ValidationResult {
    if (sin.length !== 9) {
      return { isValid: false, message: 'SIN must be 9 digits' };
    }
    
    // Check if all characters are digits
    if (!/^\d+$/.test(sin)) {
      return { isValid: false, message: 'SIN must contain only digits' };
    }

    // Implement Luhn algorithm
    let sum = 0;
    let double = false;
    for (let i = sin.length - 1; i >= 0; i--) {
      let digit = parseInt(sin.charAt(i), 10);
      if (double) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      double = !double;
    }

    if (sum % 10 !== 0) {
      return { isValid: false, message: 'Invalid SIN. Please check the number and try again.' };
    }
    return { isValid: true, message: 'Valid SIN format' };
  }