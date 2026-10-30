/**
 * Form Constants and Configuration
 * Centralized definitions for form subjects, validation errors, and defaults
 */

/**
 * Available contact form subjects
 * Used for subject field validation and dropdown options
 */
export const CONTACT_FORM_SUBJECTS = [
  'general',
  'bespoke',
  'gemologist',
  'consultation',
  'support',
  'other'
];

/**
 * Validation error messages
 * Centralized error messages used across form validation
 */
export const VALIDATION_ERRORS = {
  // Name validation errors
  NAME_REQUIRED: 'Name is required',
  NAME_MIN_LENGTH: 'Name must be at least 2 characters',
  NAME_MAX_LENGTH: 'Name must be less than 100 characters',
  NAME_INVALID_CHARS: 'Name contains invalid characters',

  // Email validation errors
  EMAIL_INVALID: 'Please enter a valid email address',

  // Phone validation errors
  PHONE_MIN_DIGITS: 'Phone must contain at least 7 digits',
  PHONE_INVALID_CHARS: 'Phone contains invalid characters',

  // Subject validation errors
  SUBJECT_REQUIRED: 'Please select a subject',

  // Message validation errors
  MESSAGE_REQUIRED: 'Message is required',
  MESSAGE_MIN_LENGTH: 'Message must be at least 10 characters',
  MESSAGE_MAX_LENGTH: 'Message must be less than 2000 characters'
};

/**
 * Default form values for contact form
 * Use these to initialize form state
 */
export const FORM_DEFAULTS = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

/**
 * Form field metadata and constraints
 * Provides UI hints and validation boundaries
 */
export const FORM_CONSTRAINTS = {
  name: {
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s'-]+$/,
    placeholder: 'Your full name'
  },
  email: {
    placeholder: 'your.email@example.com',
    type: 'email'
  },
  phone: {
    minDigits: 7,
    pattern: /^[+0-9\s\-()]*$/,
    placeholder: '+1 (555) 123-4567',
    optional: true
  },
  subject: {
    options: CONTACT_FORM_SUBJECTS,
    placeholder: 'Select a subject'
  },
  message: {
    minLength: 10,
    maxLength: 2000,
    placeholder: 'Please tell us more...',
    rows: 5
  }
};

/**
 * Subject labels for display
 * Maps subject values to user-friendly labels
 */
export const SUBJECT_LABELS = {
  general: 'General Inquiry',
  bespoke: 'Bespoke Inquiry',
  gemologist: 'Gemologist Consultation',
  consultation: 'Professional Consultation',
  support: 'Customer Support',
  other: 'Other'
};

/**
 * Success messages for form submission
 */
export const FORM_SUCCESS_MESSAGES = {
  contactForm: 'Thank you for contacting us. We will get back to you shortly.'
};
