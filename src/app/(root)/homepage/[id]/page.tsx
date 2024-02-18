export default function OnboardingUser({
  params,
}: {
  params: { id: string };
}) {
  return (
    <section>
      <h1>Onboarding user {params.id}</h1>
    </section>
  );
}
