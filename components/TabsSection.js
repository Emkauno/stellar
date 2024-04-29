import { useState } from "react";
import { TabContent } from "./TabContent";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  TabsContainer,
  TabsHeader,
  ContentWrapper,
} from "../styles/TabsSectionStyles";

const TabsSection = () => {
  const items = [
    {
      tabTitle: "Misión",
      tabHeader: "Misión",
      tabDescription:
        "Nuestra misión es simple pero poderosa: empoderar a cultivadores de todos los niveles para que alcancen el éxito dentro de sus entornos de cultivo interiores. Creemos que con las herramientas y el conocimiento adecuados, cualquiera puede lograr resultados notables y elevar sus experiencias de cultivación.",
      tabImage: "/water.svg",
    },
    {
      tabTitle: "Visión",
      tabHeader: "Visión",
      tabDescription:
        "Nuestra visión en Stellar es ser la fuente confiable de innovación y calidad en la cultivación indoor, brindando a cada cultivador, desde el principiante hasta el experto, las herramientas y el apoyo necesarios para alcanzar niveles excepcionales de éxito y crecimiento en sus proyectos de cultivo.",
      tabImage: "/examine.svg",
      tabReverse: true,
    },
  ];
  const [activeTab, setActiveTab] = useState("tab-1");

  const clickHandler = (index) => {
    setActiveTab(`tab-${index}`);
  };
  return (
    <ContentWrapper id="misionyvision">
      <h2>Sobre nosotros</h2>
      <p>Transformamos la cultivación interior con calidad e innovación, ofreciendo equipos y suplementos premium para potenciar a nuestros cultivadores. Con un compromiso arraigado hacia la calidad y la innovación, nos esforzamos por proveer a los cultivadores equipos de alta calidad y suplementos premium que desbloquean todo su potencial.</p>
      <TabsContainer>
        <TabsHeader>
          <LayoutGroup transition={{ duration: 0.3 }}>
            {items.map((item, i) => (
              <button
                onClick={() => clickHandler(i + 1)}
                className={activeTab === `tab-${i + 1}` ? "active" : null}
                key={`tabItem-${i}`}
              >
                {item.tabTitle && <h3>{item.tabTitle}</h3>}
                {activeTab === `tab-${i + 1}` ? (
                  <motion.div
                    className="underline"
                    layoutId="underline"
                    key={`underline-${i}`}
                  />
                ) : null}
              </button>
            ))}
          </LayoutGroup>
        </TabsHeader>
        <AnimatePresence initial={false} mode="wait">
          {items.map(
            (item, i) =>
              activeTab === `tab-${i + 1}` && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  key={`tabMotion-${i}`}
                  style={{ width: "100%" }}
                >
                  <TabContent content={item} key={`tabContent-${i}`} />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </TabsContainer>
    </ContentWrapper>
  );
};

export default TabsSection;
