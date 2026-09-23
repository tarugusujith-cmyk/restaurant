import InfoPage from "./InfoPage";

function Testimonials() {
  return (
    <InfoPage
      title="Testimonials"
      description="Read a few words from guests who have enjoyed the Delizioso dining experience."
      items={[
        "Fresh ingredients and welcoming service made our dinner special.",
        "The pasta was delicious and the atmosphere felt warm and comfortable.",
        "A lovely place for a family meal and a relaxed Italian dining experience.",
      ]}
    />
  );
}

export default Testimonials;
