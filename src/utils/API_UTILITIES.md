# API Utilities Documentation

## Overview
The `api.js` module provides centralized API utilities with contact form submission, comprehensive error handling, timeout management, and automatic retry logic.

**Location:** `src/utils/api.js`
**Requirements:** 5.8, 5.10, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6

---

## Features

### 1. Contact Form Submission
- **Function:** `submitContactForm(formData)`
- **Endpoint:** `POST /api/contact`
- **Input:** Object containing name, email, phone, subject, message
- **Output:** `{ success: boolean, data?: object, error?: string }`

### 2. Timeout Handling
- **Timeout Duration:** 5 seconds (5000ms)
- **Implementation:** AbortController API
- **Behavior:** Request aborts if not completed within timeout period

### 3. Retry Logic
- **Retry Count:** Up to 2 automatic retries on timeout
- **Retry Condition:** Only retries on network timeout (AbortError)
- **Non-retryable Errors:** Validation errors (400), server errors (5xx), other HTTP errors

### 4. Error Handling
- **Network Errors:** "Unable to connect to server. Please check your internet connection."
- **Timeout Errors:** "Request took too long. Please try again."
- **Server Errors (5xx):** "A server error occurred. Please try again later."
- **Validation Errors (400):** "Please check your form for errors and try again."
- **Generic Errors:** "An error occurred. Please try again."

### 5. Logging
- **Environment:** Development mode only (`process.env.NODE_ENV === 'development'`)
- **Format:** `[API Error] <context>: <message> at <timestamp>`
- **Includes:** Error type, message, and ISO timestamp

---

## Usage Examples

### Basic Contact Form Submission
```javascript
import { submitContactForm } from './utils/api';

const handleSubmit = async (formData) => {
  const result = await submitContactForm({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 555 123 4567',
    subject: 'general',
    message: 'Hello, I have a question...'
  });

  if (result.success) {
    console.log('Form submitted successfully');
    console.log('Response data:', result.data);
  } else {
    console.error('Form submission failed:', result.error);
    // Display user-friendly error message
    setErrorMessage(result.error);
  }
};
```

### In React Component
```javascript
import { submitContactForm } from '@/utils/api';

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    const result = await submitContactForm(formData);
    
    setLoading(false);

    if (result.success) {
      // Clear form and show success message
      resetForm();
      showSuccessMessage('Thank you! We will get back to you soon.');
    } else {
      // Display error message to user
      setError(result.error);
    }
  };

  return (
    // JSX for form
  );
}
```

---

## Error Handling Flow

```
Submit Request
    ↓
[Timeout (5s)]
    ↓
  Error?
    ├─ Yes (AbortError)
    │   └─ Retry? (attempt < 2)
    │       ├─ Yes → Try again
    │       └─ No → Return timeout error
    │
    └─ No
        ├─ Response OK?
        │   ├─ Yes → Parse and return data
        │   └─ No
        │       ├─ 400 (Validation) → Return validation error
        │       ├─ 5xx (Server) → Return server error
        │       └─ Other → Return HTTP error
        │
        └─ Other Error → Return generic/specific error

Final Return: { success, data, error }
```

---

## HTTP Status Code Handling

| Status Code | Behavior | Retryable |
|------------|----------|-----------|
| 2xx (Success) | Parse response JSON and return success | N/A |
| 400 (Bad Request) | Return validation error message | No |
| 5xx (Server Error) | Throw error, no retry | No |
| Other HTTP | Throw error, no retry | No |
| Timeout (AbortError) | Retry up to 2 times | Yes |
| Network Error | Return network error message | No |

---

## API Response Format

### Success Response
```javascript
{
  success: true,
  data: {
    // Server response data
    id: '123',
    message: 'Form submission received',
    timestamp: '2024-01-15T10:30:00Z'
  }
}
```

### Error Response
```javascript
{
  success: false,
  error: 'User-friendly error message'
  // Note: Technical details never exposed to user
}
```

---

## Development Mode Logging

When `NODE_ENV=development`, errors are logged to console:

```
[API Error] Contact form timeout (attempt 1/3): Request aborted at 2024-01-15T10:30:00.123Z
[API Error] Contact form server error: Server error: 500 at 2024-01-15T10:30:05.456Z
[API Error] Contact form submission failed after retries: Request took too long at 2024-01-15T10:30:10.789Z
```

---

## Testing

### Function Signature Verification
```javascript
// Verify function exists
import { submitContactForm } from './api';
console.log(typeof submitContactForm); // 'function'

// Verify it's async
console.log(submitContactForm.constructor.name); // 'AsyncFunction'

// Verify return type is Promise
const promise = submitContactForm({...});
console.log(promise instanceof Promise); // true
```

### Timeout Testing
- Request not completed in 5s → AbortError
- First attempt → Retry
- Second attempt → Retry
- Third attempt → Fails → Return timeout error

### Error Message Testing
- Network error → "Unable to connect to server..."
- Timeout error → "Request took too long..."
- Server error → "A server error occurred..."
- Validation error → "Please check your form..."
- Generic error → "An error occurred..."

---

## Security Considerations

1. **Error Messages:** Never expose technical error details to users
2. **Data Validation:** Server-side validation is primary; client uses this for UX
3. **HTTPS:** Ensure all API endpoints use HTTPS in production
4. **CORS:** Configure CORS headers on `/api/contact` endpoint appropriately
5. **Rate Limiting:** Consider implementing rate limiting on server-side

---

## Performance Notes

- **Timeout:** 5 seconds is appropriate for most networks
- **Retries:** 2 retries provide balance between reliability and user experience
- **Logging:** Development-only logging has minimal performance impact
- **AbortController:** Properly cancels in-flight requests, preventing memory leaks

---

## Future Enhancements

- Generic `fetchWithTimeout()` function for other API calls
- Request/response interceptors for authentication
- Request queuing and deduplication
- Metrics collection for error tracking
- Exponential backoff for retries (if needed)

---

## Files Created

- `src/utils/api.js` - Main API utilities module
- `src/utils/api.test.js` - Verification tests
- `src/utils/API_UTILITIES.md` - This documentation file
