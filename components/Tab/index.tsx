import {
  FC,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";

interface TabProps {
  tabs: string[];
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}
const Tab: FC<TabProps> = ({
  tabs,
  selectedTab,
  setSelectedTab,
}) => {
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const [mobileTabChangerOpen, setMobileTabChangerOpen] =
    useState<boolean>(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileDropdownRef.current &&
      !mobileDropdownRef.current.contains(event.target as Node)
    ) {
      setMobileTabChangerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const mobileChangeTabs = (tab: string) => {
    setSelectedTab(tab);
    setMobileTabChangerOpen(false);
  };

  return (
    <>
      <div className="hidden md:flex w-full bg-neutral-200 rounded-full">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            className={`w-full border-4 ${
              selectedTab === tab
                ? "bg-cyan-400 border-[#FFFFFF7F] text-white"
                : "text-neutral-500 border-transparent"
            } rounded-full py-2 px-4 flex justify-center cursor-pointer`}
            onClick={() => setSelectedTab(tab)}
          >
            <p className="font-bold text-2xl">{tab}</p>
          </div>
        ))}
      </div>

      <div ref={mobileDropdownRef} className="relative">
        <div
          className="flex md:hidden items-center justify-center gap-x-2 py-2 px-4 w-full bg-cyan-400 border-4 border-cyan-100 rounded-full cursor-pointer"
          onClick={() => setMobileTabChangerOpen((x) => !x)}
        >
          <p className="text-white font-bold text-2xl">{selectedTab}</p>
          <Image
            src="/icons/caret-down-fill.svg"
            alt="caret-down-fill"
            width={24}
            height={24}
            className={`${mobileTabChangerOpen && "rotate-180"}`}
          />
        </div>

        {mobileTabChangerOpen && (
          <div className="z-40 font-bold text-sm overflow-hidden absolute block md:hidden top-full bg-neutral-100 text-black w-full rounded-2xl mt-1 shadow-2xl">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                className="bg-transparent py-3 px-4 flex justify-center"
                onClick={() => mobileChangeTabs(tab)}
              >
                <p>{tab}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Tab;
