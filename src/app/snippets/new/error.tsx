// Must be a client component
"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}
export default function ErrorPage({ error }: ErrorPageProps) {
  return <div>{error.message}</div>;
}
