import imgImage from "./951ad56c3703dc6b756965735b15d589cd5bffc3.png";

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start leading-[0] not-italic relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-full">
        <h4 className="block leading-[1.2]">A really compelling headline</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45]">Call out a feature, benefit, or value of your site, then link to a page where people can learn more about it.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-black content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Call to action</p>
      </div>
    </button>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[48px] h-full items-start justify-center min-w-px relative" data-name="Content">
      <Text />
      <Button />
    </div>
  );
}

export default function Feature() {
  return (
    <section className="content-stretch flex gap-[64px] items-center px-[64px] py-[120px] relative size-full" data-name="Feature 1">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Content />
      </div>
      <div aria-hidden className="flex-[1_0_0] h-[432px] min-w-px relative rounded-[16px]" role="presentation" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      </div>
    </section>
  );
}
