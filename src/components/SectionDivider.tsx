

export default function SectionDivider({name}: {name: string}) {
  return (
    <div className="relative flex gap-[5px] items-center ">
        <div className="h-[15px] w-[3px] bg-[#EE626B]"></div>
        <h1 className="text-[#EE626B] font-bold uppercase ">{name}</h1>
    </div>
  )
}
