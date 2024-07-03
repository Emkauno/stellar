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
        "Fundada en 2022 Stellar se ha comprometido a servir a los productores chilenos que buscan soluciones agrícolas modernas. También pretendemos ser una parada única para los productos complementarios que se encuentran en los growshops de Chile. Creemos que con las herramientas y el conocimiento adecuados, cualquiera puede lograr resultados notables y elevar sus experiencias.",
      tabImage: "/city.jpg",
      tabReverse: false,
    },
    {
      tabTitle: "Visión",
      tabHeader: "Visión",
      tabDescription:
        "Nuestra visión en Stellar es ser la fuente confiable de innovación y calidad en la cultivación indoor, brindando a cada cultivador, desde el principiante hasta el experto, las herramientas y el apoyo necesarios para alcanzar niveles excepcionales de éxito y crecimiento en sus proyectos de cultivo.",
      tabImage: "/vision.png",
      tabReverse: true,
    },
  ];
  const [activeTab, setActiveTab] = useState("tab-2");

  const clickHandler = (index) => {
    setActiveTab(`tab-${index}`);
  };
  return (
    <ContentWrapper id="misionyvision">
      <h2>Sobre nosotros</h2>
      <p>Stellar fue creado con la pasión de ofrecer productos para cultivación y cultura con calidad e innovación. Por eso buscamos productos con resultados verificados y creamos un catálogo de artículos complementarios para eliminar el dolor de cabeza al comprar. Invitamos a los cultivadores y fanáticos de la cultura a comprar con nosotros y desbloquear todo su potencial.</p>
      <TabsContainer>
        <TabsHeader>
          <LayoutGroup transition={{ duration: 0.3 }}>
            {items.map((item, i) => (
              <button
                onClick={() => clickHandler(i + 2)}
                className={activeTab === `tab-${i + 2}` ? "active" : null}
                key={`tabItem-${i}`}
              >
                {item.tabTitle && <h3>{item.tabTitle}</h3>}
                {activeTab === `tab-${i + 2}` ? (
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
              activeTab === `tab-${i + 2}` && (
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
