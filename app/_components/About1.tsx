import React from "react";
import { MaskContainer } from "../components/ui/svg-mask-effect";

const About1 = () => {
  return (
    <section className="h-[100vh] w-screen flex flex-col md:flex-row items-center justify-evenly">
      

      <MaskContainer revealSize={400}
        revealText={
          <p className="max-w-4xl mx-auto text-white text-center text-4xl font-bold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
          </p>
        }
        className="h-[40rem] w-screen rounded-md bg-transparent"
      >
        <p>
            Other Text HereOther Text HereOther Text HereOther Text HereOther Text HereOther Text He
        </p>
      </MaskContainer>
    </section>
  );
};

export default About1;
