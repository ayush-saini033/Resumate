export const CREATE_RESUME = `${process.env.NEXT_PUBLIC_API_URI}/api/create-resume`;

export const UPDATE_RESUME = (resumeId) =>
  `${process.env.NEXT_PUBLIC_API_URI}/api/save-resume/${resumeId}`;

export const FETCH_RESUME = (resumeId) =>
  `${process.env.NEXT_PUBLIC_API_URI}/api/fetch-resume/${resumeId}`;


export const FETCH_REMAINING_CREDITS = `/api/get-remaining-credits`;