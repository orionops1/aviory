/**
 * Form Validation Utilities
 * Provides reusable validation functions for form fields
 */

/**
 * Validates a name field
 * Requirements: 2-100 characters, letters/spaces/hyphens/apostrophes only
 * @param {string} name - The name to validate
 * @returns {object} - { isValid: boolean, error: string | null }
 */
export const validateName = (name) => {
  if (!name || name.trim() === '') {
    return { isValid: false, error: 'Name is required' };
  }

  const trimmedName = name.trim();

  if (trimmedName.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters' };
  }

  if (trimmedName.length > 100) {
    return { isValid: false, error: 'Name must be less than 100 characters' };
  }

  // Allow letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s'-]+$/;
  if (!nameRegex.test(trimmedName)) {
    return { isValid: false, error: 'Name contains invalid characters' };
  }

  return { isValid: true, error: null };
};

/**
 * Validates an email address
 * Requirements: RFC 5322 format
 * @param {string} email - The email to validate
 * @returns {object} - { isValid: boolean, error: string | null }
 */
export const validateEmail = (email) => {
  if (!email || email.trim() === '') {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  const trimmedEmail = email.trim();

  // RFC 5322 compliant regex (simplified practical version)
  // Matches most common email formats while allowing for legitimate variations
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(trimmedEmail)) {
    return { isValid: false, error: 'Please enter a valid email address' };
  }

  return { isValid: true, error: null };
};

/**
 * Validates a phone number (optional field)
 * Requirements: If provided, must have 7+ digits; allow +, spaces, -, ()
 * @param {string} phone - The phone number to validate
 * @returns {object} - { isValid: boolean, error: string | null }
 */
export const validatePhone = (phone) => {
  // Phone is optional, so empty is valid
  if (!phone || phone.trim() === '') {
    return { isValid: true, error: null };
  }

  const trimmedPhone = phone.trim();

  // Check if phone contains only valid characters: digits, +, spaces, -, ()
  const phoneCharRegex = /^[+0-9\s\-()]+$/;
  if (!phoneCharRegex.test(trimmedPhone)) {
    return { isValid: false, error: 'Phone contains invalid characters' };
  }

  // Extract only digits to check minimum length
  const digitsOnly = trimmedPhone.replace(/\D/g, '');
  if (digitsOnly.length < 7) {
    return { isValid: false, error: 'Phone must contain at least 7 digits' };
  }

  return { isValid: true, error: null };
};

/**
 * Validates a subject against allowed subjects
 * @param {string} subject - The subject to validate
 * @param {array} allowedSubjects - Array of allowed subject values
 * @returns {object} - { isValid: boolean, error: string | null }
 */
export const validateSubject = (subject, allowedSubjects = []) => {
  if (!subject || subject.trim() === '') {
    return { isValid: false, error: 'Please select a subject' };
  }

  if (!allowedSubjects.includes(subject)) {
    return { isValid: false, error: 'Please select a subject' };
  }

  return { isValid: true, error: null };
};

/**
 * Validates a message field
 * Requirements: 10-2000 characters
 * @param {string} message - The message to validate
 * @returns {object} - { isValid: boolean, error: string | null }
 */
export const validateMessage = (message) => {
  if (!message || message.trim() === '') {
    return { isValid: false, error: 'Message is required' };
  }

  const trimmedMessage = message.trim();

  if (trimmedMessage.length < 10) {
    return { isValid: false, error: 'Message must be at least 10 characters' };
  }

  if (trimmedMessage.length > 2000) {
    return { isValid: false, error: 'Message must be less than 2000 characters' };
  }

  return { isValid: true, error: null };
};

/**
 * Validates an entire contact form object
 * @param {object} formData - Form data object with name, email, phone, subject, message
 * @param {array} allowedSubjects - Array of allowed subject values
 * @returns {object} - { isValid: boolean, errors: { [field]: string } }
 */
export const validateContactForm = (formData, allowedSubjects = []) => {
  const errors = {};

  // Validate each field
  const nameValidation = validateName(formData.name);
  if (!nameValidation.isValid) {
    errors.name = nameValidation.error;
  }

  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.error;
  }

  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.error;
  }

  const subjectValidation = validateSubject(formData.subject, allowedSubjects);
  if (!subjectValidation.isValid) {
    errors.subject = subjectValidation.error;
  }

  const messageValidation = validateMessage(formData.message);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.error;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
