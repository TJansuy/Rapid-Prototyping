
interface ICardProps {
    children: any;
    className?: string;
};

const Card = ({children, className}: ICardProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )

};


export default Card;