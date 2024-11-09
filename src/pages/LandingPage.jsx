import React from "react";
import Main from "../components/Main";
import FrameComponent2 from "../components/FrameComponent2";
import ClickToLearn from "../components/ClickToLearn";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";

const LandingPage = () => {
  return (
    <div className="w-full relative bg-[#f9f4f4] overflow-auto flex flex-col items-end justify-start pt-0 px-0 pb-[145px] box-border gap-[125px] leading-normal tracking-normal text-left text-[32px] text-[#002724] font-[Nexa] lg:gap-[62px] mq361:gap-[16px] mq400:gap-[31px]">
      <Main />
      <FrameComponent2 />
      <section className="w-full h-[831px] relative !m-0 flex items-center justify-center">
        <img
          className="absolute h-full top-0 left-0 right-0 w-[1341px] max-h-full object-cover"
          alt="Background Shape"
          src="/background-shape@2x.png"
        />
        <img
          className="absolute top-[564px] left-[660px] rounded-[7px] w-[137px] h-[43px] object-cover z-10"
          alt="Image 1"
          src="/image-1-1@2x.png"
        />
        <img
          className="absolute top-[566px] left-[819px] rounded-[7px] w-[137px] h-[41px] object-cover z-10"
          alt="Image 2"
          src="/image-2-1@2x.png"
        />
      </section>
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[475px] box-border gap-[164px] max-w-full lg:pb-[309px] mq361:gap-[41px] mq370:pb-[201px] mq400:gap-[82px] mq400:pb-[131px]">
        <ClickToLearn />
        <div className="w-[785px] flex flex-row items-start justify-center py-0 px-[20px] box-border max-w-full">
          <FrameComponent1 />
        </div>
      </section>
      <img
        className="w-full h-[774px] absolute !m-0 top-[60px] left-0 right-0 max-w-full overflow-hidden object-cover z-3"
        alt="Separator"
        src="/separator@2x.png"
      />
      <div className="w-[723px] flex flex-row items-start justify-center pt-0 px-[20px] pb-[183px] box-border max-w-full">
        <div className="w-[559px] flex flex-col items-start justify-start gap-[22px] max-w-full">
          <h1 className="m-0 self-stretch text-inherit leading-[122.2%] font-extrabold z-10 mq361:text-[19px] mq361:leading-[23px] mq370:text-[26px] mq370:leading-[31px]">
            Improve Your Basic Knowledge
          </h1>
          <div className="w-[537px] text-[16px] leading-[150%] font-extrabold whitespace-pre-wrap z-10">
            {`Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit, Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit.`}
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <footer className="self-stretch flex flex-row items-start justify-center py-0 px-[20px] box-border max-w-full">
        <FrameComponent7 />
      </footer>
    </div>
  );
};

export default LandingPage;
