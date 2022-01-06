import { useState } from "react";

const Accordion = ({ data }) => {
    return (
        <div>
            {data.map(({ header, body }) => (
                <AccordionItem header={header} body={body} />
            ))}
        </div>
    )
}


const AccordionItem = ({ header, body }) => {
    const [show, setShow] = useState(false);
    return (<div>
        <div onClick={() => setShow(!show)}>
            <span>{header}</span>
            <span> {show ? "▽" : "△"} </span>
        </div>

        {
            show ? (
                <p>
                    {body}
                </p>
            ) : ""
        }

    </div>)
}

export default Accordion