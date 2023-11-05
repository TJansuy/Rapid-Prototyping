const AllowedTags = {
    h1:  (content: any) => <h1>{content}</h1>,
    h2:  (content: any) => <h2>{content}</h2>,
    h3:  (content: any) => <h3>{content}</h3>,
    h4:  (content: any) => <h4>{content}</h4>,
    h5:  (content: any) => <h5>{content}</h5>,
    h6:  (content: any) => <h6>{content}</h6>,
    p:   (content: any) => <p>{content}</p>,
    div: (content: any) => <div>{content}</div>,
}

interface ITitleProps {
    children: any
    tag?: keyof typeof AllowedTags;
};

const Title = ({tag = 'h1', children}: ITitleProps) => {
    console.log(children)
    return <>
        {AllowedTags[tag](children)}
    </>
};

export default Title;