import { TabContainer, Description, ImageHolder} from "../styles/TabsSectionStyles";

export const TabContent = ({ content }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        friction: 25,
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };
  const {
    tabHeader,
    tabDescription,
    tabImage,
    tabReverse
  } = content;
  return (
    <TabContainer variants={container} initial="hidden" animate="show" $tabReverse={tabReverse}>
      <Description>
        {tabHeader && <span>{tabHeader}</span>}
        {tabDescription && <p>{tabDescription}</p>}
      </Description>
      <ImageHolder>
        <img src={tabImage}/>
      </ImageHolder>
    </TabContainer>
  );
};
