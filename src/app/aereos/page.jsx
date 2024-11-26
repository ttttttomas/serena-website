import FormAereos from "@components/FormAereos";
import './Aereos.css'
export const metadata = {
    title: "Serena | Pasajes en Aereos",
    description: "Generated by create next app",
  };

function AereosPage() {
    return (
        <section id='backgroundAereos' className=" flex justify-center md:justify-start background px-20 py-20">
            <FormAereos />
        </section>
    );
}

export default AereosPage;