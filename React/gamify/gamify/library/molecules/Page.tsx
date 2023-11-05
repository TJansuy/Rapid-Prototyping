import "./Page.css";
import Card from "../atoms/Card";
import Label from "../atoms/Label";
import Title from "../atoms/Title";
import Button from "../atoms/Button";

interface IPageProps {
    title: string,
    content: string,
};

const Page = ({title, content}: IPageProps) => {

    return (
    <Card className="Page">
        <Title>{title}</Title>
        <Label content={content}/>
        <Button 
            onClick={(a:any) => console.log(a)} 
            value={() => new Date()}
            >
                Submit
        </Button>
    </Card>
    )
};

export default Page;