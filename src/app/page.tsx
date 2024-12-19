import EventMenuForm from "./_components/EventMenuForm";
import Footer from "./_components/Footer";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="bg-[url('/images/backgroundImage.jpg')] bg-cover bg-no-repeat h-full">
      <Header />
      <EventMenuForm />
      <Footer />
    </div>
  );
}
