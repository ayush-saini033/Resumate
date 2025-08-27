import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";

export const inputFields = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    icon: User,
    placeholder: "Enter your first name",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    icon: User,
    placeholder: "Enter your last name",
    required: true,
  },
  {
    name: "jobTitle",
    label: "Job Title",
    type: "text",
    icon: Briefcase,
    placeholder: "Enter your job title",
    required: true,
  },
  {
    name: "address",
    label: "Address",
    type: "text",
    icon: MapPin,
    placeholder: "Enter your address",
    required: false,
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    icon: Phone,
    placeholder: "Enter your phone number",
    required: false,
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    icon: Mail,
    placeholder: "Enter your email address",
    required: true,
  },
];
