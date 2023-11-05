import "./Page.css";
import Card from "../atoms/Card";
import Label from "../atoms/Label";
import Title from "../atoms/Title";

interface IPageProps {
    title: string,
    content: string,
};

const Page = ({title, content}: IPageProps) => {

    return (
    <Card className="Page">
        <Title>{title}</Title>
        <Label content={content}/>
    </Card>
    )
};

export default Page;