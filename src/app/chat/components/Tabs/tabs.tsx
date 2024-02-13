import React, { FC } from "react";
import styles from "./Tabs.module.css";

type Tab = {
  Component: FC<{ index: number }>;
  icons: FC<{ label: string }>;
  index: number;
  label: string;
};

type TabsProps = {
  className?: string;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  selectedTab: number;
  tabs: Tab[];
};

const Tabs: FC<TabsProps> = ({
  className = "tabs-component",
  tabs = [],
  selectedTab = 0,
  onClick,
  orientation = "horizontal"
}) => {
  const selectedTabObject = tabs.find((tab) => tab.index === selectedTab);

  return (
    <div
      className={
        orientation === "vertical" ? `${className} vertical` : className
      }
    >
      <div
        aria-orientation={orientation}
        className={styles.header}
        role="tablist"
      >
        {tabs.map((tab) => (
          <button
            aria-controls={`tabpanel-${tab.index}`}
            aria-selected={selectedTab === tab.index}
            className={selectedTab === tab.index ? "active" : ""}
            id={`btn-${tab.index}`}
            key={tab.index}
            onClick={() => onClick(tab.index)}
            role="tab"
            style={{
              color: selectedTab === tab.index ? "white" : "gray",
            }}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            type="button"
          >
            <tab.icons label={tab.label} />
          </button>
        ))}
      </div>
      <hr style={{
        color: "gray",
        opacity: "0.1",
      }} />
      <div
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
        role="tabpanel"
      >
        {selectedTabObject && <selectedTabObject.Component index={selectedTab} />}
      </div>
    </div>
  );
};

export default Tabs;
