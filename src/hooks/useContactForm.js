import { useState, useCallback } from 'react';
import {
  validateName,
  validateEmail,
  validatePhone,
  validateSubject,
  validateMessage
} from '../utils/validation.js';

/**
 * useContactForm - Custom hook for managing contact form state and submission
 * Handles form data, validation, API submission, and state management
 *
 * @param {function} onSuccess - Optional callback to execute on successful submission
 * @param {array} allowedSubjects - Optional array of allowed subject values
 * @returns {object} - { formData, errors, isSubmitting, success, successMessage, handleChange, handleSubmit, resetForm }
 */
const useContactForm = (onSuccess, allowedSubjects = []) => {
  // State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Validates all form fields using validation utilities
   * @returns {object} - { isValid: boolean, errors: { [field]: string } }
   */
  const validateForm = useCallback(() => {
    const newErrors = {};

    // Validate name
    const nameValidation = validateName(formData.name);
    if (!nameValidation.isValid) {
      newErrors.name = nameValidation.error;
    }

    // Validate email
    const emailValidation = validateEmail(formData.email);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
    }

    // Validate phone (optional field)
    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error;
    }

    // Validate subject
    const subjectValidation = validateSubject(formData.subject, allowedSubjects);
    if (!subjectValidation.isValid) {
      newErrors.subject = subjectValidation.error;
    }

    // Validate message
    const messageValidation = validateMessage(formData.message);
    if (!messageValidation.isValid) {
      newErrors.message = messageValidation.error;
    }

    setErrors(newErrors);

    return {
      isValid: Object.keys(newErrors).length === 0,
      errors: newErrors
    };
  }, [formData, allowedSubjects]);

  /**
   * Handles changes to form fields
   * Updates formData state and clears error for the changed field
   *
   * @param {string} field - The form field name
   * @param {string} value - The new value for the field
   */
  const handleChange = useCallback((field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value
    }));

    // Clear error for this field when user starts editing
    if (errors[field]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[field];
        return newErrors;
      });
    }
  }, [errors]);

  /**
   * Submits form data to the API endpoint
   * Adds timestamp and source fields before submission
   * Handles network errors gracefully
   */
  const submitToAPI = useCallback(async () => {
    try {
      setIsSubmitting(true);

      // Prepare data for submission
      const dataToSubmit = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'web'
      };

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSubmit)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const responseData = await response.json();

      // Success state
      setSuccess(true);
      setSuccessMessage('Thank you for reaching out! We\'ll get back to you shortly.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Call onSuccess callback if provided
      if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(responseData);
      }

      setIsSubmitting(false);
      return { success: true };
    } catch (error) {
      // Handle network errors gracefully
      console.error('Contact form submission error:', error);

      setSuccess(false);
      setSuccessMessage('');
      setIsSubmitting(false);

      // Return error state instead of throwing
      return {
        success: false,
        error: error.message || 'Failed to send message. Please try again.'
      };
    }
  }, [formData, onSuccess]);

  /**
   * Handles form submission
   * Validates form before submission, prevents default browser behavior
   *
   * @param {event} e - The form submit event
   */
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      // Validate form
      const validation = validateForm();

      if (!validation.isValid) {
        return;
      }

      // Submit to API
      await submitToAPI();
    },
    [validateForm, submitToAPI]
  );

  /**
   * Resets the form to initial state
   * Clears all fields and errors
   */
  const resetForm = useCallback(() => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setErrors({});
    setSuccess(false);
    setSuccessMessage('');
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    success,
    successMessage,
    handleChange,
    handleSubmit,
    resetForm
  };
};

export default useContactForm;
