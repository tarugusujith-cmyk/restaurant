
import { useState } from "react";
import Button from "../common/Button";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const initialFormData: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] =
    useState<ContactFormData>(initialFormData);

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validateForm = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    console.log("Contact form submitted:", formData);

    setErrors({});
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section
      id="contact"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto max-w-[1112px]">
        <div className="text-center">
          <h2 className="font-serif text-5xl font-bold leading-none text-[#311f09] sm:text-6xl lg:text-[80px]">
            Contact us
          </h2>

          <p className="mx-auto mt-8 max-w-[974px] text-base leading-7 text-[#5c4529] sm:text-xl lg:text-[25px] lg:leading-8">
            We love hearing from our customers. Feel free to share your
            experience or ask any questions you may have.
          </p>
        </div>

        <div className="mt-16 rounded-[20px] p-6 sm:mt-20 sm:p-10 lg:mt-24 lg:p-20">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-7"
          >
            
            <div className="grid gap-7 md:grid-cols-2">
              <FormField
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="Enter your first name"
              />

              <FormField
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="Enter your last name"
              />
            </div>

            <div className="grid gap-7 md:grid-cols-2">
              <FormField
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Enter your email address"
              />

              <FormField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                placeholder="Enter the subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#311f09] sm:text-lg"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                rows={6}
                className={`w-full resize-none rounded-[20px] border bg-white px-5 py-4 text-base text-[#311f09] outline-none transition placeholder:text-[#a0978c] focus:ring-2 ${
                  errors.message
                    ? "border-red-400 focus:ring-red-300"
                    : "border-transparent focus:ring-orange-300"
                }`}
              />

              {errors.message && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex justify-center pt-3">
              <Button>
                Submit
              </Button>
            </div>
            
            {submitted && (
              <p className="text-center text-sm font-medium text-green-700 sm:text-base">
                Your message has been submitted successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

function FormField({
  label,
  name,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-base font-medium text-[#311f09] sm:text-lg"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`h-[60px] w-full rounded-[20px] border bg-white px-5 text-base text-[#311f09] outline-none transition placeholder:text-[#a0978c] focus:ring-2 sm:h-[70px] ${
          error
            ? "border-red-400 focus:ring-red-300"
            : "border-transparent focus:ring-orange-300"
        }`}
      />

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export default ContactSection;