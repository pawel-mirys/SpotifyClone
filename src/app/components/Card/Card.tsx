import { CardContainer, CardContainerProps } from './CardContainer';

type CardProps = {
  cardType: CardContainerProps['cardType'];
  title: CardContainerProps['title'];
  description?: CardContainerProps['description'];
  className?: CardContainerProps['className'];
  coverName: CardContainerProps['coverName'];
};

export const Card = ({ cardType, title, description, className, coverName }: CardProps) => {
  return (
    <CardContainer
      cardType={cardType}
      title={title}
      description={description}
      className={className}
      coverName={coverName}
    />
  );
};
