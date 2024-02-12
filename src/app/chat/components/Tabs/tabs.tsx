import React, { FC } from "react";
import styles from "./Tabs.module.css";

type Tab = {
  label: string;
  index: number;
  Component: FC<{ index: number }>;
  icons: FC<{ label: string }>;
};

type TabsProps = {
  tabs: Tab[];
  selectedTab: number;
  onClick: (index: number) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
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
        className={styles.header}
        role="tablist"
        aria-orientation={orientation}
      >
        {tabs.map((tab) => (
          <button
            className={selectedTab === tab.index ? "active" : ""}
            style={{
              color: selectedTab === tab.index ? "white" : "gray",
            }}
            onClick={() => onClick(tab.index)}
            key={tab.index}
            type="button"
            role="tab"
            aria-selected={selectedTab === tab.index}
            aria-controls={`tabpanel-${tab.index}`}
            tabIndex={selectedTab === tab.index ? 0 : -1}
            id={`btn-${tab.index}`}
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
        role="tabpanel"
        aria-labelledby={`btn-${selectedTab}`}
        id={`tabpanel-${selectedTab}`}
      >
        {selectedTabObject && <selectedTabObject.Component index={selectedTab} />}
      </div>
    </div>
  );
};

export default Tabs;
